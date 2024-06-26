var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
export function robotClinet() {
    var _this = this;
    var robotPro = robotClinet.prototype;
    _this.company_id = company_id;
    _this.myid = guest_id;
    _this.style = style;
    _this.style_id = style_id;
    _this.getTime = 20000;
    _this.getOver = false;
    _this.sendQueue = [];
    _this.roaQueue = [];
    _this.overId = 0;
    _this.overTime = 1000;
    _this.getKwTimes = 6;
    _this.getKwTime = 500;
    _this.http_pro = '';
    _this.robot_host = '';
    _this.talkpage = '';
    _this.frompage = '';
    _this.search_engine = '';
    _this.keyword = '';
    _this.land_page = '';
    _this.tfrom = '';
    _this.is_group = '';
    _this.open_time = '';
    _this.uid = '';
    _this.u_stat_id = '';
    _this.ucust_id = '';
    _this.channel = '';
    _this.robot_id = '';
    _this.robot_name = '';
    _this.lnksuccess = false;
    _this.robot_talk_list = [];
    _this.first_tempid = 0;
    _this.temp_id = 0;
    _this.beatTimer = 0;
    _this.sendBeatTimer = 0;
    _this.getBeatTimer = 0;
    _this.remote_port = remote_port;
    _this.callBacks = {
        GID_CALL: function (data) {
        },
        ROA_CALL: function (data) {
        },
        RLNK_CALL: function () {
        },
        RQST_CALL: function (list) {
        },
        ULN_CALL: function () {
        },
        ZRG_CALL: function (data) {
        },
        RECEPTION_CALL: function (data) {
        },
        RQKW_CALL: function (kw, kw2) {
        }
    };
    robotPro.init = function () {
        if (_this.myid > 0) {
            _this.sendLnk();
        } else {
            _this.sendGid();
        }
        _this.overId = setInterval(function () {
            var now = new Date().getTime();
            for (var i = 0; i < _this.sendQueue.length; i++) {
                if (now - _this.sendQueue[i].time > 20000) {
                    var data = _this.sendQueue.shift();
                    _this.faliHandler(data);
                }
            }
        }, 1000);
    };
    robotPro.setParams = function (http_pro, robot_host, talkpage, frompage, search_engine, keyword, land_page, tfrom, is_group, open_time, guest_id, uid, ucust_id, u_stat_id, channel, robot_id, robot_name) {
        _this.http_pro = http_pro;
        _this.robot_host = robot_host;
        _this.talkpage = talkpage;
        _this.frompage = frompage;
        _this.search_engine = search_engine;
        _this.keyword = keyword;
        _this.land_page = land_page;
        _this.tfrom = tfrom;
        _this.is_group = is_group;
        _this.open_time = open_time;
        _this.uid = uid;
        _this.u_stat_id = u_stat_id;
        _this.ucust_id = ucust_id;
        _this.channel = channel;
        _this.robot_id = robot_id;
        _this.robot_name = robot_name;
        if (typeof guest_id != 'undefined' && guest_id > 0) {
            _this.myid = guest_id;
        }
    };
    robotPro.closeLink = function (send) {
        _this.getOver = true;
        if (_this.overId)
            clearInterval(_this.overId);
        if (_this.beatTimer)
            clearInterval(_this.beatTimer);
    };
    robotPro.send = function (sendData) {
        jQuery.support.cors = true;
        $.ajax({
            type: 'POST',
            url: _this.http_pro + _this.robot_host + '/sendrobot.jsp?k=' + _this.myid + '&v=' + new Date().getTime(),
            data: sendData,
            timeout: 20000,
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('CONTENT-TYPE', 'application/x-www-form-urlencoded');
            },
            success: function (data) {
                if (data instanceof Array) {
                    for (var i = 0; i < data.length; i++) {
                        _this.clearData(data[i]);
                        _this.sucHandler(data[i]);
                    }
                } else {
                    _this.clearData(data);
                    _this.sucHandler(data);
                }
            },
            error: function (xhr, status, error) {
                sendData.timestamp = sendData.time;
                _this.clearData(sendData);
                setTimeout(function () {
                    _this.faliHandler(sendData);
                }, 2000);
            }
        });
    };
    robotPro.sendBeat = function (sendData) {
        jQuery.support.cors = true;
        $.ajax({
            type: 'POST',
            url: _this.http_pro + _this.robot_host + '/sendrobot.jsp?k=' + _this.myid + '&v=' + new Date().getTime(),
            data: sendData,
            timeout: 20000,
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('CONTENT-TYPE', 'application/x-www-form-urlencoded');
            },
            success: function (data) {
                _this.getBeatTimer = new Date().getTime();
                if (data instanceof Array) {
                    for (var i = 0; i < data.length; i++) {
                        _this.sucHandler(data[i]);
                    }
                } else {
                    _this.sucHandler(data);
                }
            },
            error: function (xhr, status, error) {
            }
        });
    };
    robotPro.sucHandler = function (data) {
        var cmd = data.cmd;
        switch (cmd) {
        case 'GID':
            _this.myid = data.gid;
            _this.callBacks.GID_CALL(data.gid);
            _this.sendLnk();
            break;
        case 'GET':
            _this.sendGet();
            break;
        case 'RLNK':
            _this.temp_id = data.temp_id;
            _this.first_tempid = data.first_tempid;
            _this.sucLnk();
            break;
        case 'ROA':
            _this.robot_talk_list.push(data);
            if (window.sessionStrage) {
                window.sessionStrage[_this.company_id + '_' + _this.myid + '_' + _this.style + '_' + _this.first_tempid] = JSON.stringify(_this.robot_talk_list);
            }
            break;
        case 'RQST':
            _this.callBacks.RQST_CALL(data.datas);
            break;
        case 'END':
            _this.closeLink();
            break;
        case 'ULN':
            _this.closeLink();
            _this.callBacks.ULN_CALL();
            break;
        case 'ZRG':
            _this.closeLink();
            _this.callBacks.ZRG_CALL(data.workerid);
            break;
        case 'RECEPTION':
            _this.callBacks.RECEPTION_CALL(data.workerid);
            break;
        case 'RQKW':
            _this.status = data.status;
            if (_this.status == '0') {
                _this.getKwTimes--;
                if (_this.getKwTimes > 0)
                    setTimeout(_this.sendGetKw, _this.getKwTime);
            }
            if (_this.status == '1') {
                _this.keyword = data.kw;
                _this.callBacks.RQKW_CALL(data.kw, data.kw2);
            }
            break;
        case 'OK':
            break;
        }
    };
    robotPro.faliHandler = function (data) {
        var cmd = data.cmd;
        switch (cmd) {
        case 'RLNK':
            if (data.sendtimes < 3) {
                data.sendtimes++;
                _this.sendLnk(data.sendtimes);
            }
            break;
        case 'ROA':
            if (data.sendtimes < 5) {
                data.sendtimes++;
                _this.sendRoa(data.msg, data.type, data.code, data.task_zsk_id, data.index, data.index_times, data.guide_size, data.sendtimes);
            }
            break;
        case 'RQST':
            if (data.sendtimes < 3) {
                data.sendtimes++;
                _this.sendRqst(data.sendtimes);
            }
            break;
        case 'GID':
            _this.sendGid();
            break;
        case 'GET':
            break;
        }
    };
    robotPro.sucLnk = function () {
        _this.lnksuccess = true;
        _this.openGetBeat();
        _this.sendGet();
        _this.callBacks.RLNK_CALL();
        if (_this.roaQueue.length > 0) {
            for (var i = 0; i < _this.roaQueue.length; i++) {
                _this.sendQueue.push(_this.roaQueue[i]);
                _this.roaQueue[i].temp_id = _this.temp_id;
                _this.send(_this.roaQueue[i]);
            }
        }
    };
    robotPro.openGetBeat = function () {
        _this.sendBeatTimer = _this.getBeatTimer = new Date().getTime();
        _this.beatTimer = setInterval(function () {
            var now = new Date().getTime();
            if (now - _this.sendBeatTimer > 20000) {
                _this.sendGet();
            }
        }, 1000);
    };
    robotPro.clearData = function (data) {
        if (data.timestamp != '') {
            for (var i = 0; i < _this.sendQueue.length; i++) {
                if (data.timestamp = _this.sendQueue[i].time) {
                    _this.sendQueue.splice(i, 1);
                    i--;
                }
            }
        }
    };
    robotPro.sendGet = function () {
        var sendData = {
            cmd: 'GET',
            company_id: _this.company_id,
            guest_id: _this.myid,
            style: _this.style,
            temp_id: _this.temp_id,
            time: new Date().getTime()
        };
        if (!_this.getOver) {
            _this.sendBeatTimer = new Date().getTime();
            _this.sendBeat(sendData);
        }
    };
    robotPro.sendGidc = function (last_guest_id) {
        if (last_guest_id != 0 && last_guest_id != _this.myid) {
            var sendData = {
                cmd: 'GIDC',
                last_guest_id: last_guest_id,
                guest_id: _this.myid,
                dwid: _this.company_id,
                time: new Date().getTime()
            };
            _this.sendQueue.push(sendData);
            _this.send(sendData);
        }
    };
    robotPro.sendEnd = function () {
        var sendData = {
            cmd: 'END',
            company_id: _this.company_id,
            guest_id: _this.myid,
            style: _this.style,
            temp_id: _this.temp_id,
            time: new Date().getTime()
        };
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    robotPro.sendLnk = function (sendtimes) {
        if (typeof sendtimes == 'undefined')
            sendtimes = 0;
        var sendData = {
            cmd: 'RLNK',
            company_id: _this.company_id,
            guest_id: _this.myid,
            style: _this.style,
            style_id: _this.style_id,
            frompage: _this.frompage,
            land_page: _this.land_page,
            talkpage: _this.talkpage,
            keyword: _this.keyword,
            search_engine: _this.search_engine,
            tfrom: _this.tfrom,
            is_group: _this.is_group,
            open_time: _this.open_time,
            stat_id: _this.uid,
            ucust_id: _this.ucust_id,
            u_stat_id: _this.u_stat_id,
            channel: _this.channel,
            sendtimes: sendtimes,
            robot_id: _this.robot_id,
            robot_name: _this.robot_name,
            time: new Date().getTime(),
            remote_port: _this.remote_port
        };
        if (information_switch && !information_state) {
            sendData.frompage = '';
            sendData.talkpage = '';
            sendData.land_page = '';
            sendData.channel = '';
            sendData.search_engine = '';
            sendData.keyword = '';
            sendData.grys_status = '0';
        }
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    robotPro.sendGRYSSQ = function (data) {
        _this.sendQueue.push(data);
        _this.send(data);
    };
    robotPro.sendGid = function () {
        var sendData = {
            cmd: 'GID',
            company_id: _this.company_id,
            time: new Date().getTime()
        };
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    robotPro.sendRoa = function (msg, type, code, task_zsk_id, index, index_times, guide_size, sendtimes) {
        if (typeof sendtimes == 'undefined')
            sendtimes = 0;
        var sendData = {
            cmd: 'ROA',
            company_id: _this.company_id,
            guest_id: _this.myid,
            style: _this.style,
            temp_id: _this.temp_id,
            msg: msg,
            type: type,
            stat_id: _this.uid,
            sendtimes: sendtimes,
            code: code,
            robot_id: _this.robot_id,
            robot_name: _this.robot_name,
            time: new Date().getTime(),
            remote_port: _this.remote_port
        };
        if (typeof task_zsk_id != 'undefined' && typeof index != 'undefined' && typeof index_times != 'undefined' && typeof guide_size != 'undefined') {
            sendData['task_zsk_id'] = task_zsk_id;
            sendData['index'] = index;
            sendData['index_times'] = index_times;
            sendData['guide_size'] = guide_size;
        }
        if (_this.lnksuccess && !_this.getOver) {
            _this.sendQueue.push(sendData);
            _this.send(sendData);
        } else {
            _this.roaQueue.push(sendData);
        }
    };
    robotPro.sendRqst = function (sendtimes) {
        if (typeof sendtimes == 'undefined')
            sendtimes = 0;
        var sendData = {
            cmd: 'RQST',
            company_id: _this.company_id,
            guest_id: _this.myid,
            style: _this.style,
            temp_id: _this.temp_id,
            sendtimes: sendtimes,
            time: new Date().getTime(),
            remote_port: _this.remote_port
        };
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    robotPro.sendGetKw = function () {
        var sendData = {
            cmd: 'GETKW',
            company_id: _this.company_id,
            guest_id: _this.myid,
            time: new Date().getTime()
        };
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    robotPro.setCallBack = function (callName, callBack) {
        if (typeof _this.callBacks[callName] != 'undefined' && typeof callBack == 'function') {
            _this.callBacks[callName] = callBack;
        }
    };
}
