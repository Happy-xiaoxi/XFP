var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
export function taskRobot() {
    var _this = this;
    var taskProto = taskRobot.prototype;
    var task_robot = {};
    _this.company_id = 0;
    _this.robot_url = 'client/client_robot_task.php';
    _this.is_create = true;
    _this.is_use = false;
    _this.task_un_answer = [];
    _this.first_task_list = [];
    _this.now_task_list = {};
    _this.now_task = {};
    _this.intype = 'question';
    _this.answer_show_index = 0;
    _this.index_times = 0;
    _this.m_prompt_guide_list = [];
    _this.prompt_guide_size = -1;
    _this.prompt_guide_timer = 0;
    _this.landpage = '';
    _this.talkpage = '';
    _this.keyword = '';
    _this.search_engine = '';
    _this.guide_type = '0';
    _this.last_msg = '';
    _this.task_type = 'match_first';
    _this.task_type_list = [
        'match_first',
        'keyword_first'
    ];
    _this.in_show_answer = false;
    _this.prepare_msg_list = [];
    _this.no_talk_timer = 0;
    _this.is_continue_task = 0;
    _this.inConnPrompt = false;
    _this.showMsgProcessTimer = 0;
    _this.init_task_question = false;
    _this.is_mobile = false;
    taskProto.init = function (company_id, task_robot_data, is_use, talk_robot_info, alias, m_prompt_guide_list, landpage, keyword, task_type, talkpage, search_engine, guide_type, is_mobile) {
        _this.company_id = company_id;
        _this.task_robot = task_robot_data;
        _this.is_use = is_use == '' ? 0 : parseInt(is_use);
        _this.m_prompt_guide_list = m_prompt_guide_list;
        _this.landpage = landpage;
        _this.talkpage = talkpage;
        _this.keyword = keyword;
        _this.search_engine = search_engine;
        _this.guide_type = guide_type;
        _this.is_mobile = is_mobile;
        if (typeof task_type != 'undefined' && _this.task_type_list.indexOf(task_type) !== -1) {
            _this.task_type = task_type;
        }
        if (!_this.is_use)
            return;
        var guide_content = _this.task_robot.guide_content;
        if (_this.task_robot.task_id == 0)
            _this.is_create = false;
        if (typeof guide_content[0] != 'undefined') {
            _this.first_task_list = guide_content[0];
        }
        _this.task_un_answer = _this.task_robot.tclose_promet;
        if (typeof talk_robot_info.khnumber != 'undefined' && typeof talk_robot_info.task_zsk_id != 'undefined' && typeof guide_content[talk_robot_info.task_zsk_id] != undefined) {
            if (typeof guide_content[talk_robot_info.task_zsk_id] != 'undefined') {
                _this.now_task_list = guide_content[talk_robot_info.task_zsk_id];
            } else {
                _this.now_task_list = _this.first_task_list;
            }
            _this.index_times = talk_robot_info.index_times;
            _this.now_task = talk_robot_info.now_task;
            if (talk_robot_info.index != 0 && typeof _this.now_task.answer != 'undefined' && typeof _this.now_task.answer[talk_robot_info.index - 1] != 'undefined' && _this.now_task.answer[talk_robot_info.index - 1].type == 'question') {
                if (talk_robot_info.index_times <= _this.now_task.answer[talk_robot_info.index - 1].count) {
                    _this.init_task_question = true;
                }
                _this.answer_show_index = talk_robot_info.index;
            } else {
                _this.answer_show_index = talk_robot_info.index == 0 ? 0 : parseInt(talk_robot_info.index) + 1;
            }
            _this.prompt_guide_size = talk_robot_info.guide_size;
            _this.is_continue_task = 1;
            if (_this.is_mobile) {
                var _rid = mobile_configs.robot_id;
                if (_rid == '') {
                    _rid = mobile_configs.frobot_id;
                }
                if (mobile_configs.all_robot_info[_rid].task_switch == 0) {
                    if (!talk_robot_info.khnumber) {
                        _this.getNewPrompt();
                    }
                } else {
                    if (talk_robot_info.task_zsk_id == -1) {
                        _this.showTConnPrompt(_this.task_robot.tconn_promet, 'multi_window');
                    }
                }
            } else {
                var _rid = robot_id;
                if (_rid == '') {
                    _rid = frobot_id;
                }
                if (robotList[_rid].task_switch == 0) {
                    if (!talk_robot_info.khnumber) {
                        _this.getNewPrompt();
                    }
                } else {
                    if (talk_robot_info.task_zsk_id == -1) {
                        _this.showTConnPrompt(_this.task_robot.tconn_promet, 'multi_window');
                    }
                }
            }
        } else {
            if (_this.is_mobile) {
                var _rid = mobile_configs.robot_id;
                if (_rid == '') {
                    _rid = mobile_configs.frobot_id;
                }
                if (mobile_configs.all_robot_info[_rid].task_switch == 0) {
                    if (!talk_robot_info.khnumber) {
                        _this.getNewPrompt();
                    }
                } else {
                    if (is_use) {
                        _this.showTConnPrompt(_this.task_robot.tconn_promet);
                    }
                }
            } else {
                var _rid = robot_id;
                if (_rid == '') {
                    _rid = frobot_id;
                }
                if (robotList[_rid].task_switch == 0) {
                    if (!talk_robot_info.khnumber) {
                        _this.getNewPrompt();
                    }
                } else {
                    if (is_use) {
                        _this.showTConnPrompt(_this.task_robot.tconn_promet);
                    }
                }
            }
            _this.now_task_list = _this.first_task_list;
        }
        if (typeof alias != 'undefined' && alias != '')
            _this.robot_url = alias + '/' + _this.robot_url;
    };
    taskProto.taskContinue = function (last_msg) {
        if (_this.is_continue_task == 0)
            return;
        if (last_msg != '')
            _this.handleMsg(last_msg);
        _this.is_continue_task = 1;
        if (_this.answer_show_index > 0) {
            if (!_this.init_task_question)
                _this.isMatchHandle(_this.now_task);
        } else {
            if (typeof _this.now_task.answer != 'undefined' && _this.now_task.answer[_this.now_task.answer.length - 1].type == 'ask_option') {
                _this.showOption(_this.now_task.answer[_this.now_task.answer.length - 1].option);
            }
        }
    };
    taskProto.setNetList = function () {
        _this.answer_show_index = 0;
        _this.index_times = 0;
        var use_id = _this.now_task.link_id == 0 ? _this.now_task.id : _this.now_task.link_id;
        if (typeof guide_content[use_id] != 'undefined') {
            _this.now_task_list = guide_content[use_id];
        } else {
            _this.now_task_list = _this.first_task_list;
        }
    };
    taskProto.checkUse = function () {
        return _this.is_use;
    };
    taskProto.isMobile = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = [
            'Android',
            'iPhone',
            'SymbianOS',
            'Windows Phone',
            'iPad',
            'iPod'
        ];
        var flag = false;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = true;
                break;
            }
        }
        return flag;
    };
    taskProto.getNewPrompt = function () {
        var now_robot_info;
        if (_this.is_mobile) {
            var _rid = mobile_configs.robot_id;
            if (_rid == '') {
                _rid = mobile_configs.frobot_id;
            }
            now_robot_info = mobile_configs.all_robot_info[_rid];
        } else {
            var _rid = robot_id;
            if (_rid == '') {
                _rid = frobot_id;
            }
            now_robot_info = robotList[_rid];
        }
        $.ajax({
            url: '/client/clientRobot.php',
            data: {
                cmd: 'GES',
                com_id: _this.company_id,
                robot_id: now_robot_info.id,
                api_robot_id: now_robot_info.api_robot_id,
                api_name: now_robot_info.api_name,
                style: style,
                guest_id: guest_id
            },
            dataType: 'json',
            success: function (data) {
                var prompt = data[0];
                console.log(data);
                if (_this.is_mobile) {
                    mobile_client.showNewPrompt(prompt.question_id, '', prompt.answer, prompt.type, 'Reply', prompt.answer_type, prompt.answer2, prompt.timeout);
                } else {
                    showNewPrompt(prompt.question_id, '', prompt.answer, prompt.type, 'Reply', prompt.answer_type, prompt.answer2, prompt.timeout);
                }
            }
        });
    };
    taskProto.showTConnPrompt = function (tconn_promet, type) {
        if (tconn_promet.type == 'message') {
            if (type == 'multi_window')
                return;
            var conn_promet = tconn_promet.content;
            for (var i = 0; i < conn_promet.length; i++) {
                _this.kfShow(conn_promet[i], _this.now_task, _this.answer_show_index, _this.index_times, _this.prompt_guide_size);
            }
        } else if (tconn_promet.type == 'guide') {
            _this.showGuide();
        } else if (tconn_promet.type == 'messages') {
            _this.showMessages(tconn_promet.content);
        }
    };
    taskProto.showGuide = function (type) {
        var prompt_guide = new Array();
        var prompt_guide_default = new Array();
        var is_match = false;
        var m_prompt_guide_list = _this.m_prompt_guide_list;
        for (var i = 0; i < m_prompt_guide_list.length; i++) {
            var prompt_guide_i = m_prompt_guide_list[i].prompt;
            if (m_prompt_guide_list[i].title == '') {
                prompt_guide_default = prompt_guide_i;
                continue;
            }
            if (typeof m_prompt_guide_list[i].promote_link != 'undefined' && m_prompt_guide_list[i].promote_link != '') {
                try {
                    if (_this.landpage != '' && m_prompt_guide_list[i].link_init != '' && _this.landpage.indexOf(m_prompt_guide_list[i].link_init) !== -1) {
                        prompt_guide = prompt_guide_i;
                        is_match = true;
                        break;
                    }
                } catch (e) {
                }
            } else if (m_prompt_guide_list[i].talkpage_link != 'undefined' && m_prompt_guide_list[i].talkpage_link != '') {
                try {
                    if (_this.talkpage != '' && _this.talkpage.indexOf(m_prompt_guide_list[i].talkpage_link) !== -1) {
                        prompt_guide = prompt_guide_i;
                        is_match = true;
                        break;
                    }
                } catch (e) {
                }
            } else {
                if (_this.keyword != '' && (m_prompt_guide_list[i].title.toLowerCase().indexOf(_this.keyword.toLowerCase()) !== -1 || _this.keyword.toLowerCase().indexOf(m_prompt_guide_list[i].title.toLowerCase()) !== -1)) {
                    prompt_guide = prompt_guide_i;
                    is_match = true;
                    break;
                }
            }
        }
        if (is_match === false || _this.guide_type == '1')
            prompt_guide = prompt_guide_default;
        if (prompt_guide.length == 0) {
            return;
        }
        if (type == 'get_prompt')
            return _this.showPrompt(prompt_guide, 'get_prompt');
        _this.showPrompt(prompt_guide, 'guide');
    };
    taskProto.showMessages = function (connect_promet) {
        if (typeof connect_promet.length == 'undefined' || connect_promet.length <= 0)
            return;
        _this.showPrompt(connect_promet);
    };
    taskProto.showPrompt = function (prompt, type) {
        for (var i = 0; i < prompt.length; i++) {
            if (typeof prompt[i].type == 'undefined')
                prompt[i].type = 'message';
            prompt[i].content = prompt[i].prompt_content;
            prompt[i].isConnPrompt = 1;
        }
        var prompt_task = {
            id: '0',
            title: '',
            now_task_type: type == 'guide' ? 'guide' : '',
            parent_id: '0',
            answer: prompt,
            question: []
        };
        if (type == 'get_prompt')
            return prompt_task;
        _this.inConnPrompt = true;
        if (_this.is_continue_task == 1) {
            _this.now_task = prompt_task;
        } else {
            _this.isMatchHandle(prompt_task);
        }
    };
    taskProto.backRobotGuide = function () {
        if (_this.prompt_guide_size != -1) {
            _this.prompt_guide_size = -1;
            _this.kfShow('', _this.now_task, _this.answer_show_index, _this.index_times, _this.prompt_guide_size);
        }
        if (_this.prompt_guide_timer)
            clearTimeout(_this.prompt_guide_timer);
        if (_this.no_talk_timer)
            clearTimeout(_this.no_talk_timer);
        if (_this.inConnPrompt == true) {
            _this.inConnPrompt = false;
            try {
                clearTimeout(_this.showMsgProcessTimer);
                _this.in_show_answer = false;
                _this.removeLoading();
            } catch (e) {
            }
        }
    };
    taskProto.handleMsg = function (msg) {
        if (!_this.checkUse())
            return;
        if (!_this.is_create) {
            _this.unMatch();
            return;
        }
        msg = msg.replace(/<[^>]+>/g, '');
        if (msg == '' || _this.in_show_answer)
            return;
        if (_this.no_talk_timer)
            clearTimeout(_this.no_talk_timer);
        if (_this.answer_show_index == 0) {
            if (_this.task_type == 'match_first')
                _this.handleQaMsg(msg);
            else if (_this.task_type == 'keyword_first')
                _this.handleQaMsgByKw(msg);
        } else {
            _this.handleAnswerMsg(msg);
        }
    };
    taskProto.handleQaMsg = function (msg) {
        var keyword_obj = {};
        var now_tasks = {};
        var text_ids = '';
        var is_has_any = false;
        var any_match = '';
        for (var i = 0; i < _this.now_task_list.length; i++) {
            var now_task = _this.now_task_list[i];
            var use_id = now_task.link_id == 0 ? now_task.id : now_task.link_id;
            now_tasks[use_id] = now_task;
            var now_keywords = [];
            try {
                if (now_task.question.length > 0) {
                    for (var j = 0; j < now_task.question.length; j++) {
                        if (now_task.question[j].type == 'match') {
                            if (now_task.question[j].regular == 'any') {
                                is_has_any = true;
                                any_match = now_task;
                                continue;
                            }
                            var is_match = _this.handleMatch(now_task.question[j].regular, msg);
                            if (is_match && now_task.question[j].regular == 'wechat') {
                                _this.handleMatchWX(msg);
                            }
                            if (is_match) {
                                _this.isMatchHandle(now_task);
                                return true;
                            }
                        }
                        if (now_task.question[j].type == 'keyword') {
                            now_keywords.push(now_task.question[j].regular);
                        }
                    }
                }
                keyword_obj[i] = now_keywords;
                text_ids = text_ids == '' ? use_id : text_ids + ',' + use_id;
            } catch (e) {
                console.log(e);
                continue;
            }
        }
        for (var p in keyword_obj) {
            try {
                var now_keywords = keyword_obj[p];
                for (var k = 0; k < now_keywords.length; k++) {
                    if (msg.toLowerCase().indexOf(now_keywords[k].toLowerCase()) !== -1) {
                        _this.isMatchHandle(_this.now_task_list[p]);
                        return true;
                    }
                }
            } catch (e) {
                console.log(e);
                continue;
            }
        }
        if (text_ids != '') {
            $.ajax({
                url: _this.robot_url,
                data: {
                    cmd: 'UQR',
                    zsk_ids: text_ids,
                    company_id: _this.company_id,
                    question: msg
                },
                type: 'POST',
                dataType: 'JSON',
                success: function (data) {
                    if (data.task_id != 0) {
                        _this.isMatchHandle(now_tasks[data.task_id]);
                    } else {
                        if (is_has_any && any_match != '') {
                            _this.isMatchHandle(any_match);
                        } else {
                            _this.unMatch();
                        }
                    }
                },
                error: function () {
                    if (is_has_any && any_match != '') {
                        _this.isMatchHandle(any_match);
                    } else {
                        _this.unMatch();
                    }
                }
            });
        } else {
            _this.unMatch();
        }
    };
    taskProto.handleQaMsgByKw = function (msg) {
        var keyword_obj = {};
        var now_tasks = {};
        var text_ids = '';
        var is_has_any = false;
        var any_match = '';
        for (var i = 0; i < _this.now_task_list.length; i++) {
            var now_task = _this.now_task_list[i];
            var use_id = now_task.link_id == 0 ? now_task.id : now_task.link_id;
            now_tasks[use_id] = now_task;
            var now_keywords = [];
            try {
                if (now_task.question.length > 0) {
                    for (var j = 0; j < now_task.question.length; j++) {
                        if (now_task.question[j].type == 'keyword') {
                            if (msg.indexOf(now_task.question[j].regular) !== -1) {
                                _this.isMatchHandle(now_task);
                                return true;
                            }
                        }
                        if (now_task.question[j].type == 'match') {
                            now_keywords.push(now_task.question[j].regular);
                        }
                    }
                }
                keyword_obj[i] = now_keywords;
                text_ids = text_ids == '' ? use_id : text_ids + ',' + use_id;
            } catch (e) {
                console.log(e);
                continue;
            }
        }
        for (var p in keyword_obj) {
            try {
                var now_keywords = keyword_obj[p];
                for (var k = 0; k < now_keywords.length; k++) {
                    if (now_keywords[k] == 'any') {
                        is_has_any = true;
                        any_match = _this.now_task_list[p];
                        continue;
                    }
                    var is_match = _this.handleMatch(now_keywords[k], msg);
                    if (is_match) {
                        _this.isMatchHandle(_this.now_task_list[p]);
                        return true;
                    }
                }
            } catch (e) {
                console.log(e);
                continue;
            }
        }
        if (text_ids != '') {
            $.ajax({
                url: _this.robot_url,
                data: {
                    cmd: 'UQR',
                    zsk_ids: text_ids,
                    company_id: _this.company_id,
                    question: msg
                },
                type: 'POST',
                dataType: 'JSON',
                success: function (data) {
                    if (data.task_id != 0) {
                        _this.isMatchHandle(now_tasks[data.task_id]);
                    } else {
                        if (is_has_any && any_match != '') {
                            _this.isMatchHandle(any_match);
                        } else {
                            _this.unMatch();
                        }
                    }
                },
                error: function () {
                    if (is_has_any && any_match != '') {
                        _this.isMatchHandle(any_match);
                    } else {
                        _this.unMatch();
                    }
                }
            });
        } else {
            _this.unMatch();
        }
    };
    taskProto.handleAnswerMsg = function (msg) {
        try {
            if (_this.answer_show_index != 0 && typeof _this.now_task['answer'][_this.answer_show_index - 1] != 'undefined') {
                var answer = _this.now_task['answer'][_this.answer_show_index - 1];
                if (answer.type == 'question') {
                    var is_match = _this.handleMatch(answer.regular, msg);
                    if (is_match || answer.count == 0) {
                        _this.answer_show_index++;
                        _this.index_times = 0;
                        _this.last_msg = '';
                        _this.isMatchHandle(_this.now_task);
                    } else {
                        _this.qaAnsUnMatch(answer);
                    }
                } else {
                    if (_this.answer_show_index < _this.now_task['answer'].length) {
                        _this.answer_show_index++;
                        _this.handleAnswerMsg(msg);
                    } else {
                        _this.unMatch();
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }
    };
    taskProto.qaAnsUnMatch = function (answer) {
        if (_this.index_times == -1) {
            _this.last_msg = answer.content;
            var list_data = _this.getListData(answer, _this.now_task, 'in_answer');
            _this.showMsgProcess(list_data);
        } else if (_this.index_times < answer.count) {
            _this.index_times++;
            _this.last_msg = answer.content;
            var list_data = _this.getListData(answer, _this.now_task, 'in_answer');
            if (_this.index_times >= answer.count)
                list_data.qa_times = 'last';
            _this.showMsgProcess(list_data);
        } else {
            _this.unMatch();
        }
    };
    taskProto.repeatedQa = function (answer) {
        if (answer.type != 'question')
            return;
        if (_this.no_talk_timer)
            clearTimeout(_this.no_talk_timer);
        if (answer.overtime == undefined)
            answer.overtime = 180;
        if (answer.overtime > 0) {
            _this.no_talk_timer = setTimeout(function () {
                _this.qaAnsUnMatch(answer);
            }, answer.overtime * 1000);
        }
    };
    taskProto.isMatch = function (now_task) {
        try {
            if (_this.answer_show_index <= now_task.answer.length) {
                var start_i = _this.answer_show_index == 0 ? 0 : _this.answer_show_index - 1;
                for (var i = start_i; i < now_task.answer.length; i++) {
                    var answer = now_task.answer[i];
                    _this.answer_show_index = i + 1;
                    if (answer.type == 'message' || answer.type == 'ask_option' || answer.type == 'ask_list' || answer.type == 'ask_form' || answer.type == 'ask_hots') {
                        _this.last_msg = answer.content;
                        _this.setLastAnswer(i, now_task);
                        var list_data = _this.getListData(answer, _this.now_task, 'is_match');
                        _this.showMsgProcess(list_data);
                        if (answer.type == 'ask_option')
                            break;
                    }
                    if (answer.type == 'question') {
                        _this.last_msg = answer.content;
                        if (answer.count == -1)
                            _this.index_times = -1;
                        if (answer.count != -1 && answer.count != 0 && _this.index_times >= answer.count)
                            _this.setLastAnswer(i, now_task);
                        var list_data = _this.getListData(answer, _this.now_task, 'is_match');
                        _this.showMsgProcess(list_data);
                        break;
                    }
                    if (answer.type == 'tokf') {
                        _this.last_msg = '';
                        _this.setLastAnswer(i, now_task);
                        var list_data = _this.getListData(answer, _this.now_task, 'is_match');
                        _this.showMsgProcess(list_data);
                        break;
                    }
                    if (answer.type == 'end') {
                        _this.closeTask();
                        break;
                    }
                }
            } else {
                _this.answer_show_index = 0;
                var use_id = _this.now_task.link_id == 0 ? _this.now_task.id : _this.now_task.link_id;
                if (typeof _this.task_robot.guide_content[use_id] == 'undefined') {
                    _this.last_msg = '';
                    _this.now_task = {};
                }
                _this.removeLoading();
                _this.kfShow('', _this.now_task, _this.answer_show_index, _this.index_times);
            }
        } catch (e) {
            _this.answer_show_index = 0;
            console.log(e);
        }
    };
    taskProto.closeTask = function (type) {
        _this.is_use = false;
        if (_this.prompt_guide_timer)
            clearTimeout(_this.prompt_guide_timer);
        if (_this.no_talk_timer)
            clearTimeout(_this.no_talk_timer);
        if (_this.showMsgProcessTimer && type == 'kf')
            clearTimeout(_this.showMsgProcessTimer);
        _this.endTask();
    };
    taskProto.setLastAnswer = function (index, now_task) {
        if (index == now_task.answer.length - 1) {
            _this.answer_show_index = 0;
            var use_id = _this.now_task.link_id == 0 ? _this.now_task.id : _this.now_task.link_id;
            if (typeof _this.task_robot.guide_content[use_id] == 'undefined') {
                _this.last_msg = '';
                _this.now_task = {};
            }
        }
    };
    taskProto.isMatchHandle = function (now_task) {
        _this.now_task = now_task;
        _this.isMatch(now_task);
        var use_id = _this.now_task.link_id == 0 ? _this.now_task.id : _this.now_task.link_id;
        if (typeof _this.task_robot.guide_content[use_id] == 'undefined') {
            _this.now_task_list = _this.first_task_list;
        } else {
            _this.now_task_list = _this.task_robot.guide_content[use_id];
        }
    };
    taskProto.turnKf = function () {
        _this.breakNowTask();
        _this.connectKf();
    };
    _this.breakNowTask = function (link_id) {
        if (link_id == undefined) {
            _this.now_task_list = _this.first_task_list;
            _this.now_task = {};
            _this.intype = 'question';
            _this.answer_show_index = 0;
            _this.index_times = 0;
        } else {
            for (var p in _this.task_robot.guide_content) {
                for (var i = 0; i < _this.task_robot.guide_content[p].length; i++) {
                    if (_this.task_robot.guide_content[p][i].id == link_id) {
                        _this.isMatchHandle(_this.task_robot.guide_content[p][i]);
                    }
                }
            }
        }
    };
    taskProto.unMatch = function () {
        if (typeof _this.now_task.un_answer == 'undefined' || _this.now_task.un_answer == '') {
            var un_answer = _this.task_un_answer;
        } else {
            var un_answer = _this.now_task.un_answer;
        }
        _this.breakNowTask();
        _this.showUnMatch(un_answer);
        _this.callbackUnMatch();
    };
    taskProto.showUnMatch = function (un_answer) {
        _this.last_msg = '';
        for (var i = 0; i < un_answer.length; i++) {
            var list_data = _this.getListData(un_answer[i], _this.now_task, 'un_answer');
            _this.showMsgProcess(list_data);
        }
    };
    taskProto.showLastMsg = function () {
        if (_this.last_msg != '' && !_this.in_show_answer && _this.checkUse()) {
            _this.addLoading();
            setTimeout(function () {
                _this.removeLoading();
                _this.kfShow(_this.last_msg, _this.now_task, _this.answer_show_index, _this.index_times);
            }, 1000);
        }
    };
    taskProto.handleMatch = function (regular, match_msg) {
        match_msg = '-' + match_msg;
        switch (regular) {
        case 'mobile':
            if (match_msg.match(/[^\d](1[3-9]\d{9})(?!\d)/gi) || match_msg.match(/[^\d](0\d{2,3}-?\d{7,8})(?!\d)/gi)) {
                return true;
            }
            break;
        case 'wechat':
            if (match_msg.match(/[^A-Za-z][A-Za-z](\w|-){5,19}(?![\w#])/gi) || match_msg.match(/[^\d](1[3-9]\d{9})(?!\d)/gi)) {
                return true;
            }
            break;
        case 'qq':
            if (match_msg.match(/[^\d](\d{5,12})(?!\d)/gi)) {
                return true;
            }
            break;
        case 'email':
            if (match_msg.match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/gi)) {
                return true;
            }
            break;
        case 'num':
            if (match_msg.match(/\d+/gi)) {
                return true;
            }
            break;
        case 'url':
            if (match_msg.match(/([^{\/])((ftp:\/\/|https:\/\/|http:\/\/|www\d{0,4}\.)[\w\-]*\.[\w!~;*'()&=\+\$%\-\/\#\?:\.,\|\^]*)/gim)) {
                return true;
            }
            break;
        case 'surname':
            if (match_msg.match()) {
                return true;
            }
            break;
        case 'area':
            if (match_msg.match() {
                return true;
            }
            if (match_msg.match() {
                return true;
            }
            break;
        case 'any':
            return true;
            break;
        }
        return false;
    };
    taskProto.showMsgProcess = function (list_data, type) {
        if (type == undefined)
            var type = false;
        function showMsgProcess(list_data, type) {
            if (type == undefined)
                var type = false;
            if (typeof list_data.answer.time == 'undefined' || list_data.type == 'in_answer') {
                list_data.answer.time = 0;
            }
            if (_this.in_show_answer && !type) {
                _this.prepare_msg_list.push(list_data);
            } else {
                if (typeof list_data.answer.isConnPrompt != 'undefined' && list_data.answer.isConnPrompt == 1 && !_this.inConnPrompt) {
                    if (_this.prepare_msg_list.length > 0) {
                        list_data = _this.prepare_msg_list.shift();
                        showMsgProcess(list_data, true);
                    } else {
                        _this.in_show_answer = false;
                    }
                    return;
                }
                _this.in_show_answer = true;
                _this.addLoading();
                var rprompt_guide_show_time = new Date().getTime();
                if (list_data.answer_show_index == 2 && typeof list_data.now_task.now_task_type != 'undefined' && list_data.now_task.now_task_type == 'guide' && _this.keyword == '' && (_this.search_engine.indexOf('') !== false || _this.search_engine.toLowerCase().indexOf('baidu') !== false)) {
                    _this.getwdCallBack = function (kw, kw2) {
                        _this.keyword = kw;
                        var new_conn_prompt = _this.showGuide('get_prompt');
                        if (typeof new_conn_prompt.answer == 'undefined' || new_conn_prompt.answer.length <= 1) {
                            _this.answer_show_index = 0;
                            var use_id = _this.now_task.link_id == 0 ? _this.now_task.id : _this.now_task.link_id;
                            if (typeof _this.task_robot.guide_content[use_id] == 'undefined') {
                                _this.last_msg = '';
                                _this.now_task = {};
                            }
                            _this.removeLoading();
                        }
                        _this.prepare_msg_list = [];
                        var now_task = _this.now_task = new_conn_prompt;
                        if (_this.answer_show_index <= _this.now_task.answer.length) {
                            var start_i = _this.answer_show_index == 0 ? 0 : _this.answer_show_index - 1;
                            for (var i = start_i + 1; i < now_task.answer.length; i++) {
                                var answer = now_task.answer[i];
                                var list_data = _this.getListData(answer, _this.now_task, 'is_match');
                                _this.prepare_msg_list.push(list_data);
                            }
                        }
                        list_data = _this.prepare_msg_list.shift();
                        var now_time = new Date().getTime();
                        var getwd_time = now_time - rprompt_guide_show_time;
                        var next_time = list_data.answer.time * 1000;
                        if (next_time > getwd_time)
                            next_time = next_time - getwd_time;
                        else
                            next_time = 0;
                        _this.showMsgProcessTimer = setTimeout(function () {
                            try {
                                _this.removeLoading();
                                switch (list_data.type) {
                                case 'is_match':
                                    var hots = '';
                                    if (list_data.answer.type == 'ask_list') {
                                        _this.kfShow(list_data.answer.content, list_data.now_task, list_data.answer_show_index, list_data.index_times, undefined, hots);
                                        _this.showList(list_data.answer.list);
                                    } else {
                                        if (list_data.answer.type == 'ask_hots') {
                                            hots = list_data.answer.hots;
                                        }
                                        _this.kfShow(list_data.answer.content, list_data.now_task, list_data.answer_show_index, list_data.index_times, undefined, hots);
                                        if (list_data.answer.type == 'ask_form') {
                                            _this.showForm(list_data.answer.selected_form, list_data.answer.submit_text, list_data.answer.success_text, list_data.answer.fail_text, list_data.answer.overtime);
                                        }
                                        if (list_data.answer.type == 'ask_option') {
                                            _this.showOption(list_data.answer.option);
                                        }
                                    }
                                    break;
                                }
                                if (_this.prepare_msg_list.length > 0) {
                                    list_data = _this.prepare_msg_list.shift();
                                    showMsgProcess(list_data, true);
                                } else {
                                    _this.in_show_answer = false;
                                }
                            } catch (e) {
                                console.log(e);
                                _this.in_show_answer = false;
                            }
                        }, next_time);
                    };
                    _this.sendGetKw();
                    return;
                }
                _this.showMsgProcessTimer = setTimeout(function () {
                    try {
                        _this.removeLoading();
                        switch (list_data.type) {
                        case 'is_match':
                            if (list_data.answer.type == 'tokf') {
                                _this.turnKf();
                                _this.kfShow('', _this.now_task, _this.answer_show_index, _this.index_times);
                            } else {
                                var hots = '';
                                if (list_data.answer.type == 'ask_list') {
                                    _this.kfShow(list_data.answer.content, list_data.now_task, list_data.answer_show_index, list_data.index_times, undefined, hots);
                                    _this.showList(list_data.answer.list);
                                } else {
                                    if (list_data.answer.type == 'ask_hots') {
                                        hots = list_data.answer.hots;
                                    }
                                    _this.kfShow(list_data.answer.content, list_data.now_task, list_data.answer_show_index, list_data.index_times, undefined, hots);
                                    if (list_data.answer.type == 'ask_form') {
                                        _this.showForm(list_data.answer.selected_form, list_data.answer.submit_text, list_data.answer.success_text, list_data.answer.fail_text, list_data.answer.overtime);
                                    }
                                    if (list_data.answer.type == 'ask_option') {
                                        _this.showOption(list_data.answer.option);
                                    }
                                }
                            }
                            break;
                        case 'in_answer':
                            _this.kfShow(list_data.answer.content, list_data.now_task, list_data.answer_show_index, list_data.index_times);
                            break;
                        case 'un_answer':
                            if (list_data.answer.type == 'tokf') {
                                _this.turnKf();
                            } else {
                                _this.kfShow(list_data.answer.content, list_data.now_task, list_data.answer_show_index, list_data.index_times);
                            }
                            break;
                        }
                        if (list_data.answer.type == 'question') {
                            if (list_data.answer.count != 0 && list_data.qa_times != 'last')
                                _this.repeatedQa(list_data.answer);
                        }
                        if (_this.prepare_msg_list.length > 0) {
                            list_data = _this.prepare_msg_list.shift();
                            showMsgProcess(list_data, true);
                        } else {
                            _this.in_show_answer = false;
                        }
                    } catch (e) {
                        console.log(e);
                        _this.in_show_answer = false;
                    }
                }, list_data.answer.time * 1000);
            }
        }
        showMsgProcess(list_data, type);
    };
    taskProto.multiWindowHistory = function (list) {
        if (list.length <= 0)
            return list;
        var conn_promet = _this.task_robot.tconn_promet;
        if (conn_promet.type != 'messages')
            return list;
        var index = 0;
        var node = list.shift();
        while (node && conn_promet.content && index < conn_promet.content.length) {
            if (node.type != 'u')
                break;
            var prompt_content = '';
            if (typeof conn_promet.content[index].content != 'undefined')
                prompt_content = conn_promet.content[index].content;
            if (typeof conn_promet.content[index].prompt_content != 'undefined')
                prompt_content = conn_promet.content[index].prompt_content;
            if (decodeURIComponent(node.msg).replace(/<[^>]+>/g, '') != _this.HtmlDecode(prompt_content).replace(/<[^>]+>/g, ''))
                break;
            var hots = '';
            if (conn_promet.content[index].type == 'ask_hots') {
                hots = conn_promet.content[index].hots;
            }
            _this.historyShow(decodeURIComponent(node.msg), hots);
            index++;
            node = list.shift();
        }
        if (node) {
            list.unshift(node);
        }
        return list;
    };
    taskProto.HtmlDecode = function (text) {
        var msg = text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        msg = msg.replace(/\r\n/g, '<br>');
        return msg;
    };
    taskProto.deepCopy = function (source) {
        function deepCopy(source) {
            var result = {};
            for (var key in source) {
                result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
            }
            return result;
        }
        return deepCopy(source);
    };
    taskProto.getListData = function (answer, now_task, type) {
        var list_data = {
            answer: answer,
            now_task: _this.deepCopy(now_task),
            answer_show_index: _this.answer_show_index,
            index_times: _this.index_times,
            type: type
        };
        return list_data;
    };
    taskProto.kfShow = function (msg, now_task, show_index, times, prompt_guide_size, hots) {
    };
    taskProto.connectKf = function () {
    };
    taskProto.endTask = function () {
    };
    taskProto.addLoading = function () {
    };
    taskProto.removeLoading = function () {
    };
    taskProto.showOption = function (options) {
    };
    taskProto.showList = function (lists) {
    };
    taskProto.showForm = function (forms, submit_text, success_text, fail_text, overtime) {
    };
    taskProto.callbackUnMatch = function () {
    };
    taskProto.historyShow = function (msg, hots) {
    };
    taskProto.sendGetKw = function () {
    }, taskProto.getwdCallBack = function (kw, kw2) {
    };
    taskProto.handleMatchWX = function () {
    };
}
