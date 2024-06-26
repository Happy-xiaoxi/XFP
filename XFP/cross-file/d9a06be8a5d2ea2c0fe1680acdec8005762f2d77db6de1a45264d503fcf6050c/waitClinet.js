var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
export function waitClinet() {
    var _this = this;
    var waitPro = waitClinet.prototype;
    _this.company_id = company_id;
    _this.myid = guest_id;
    _this.style = style;
    _this.beatId = 0;
    _this.beatTime = 20000;
    _this.sendQueue = [];
    _this.overId = 0;
    _this.overTime = 20000;
    _this.getKwTimes = 6;
    _this.getKwTime = 500;
    _this.remote_port = remote_port;
    _this.http_pro = '';
    _this.wait_host = '';
    _this.talkpage = '';
    _this.frompage = '';
    _this.search_engine = '';
    _this.keyword = '';
    _this.land_page = '';
    _this.tfrom = '';
    _this.is_group = '';
    _this.open_time = '';
    _this.uid = '';
    _this.channel = '';
    _this.talk_id = 0;
    _this.callBacks = {
        GID_CALL: function (data) {
        },
        RQKW_CALL: function (kw, kw2) {
        }
    };
    waitPro.init = function () {
        if (_this.myid > 0) {
            _this.sendBeat();
            _this.beatId = setInterval(_this.sendBeat, _this.beatTime);
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
        }, _this.overTime);
    };
    waitPro.setParams = function (http_pro, wait_host, talkpage, frompage, search_engine, keyword, land_page, tfrom, is_group, open_time, uid, guest_id, channel) {
        _this.http_pro = http_pro;
        _this.wait_host = wait_host;
        _this.talkpage = talkpage;
        _this.frompage = frompage;
        _this.search_engine = search_engine;
        _this.keyword = keyword;
        _this.land_page = land_page;
        _this.tfrom = tfrom;
        _this.is_group = is_group;
        _this.open_time = open_time;
        _this.channel = channel;
        _this.uid = uid;
        if (typeof guest_id != 'undefined' && guest_id > 0) {
            _this.myid = guest_id;
        }
    };
    waitPro.closeLink = function () {
        if (_this.beatId)
            clearInterval(_this.beatId);
        if (_this.overId)
            clearInterval(_this.overId);
    };
    waitPro.send = function (sendData) {
        jQuery.support.cors = true;
        $.ajax({
            type: 'POST',
            url: _this.http_pro + _this.wait_host + '/sendwait.jsp?k=' + _this.myid + '&v=' + new Date().getTime(),
            data: sendData,
            timeout: 20000,
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('CONTENT-TYPE', 'application/x-www-form-urlencoded');
            },
            success: function (data) {
                _this.clearData(data);
                _this.sucHandler(data);
            },
            error: function (xhr, status, error) {
                _this.clearData(sendData);
                _this.faliHandler(sendData);
            }
        });
    };
    waitPro.sucHandler = function (data) {
        var cmd = data.cmd;
        switch (cmd) {
        case 'GID':
            _this.myid = data.gid;
            _this.callBacks.GID_CALL(data.gid);
            _this.sendBeat();
            _this.beatId = setInterval(_this.sendBeat, _this.beatTime);
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
            if (_this.talk_id == 0 && data.talk_id != undefined) {
                _this.talk_id = data.talk_id;
            }
            break;
        }
    };
    waitPro.faliHandler = function (data) {
        var cmd = data.cmd;
        switch (cmd) {
        case 'ROA':
            if (data.sendtimes < 5) {
                data.sendtimes++;
                _this.sendRoa(data.msg, data.size, data.sendtimes);
            }
            break;
        case 'GID':
            _this.sendGid();
            break;
        }
    };
    waitPro.clearData = function (data) {
        if (data.timestamp != '') {
            for (var i = 0; i < _this.sendQueue.length; i++) {
                if (data.timestamp = _this.sendQueue[i].time) {
                    _this.sendQueue.splice(i, 1);
                    i--;
                }
            }
        }
    };
    waitPro.sendBeat = function () {
        var sendData = {
            cmd: 'BEAT',
            company_id: _this.company_id,
            guest_id: _this.myid,
            talk_id: _this.talk_id,
            time: new Date().getTime()
        };
        _this.send(sendData);
    };
    waitPro.sendGid = function () {
        var sendData = {
            cmd: 'GID',
            company_id: _this.company_id,
            time: new Date().getTime()
        };
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    waitPro.sendGetKw = function () {
        var sendData = {
            cmd: 'GETKW',
            company_id: _this.company_id,
            guest_id: _this.myid,
            time: new Date().getTime()
        };
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    waitPro.sendRoa = function (msg, size, sendtimes) {
        if (typeof sendtimes == 'undefined')
            sendtimes = 0;
        var sendData = {
            cmd: 'ROA',
            company_id: _this.company_id,
            guest_id: _this.myid,
            talkPage: _this.talkpage,
            fromPage: _this.frompage,
            search: _this.search_engine,
            keyword: _this.keyword,
            landPage: _this.land_page,
            style: _this.style,
            tFrom: _this.tfrom,
            is_group: _this.is_group,
            open_time: _this.open_time,
            stat_id: _this.uid,
            msg: msg,
            size: size,
            sendtimes: sendtimes,
            talk_id: _this.talk_id,
            channel: _this.channel,
            time: new Date().getTime(),
            remote_port: _this.remote_port
        };
        if (information_switch && !information_state) {
            sendData.search = '';
            sendData.fromPage = '';
            sendData.talkPage = '';
            sendData.landPage = '';
            sendData.keyword = '';
            sendData.channel = '';
            sendData.grys_status = '0';
        }
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    waitPro.sendGRYSSQ = function (data) {
        _this.sendQueue.push(data);
        _this.send(data);
    };
    waitPro.sendStart = function () {
        var sendData = {
            cmd: 'START',
            company_id: _this.company_id,
            guest_id: _this.myid,
            time: new Date().getTime()
        };
        _this.sendQueue.push(sendData);
        _this.send(sendData);
    };
    waitPro.setCallBack = function (callName, callBack) {
        if (typeof _this.callBacks[callName] != 'undefined' && typeof callBack == 'function') {
            _this.callBacks[callName] = callBack;
        }
    };
}
