export function RobotTimeOut() {
    var _this = this;
    _this.isopen = 0;
    _this.timeOutData = [];
    _this.robotTimeoutTimer = 0;
    _this.nowMatch = '';
    _this.index = -1;
    _this.taskRobotObj = {};
    _this.init = function (data) {
        _this.isopen = data.isopen;
        _this.timeOutData = data.robot_timeout_data;
    };
    _this.initTaskRobot = function (taskRobotObj) {
        _this.taskRobotObj = taskRobotObj;
    };
    _this.closeTRTimeOut = function () {
        _this.isopen = 0;
        _this.clearTimer();
    };
    _this.clearTimer = function () {
        if (_this.robotTimeoutTimer != 0)
            clearTimeout(_this.robotTimeoutTimer);
        if (_this.index != -1)
            _this.clearTimeoutTimer();
        _this.nowMatch = '';
        _this.index = -1;
    };
    _this.handle = function () {
        if (_this.isopen == 1) {
            _this.clearTimer();
            if (_this.timeOutData.length > 0) {
                _this.showTimeOut(-1);
            }
        }
    };
    _this.match = function (msg) {
        if (_this.isopen != 1)
            return false;
        if (_this.nowMatch != '' && msg != '') {
            var nowMatch = _this.nowMatch;
            var showIndex = _this.index;
            _this.clearTimer();
            var match_msg = '-' + msg.replace(/<[^>]+>/g, '');
            switch (nowMatch) {
            case 'mobile':
                if (match_msg.match(/[^\d](1[3-9]\d{9})(?!\d)/gi) || match_msg.match(/[^\d](0\d{2,3}-?\d{7,8})(?!\d)/gi)) {
                    _this.setAttr('mobile');
                    try {
                        _this.taskRobotObj.breakNowTask();
                        _this.taskRobotObj.handleMsg(msg);
                    } catch (e) {
                        setTimeout(function () {
                            _this.show('收到');
                        }, 1000);
                    }
                    return true;
                }
                break;
            case 'wechat':
                if (match_msg.match(/[^\d](1[3-9]\d{9})(?!\d)/gi)) {
                    _this.setAttr('mobile');
                    _this.setAttr('wechat');
                    try {
                        _this.taskRobotObj.breakNowTask();
                        _this.taskRobotObj.handleMsg(msg);
                    } catch (e) {
                        setTimeout(function () {
                            _this.show('收到');
                        }, 1000);
                    }
                    return true;
                }
                if (match_msg.match(/[^A-Za-z][A-Za-z](\w|-){5,19}(?![\w#])/gi)) {
                    _this.setAttr('wechat');
                    var aft_index = -1;
                    var bef_index = -1;
                    for (var i = 0; i < _this.timeOutData.length; i++) {
                        if (_this.timeOutData[i].type == 'mobile') {
                            if (i >= showIndex) {
                                aft_index = i;
                                break;
                            } else if (bef_index == -1) {
                                bef_index = i;
                                continue;
                            }
                        }
                    }
                    var new_index = aft_index == -1 ? bef_index : aft_index;
                    if (new_index != -1) {
                        _this.startTimeoutTimer();
                        _this.robotTimeoutTimer = setTimeout(function () {
                            _this.showTimeOut(new_index);
                        }, _this.timeOutData[new_index].time * 1000);
                    } else {
                        try {
                            _this.taskRobotObj.breakNowTask();
                            _this.taskRobotObj.handleMsg(msg);
                        } catch (e) {
                            setTimeout(function () {
                                _this.show('收到');
                            }, 1000);
                        }
                    }
                    return true;
                }
                break;
            }
        } else {
            _this.clearTimer();
        }
        return false;
    };
    _this.showTimeOut = function (index) {
        if (_this.isopen != 1)
            return;
        if (index != -1) {
            _this.nowMatch = _this.timeOutData[index].type;
            _this.show(_this.timeOutData[index].content);
        }
        index++;
        if (!_this.isHasAttr('mobile') && index < _this.timeOutData.length) {
            for (var i = index; i < _this.timeOutData.length; i++) {
                if (_this.timeOutData[i].type == 'wechat' && _this.isHasAttr('wechat'))
                    continue;
                _this.startTimeoutTimer();
                _this.robotTimeoutTimer = setTimeout(function () {
                    _this.index = i;
                    _this.showTimeOut(i);
                }, _this.timeOutData[i].time * 1000);
                break;
            }
        } else {
            _this.index = -1;
        }
    };
    _this.isHasAttr = function (attribute) {
    };
    _this.show = function (content) {
    };
    _this.setAttr = function (attribute) {
    };
    _this.startTimeoutTimer = function () {
    };
    _this.clearTimeoutTimer = function () {
    };
}
