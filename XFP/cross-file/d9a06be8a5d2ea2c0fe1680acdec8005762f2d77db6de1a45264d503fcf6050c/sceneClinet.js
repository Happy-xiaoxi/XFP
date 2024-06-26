var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
export function sceneClinet() {
    var _this = this;
    var scenePro = sceneClinet.prototype;
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
    _this.remote_port = remote_port;
    _this.http_pro = '';
    _this.scene_host = '';
    _this.talkpage = '';
    _this.frompage = '';
    _this.search_engine = '';
    _this.keyword = '';
    _this.land_page = '';
    _this.channel = '';
    _this.tfrom = '';
    _this.is_group = '';
    _this.open_time = '';
    _this.uid = '';
    _this.u_stat_id = '';
    _this.ucust_id = '';
    _this.lnksuccess = false;
    _this.talktitle = '';
    _this.callBacks = {
        GID_CALL: function (data) {
        },
        ROA_CALL: function (data) {
        },
        SLNK_CALL: function (data) {
        }
    };
    scenePro.init = function () {
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
    scenePro.setParams = function (http_pro, scene_host, talkpage, frompage, search_engine, keyword, land_page, tfrom, is_group, open_time, guest_id, uid, ucust_id, u_stat_id, channel, talktitle) {
        _this.http_pro = http_pro;
        _this.scene_host = scene_host;
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
        _this.talktitle = talktitle;
        if (typeof guest_id != 'undefined' && guest_id > 0) {
            _this.myid = guest_id;
        }
    };
    scenePro.closeLink = function (send) {
        _this.getOver = true;
        if (_this.overId)
            clearInterval(_this.overId);
        if (send)
            _this.sendEnd();
    };
    scenePro.send = function (sendData) {
        jQuery.support.cors = true;
        $.ajax({
            type: 'POST',
            url: _this.http_pro + _this.scene_host + '/sendscene.jsp?k=' + _this.myid + '&v=' + new Date().getTime(),
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
                _this.faliHandler(sendData);
            }
        });
    };
    scenePro.sucHandler = function (data) {
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
        case 'SLNK':
            _this.temp_id = data.temp_id;
            _this.sucLnk(data.step);
            break;
        case 'ROA':
            _this.callBacks.ROA_CALL(data.step, data.point, data.steps);
            break;
        case 'END':
            _this.closeLink();
            break;
        case 'OK':
            break;
        }
    };
    scenePro.faliHandler = function (data) {
        var cmd = data.cmd;
        switch (cmd) {
        case 'SLNK':
            if (data.sendtimes < 3) {
                data.sendtimes++;
                _this.sendLnk(data.sendtimes);
            }
            break;
        case 'ROA':
            if (data.sendtimes < 5) {
                data.sendtimes++;
                _this.sendRoa(data.msg, data.step, data.type, data.point, data.sendtimes, data.code);
            }
            break;
        case 'GID':
            _this.sendGid();
            break;
        case 'GET':
            _this.sendGet();
            break;
        }
    };
    scenePro.sucLnk = function (step) {
        _this.lnksuccess = true;
        _this.sendGet();
        _this.callBacks.SLNK_CALL(step);
        if (_this.roaQueue.length > 0) {
            for (var i = 0; i < _this.roaQueue.length; i++) {
                _this.sendQueue.push(_this.roaQueue[i]);
                _this.roaQueue[i].temp_id = _this.temp_id;
                _this.send(_this.roaQueue[i]);
            }
        }
    };
    scenePro.clearData = function (data) {
        if (data.timestamp != '') {
            for (var i = 0; i < _this.sendQueue.length; i++) {
                if (data.timestamp = _this.sendQueue[i].time) {
                    _this.sendQueue.splice(i, 1);
                    i--;
                }
            }
        }
    };
    scenePro.sendGet = function () {
        var sendData = {
            cmd: 'GET',
            company_id: _this.company_id,
            guest_id: _this.myid,
            style: _this.style,
            temp_id: _this.temp_id,
            time: new Date().getTime()
        };
        if (!_this.getOver) {
            _this.sendQueue.push(sendData);
            _this.send(sendData);
        }
    };
    scenePro.sendEnd = function () {
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
    scenePro.sendLnk = function (sendtimes) {
        if (typeof sendtimes == 'undefined')
            sendtimes = 0;
        var sendData = {
            cmd: 'SLNK',
            company_id: _this.company_id,
            guest_id: _this.myid,
            style: _this.style,
            style_id: _this.style_id,
            frompage: _this.frompage,
            land_page: _this.land_page,
            talkpage: _this.talkpage,
            keyword: _this.keyword,
            search_engine: _this.search_engine,
            channel: _this.channel,
            tfrom: _this.tfrom,
            is_group: _this.is_group,
            open_time: _this.open_time,
            stat_id: _this.uid,
            ucust_id: _this.ucust_id,
            u_stat_id: _this.u_stat_id,
            sendtimes: sendtimes,
            talktitle: _this.talktitle,
            time: new Date().getTime(),
            remote_port: _this.remote_port
        };
        if (information_switch && !information_state) {
            sendData.search_engine = '';
            sendData.frompage = '';
            sendData.talkpage = '';
            sendData.land_page = '';
            sendData.channel = '';
            sendData.keyword = '';
            sendData.grys_status = '0';
        }
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    scenePro.sendGRYSSQ = function (data) {
        _this.sendQueue.push(data);
        _this.send(data);
    };
    scenePro.sendGid = function () {
        var sendData = {
            cmd: 'GID',
            company_id: _this.company_id,
            time: new Date().getTime()
        };
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    scenePro.sendRoa = function (msg, step, type, point, sendtimes, code) {
        if (typeof sendtimes == 'undefined')
            sendtimes = 0;
        if (typeof point == 'undefined')
            point = '';
        if (typeof code == 'undefined')
            code = '';
        var sendData = {
            cmd: 'ROA',
            company_id: _this.company_id,
            guest_id: _this.myid,
            style: _this.style,
            temp_id: _this.temp_id,
            msg: msg,
            step: step,
            type: type,
            point: point,
            code: code,
            sendtimes: sendtimes,
            time: new Date().getTime(),
            remote_port: remote_port
        };
        if (_this.lnksuccess) {
            _this.sendQueue.push(sendData);
            _this.send(sendData);
        } else {
            _this.roaQueue.push(sendData);
        }
    };
    scenePro.setCallBack = function (callName, callBack) {
        if (typeof _this.callBacks[callName] != 'undefined' && typeof callBack == 'function') {
            _this.callBacks[callName] = callBack;
        }
    };
}
