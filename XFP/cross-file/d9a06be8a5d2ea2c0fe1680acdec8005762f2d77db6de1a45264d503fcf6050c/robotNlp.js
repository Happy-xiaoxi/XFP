var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
export function robotNlp() {
    var _this = this;
    var rnlp = robotNlp.prototype;
    _this.company_id = company_id;
    _this.robot_id = '';
    _this.conn_show_index = 0;
    _this.conn_prompts = [];
    _this.now_type = '';
    _this.ask_url = '/client/clientRobot.php';
    _this.ask_id = 0;
    _this.transition_id = 0;
    _this.unanswer_id = 0;
    _this.now_match = '';
    _this.showMsgProcessTimer = 0;
    _this.ask_times = 0;
    _this.stop_request = 0;
    _this.requset_id = 0;
    _this.old_robot_id = '';
    rnlp.init = function (robot_id, talk_robot_info) {
        _this.robot_id = robot_id;
        if (talk_robot_info['task_zsk_id'] != '' && talk_robot_info['task_zsk_id'] != undefined) {
            infos = talk_robot_info['task_zsk_id'].split(',');
            if (infos != undefined && infos.length > 2) {
                _this.ask_id = infos[1];
                _this.ask_times = infos[2];
                _this.transition_id = infos[3];
                _this.unanswer_id = infos[4];
                if (infos[0] == 'mobile' || infos[0] == 'wechat')
                    _this.now_type = 'ask';
                else
                    _this.now_type = infos[0];
                if (_this.now_type == 'contacted') {
                    _this.old_robot_id = _this.robot_id;
                    _this.robot_id = '';
                    return;
                }
                if (_this.now_type == 'conn')
                    _this.conn_show_index = talk_robot_info['index'];
                if (_this.now_type == 'greetings' || _this.now_type == 'ask' || _this.now_type == 'unanswer') {
                    _this.handleNowShow();
                    return;
                }
            }
        }
        if (talk_robot_info['khnumber'] > 0 && talk_robot_info['task_zsk_id'] == '') {
            _this.now_type = 'conn';
            return;
        }
        if (_this.now_type == 'conn' || _this.now_type == '')
            rnlp.getConnPrompt();
    };
    rnlp.showConnPrompt = function () {
        _this.now_type = 'conn';
        conn_prompts = _this.conn_prompts;
        if (conn_prompts <= 0) {
            _this.removeLoading();
            return;
        }
        if (typeof conn_prompts[_this.conn_show_index] != 'undefined') {
            _this.show(conn_prompts[_this.conn_show_index].prompt, 'conn', -1, _this.conn_show_index + 1);
            _this.conn_show_index++;
            if (_this.conn_show_index >= conn_prompts.length) {
                _this.handleNowShow();
                return;
            }
            _this.addLoading();
            _this.showMsgProcessTimer = setTimeout(function () {
                _this.showConnPrompt();
            }, conn_prompts[_this.conn_show_index].times * 1000);
        }
    };
    rnlp.handleNowShow = function (question_msg, type) {
        if (question_msg == '' && type == 1) {
            if (_this.robot_id != '' || _this.robot_id == '' && _this.old_robot_id != '')
                _this.getAskContact('unanswer', _this.unanswer_id);
            return;
        }
        if (_this.robot_id == '')
            return;
        if (question_msg != undefined && _this.isMatch(question_msg))
            return;
        switch (_this.now_type) {
        case 'conn':
            _this.getAskContact('ask');
            break;
        case 'ask':
            _this.getAskContact('greetings', _this.transition_id);
            break;
        case 'greetings':
            if (_this.ask_times < 3)
                _this.getAskContact('ask', _this.ask_id);
            break;
        case 'contacted':
            _this.getAskContact('contacted');
            break;
        case 'unanswer':
            _this.getAskContact('ask', _this.ask_id);
            break;
        }
    };
    rnlp.getAskContact = function (cmd, id) {
        if (id == undefined)
            id = 0;
        if (id == undefined)
            index = 0;
        _this.clearProcessTimer();
        _this.requset_id++;
        $.ajax({
            url: _this.ask_url,
            data: {
                type: 'robotNlp',
                cmd: cmd,
                robot_id: _this.robot_id == '' ? _this.old_robot_id : _this.robot_id,
                company_id: _this.company_id,
                request_id: _this.requset_id,
                id: id
            },
            type: 'POST',
            dataType: 'JSON',
            success: function (res) {
                if (res.request_id == undefined || !_this.checkResposeValid(res.request_id))
                    return;
                data = res.data;
                if (data.id != undefined && data.id != 0) {
                    _this.addLoading();
                    _this.showMsgProcessTimer = setTimeout(function () {
                        _this.show(data.guide_prompt, cmd, data.id, 1, data.ask_target);
                    }, data.interval_time * 1000);
                } else {
                    switch (cmd) {
                    case 'greetings':
                        _this.now_type = cmd;
                        _this.handleNowShow();
                        break;
                    case 'contacted':
                        _this.show('11', 'contacted', -1, 1);
                        break;
                    case 'unanswer':
                        _this.show('11', 'unanswer', 0, 1);
                        break;
                    default:
                        _this.removeLoading();
                    }
                }
            },
            error: function () {
                if (cmd == 'contacted') {
                    _this.show('', 'contacted', -1, 1);
                }
                _this.removeLoading();
            }
        });
    };
    rnlp.getConnPrompt = function () {
        _this.addLoading();
        _this.requset_id++;
        $.ajax({
            url: _this.ask_url,
            data: {
                type: 'robotNlp',
                robot_id: _this.robot_id,
                company_id: _this.company_id,
                request_id: _this.requset_id,
                cmd: 'conn'
            },
            type: 'POST',
            dataType: 'JSON',
            success: function (res) {
                if (res.request_id == undefined || !_this.checkResposeValid(res.request_id))
                    return;
                data = res.data;
                if (data.length > 0) {
                    _this.conn_prompts = data;
                }
                if (_this.conn_show_index == 0) {
                    _this.showConnPrompt();
                } else if (typeof _this.conn_prompts[_this.conn_show_index] != 'undefined') {
                    _this.showMsgProcessTimer = setTimeout(function () {
                        _this.showConnPrompt();
                    }, _this.conn_prompts[_this.conn_show_index].times * 1000);
                }
            },
            error: function () {
                _this.removeLoading();
                console.log('get conn error');
            }
        });
    };
    rnlp.isMatch = function (msg) {
        if (_this.robot_id == '')
            return false;
        _this.clearProcessTimer();
        _this.removeLoading();
        _this.ask_times = 0;
        switch (_this.now_match) {
        case 'wechat':
            if (msg.match(/[^\d]?(1[3-9]\d{9})(?!\d)/gi)) {
                _this.getContacted();
                return true;
            }
            if (msg.match(/[^A-Za-z]?[A-Za-z](\w|-){5,19}(?![\w#])/gi)) {
                _this.getContacted();
                return true;
            }
            break;
        default:
            if (msg.match(/[^\d]?(1[3-9]\d{9})(?!\d)/gi) || msg.match(/[^\d]?(0\d{2,3}-?\d{7,8})(?!\d)/gi)) {
                _this.getContacted();
                return true;
            }
            break;
        }
        _this.now_type = 'greetings';
        return false;
    };
    rnlp.getContacted = function () {
        if (_this.robot_id == '')
            return;
        if (_this.now_type != 'contacted') {
            _this.old_robot_id = _this.robot_id;
            _this.now_type = 'contacted';
            _this.handleNowShow();
            _this.robot_id = '';
        }
    };
    rnlp.show = function (msg, cmd, id, index, ask_target) {
        _this.removeLoading();
        if (ask_target == undefined)
            ask_target = cmd;
        _this.now_type = cmd;
        _this.now_match = ask_target;
        if (cmd == 'ask') {
            _this.ask_id = id;
            _this.ask_times++;
        }
        if (cmd == 'greetings')
            _this.transition_id = id;
        if (cmd == 'unanswer')
            _this.unanswer_id = id;
        if (_this.robot_id == '')
            ask_target = 'contacted';
        task_zsk_id = ask_target + ',' + _this.ask_id + ',' + _this.ask_times + ',' + _this.transition_id + ',' + _this.unanswer_id;
        _this.msgShow(msg, task_zsk_id, index);
        if (cmd == 'ask' && _this.ask_times < 3)
            _this.handleNowShow();
        if (cmd == 'greetings' || cmd == 'unanswer')
            _this.handleNowShow();
    };
    rnlp.close = function () {
        _this.old_robot_id = _this.robot_id;
        _this.robot_id = '';
        _this.clearProcessTimer();
        _this.removeLoading();
    };
    rnlp.clearProcessTimer = function () {
        clearTimeout(_this.showMsgProcessTimer);
        _this.stop_request = _this.requset_id;
    };
    rnlp.checkResposeValid = function (request_id) {
        if (request_id > _this.stop_request)
            return true;
        return false;
    };
    rnlp.msgShow = function (msg, task_zsk_id, index) {
    };
    rnlp.addLoading = function () {
    };
    rnlp.removeLoading = function () {
    };
}
