import {getEvent} from './getEvent.js'
import {setPosition} from './setPosition.js';
import {createIcon} from './createIcon.js'
import {setMsgTip} from './setMsgTip.js'
import {getAppObj} from './getAppObj.js'
import {getOpenUrl} from './getOpenUrl.js'
import {show} from './show.js'
import {hide} from './hide.js'
import {talk} from './talk.js'
import {formatContent} from './formatContent.js'

var mnone = 0;
var hz6d_alias_host = 'https://www59.eiisys.com';
var companyid = '72155416';
var hz6d_style_id = '1';
var hz6d_guest_id = '11906596378009';
var force_kf = '';
var kf_sign = 'DgyNDMTcwMI1NDExOTA2NTk2Mzc4MDA5NzIxNTU0MTY%3D';
var hz6d_guest_id = '11906596378009';
var hz6d_device = '';
var user_u_cust_id = '';
var user_u_cust_name = '';
var user_u_custom_info = '';
var force_kf = '';
var force_kf = '';
var force_kf = '';
var force_kf = '';
var force_kf = '';
var force_kf = '';
var kf_sign = 'DgyNDMTcwMI1NDExOTA2NTk2Mzc4MDA5NzIxNTU0MTY%3D';
var hz6d_guest_id = '11906596378009';
var hz6d_device = '';
var user_u_cust_id = '';
var user_u_cust_name = '';
var user_u_custom_info = '';
var force_kf = '';
var force_kf = '';
var acc_get_force = false;
var cloud_service = 'www59';
var hz6d_alias_host = 'https://www59.eiisys.com';
var hz6d_guest_ip = '172.104.82.156';
var hz6d_guest_id = '11906596378009';
var force_kf = '';

export function _convertedFunction4(window, document, talkHost, ipStr, ipContinent, companyId, styleId, undefined) {
    var uuid_53kf = $53.getCookie('uuid_53kf_' + companyid) != 'null' && $53.getCookie('uuid_53kf_' + companyid) != '' ? $53.getCookie('uuid_53kf_' + companyid) : lua_uuid_53kf;

    function handler() {
        var _this = this;
        _this.app_name = '_53App';
        _this.ipStr = decodeURI(ipStr);
        _this.talkHost = talkHost;
        _this.isOnline = false;
        _this.companyId = companyId;
        _this.fromPage = $53.data('page_referer');
        _this.styleId = styleId;
    }
    handler.prototype.setSession = function (key, value) {
        try {
            if (window.sessionStorage) {
                sessionStorage.setItem(key, value);
            } else {
                $53.setCookie(key, value);
            }
        } catch (error) {
            return false;
        }
    };
    handler.prototype.getSession = function (key) {
        try {
            if (window.sessionStorage) {
                return sessionStorage.getItem(key);
            } else {
                $53.getCookie(key);
            }
        } catch (error) {
            return false;
        }
    };
    handler.prototype.getWorkerInfo = function (id6d) {
        var workers = $53.data('workers');
        return workers[id6d];
    };
    handler.prototype.show = function () {
    };
    handler.prototype.hide = function () {
    };
    handler.prototype.talk = function () {
    };
    handler.prototype.setMsgTip = function (obj) {
    };
    function _53_mobile_icon(icon_set) {
        var _this = this;
        _this.isOnline = $53.data('is_online') === '1' ? true : false;
        if (icon_set.m_icon_type != '')
            _this.isOnline = true;
        _this.iconElm = null;
        if (typeof icon_set.on_is_open != 'undefined') {
            _this.on_is_open = icon_set.on_is_open;
            _this.on_left = icon_set.on_left;
            _this.on_top = icon_set.on_top;
            _this.off_is_open = icon_set.off_is_open;
            _this.off_left = icon_set.off_left;
            _this.off_top = icon_set.off_top;
            _this.m_icon_type = icon_set.m_icon_type;
        } else {
            _this.on_is_open = icon_set.is_open;
            _this.on_left = icon_set.left;
            _this.on_top = icon_set.top;
            _this.off_is_open = icon_set.is_open;
            _this.off_left = icon_set.left;
            _this.off_top = icon_set.top;
            _this.m_icon_type = icon_set.m_icon_type;
        }
        _this.on_content = icon_set.on_content;
        _this.off_content = icon_set.off_content;
        _this.chat_type = icon_set.chat_type ? icon_set.chat_type : 0;
        _this.lotto_top = icon_set.lotto_top ? icon_set.lotto_top : 45;
        _this.lotto_left = icon_set.lotto_left ? icon_set.lotto_left : 100;
        _this.icon_award = $53.data('icon_award');
        _this._53Api = $53.createApi();
        _this.init();
    }
    _53_mobile_icon.prototype = new handler();
    function init() {
        var _this = this;
        _this.on_content = _this.formatContent(_this.on_content);
        _this.off_content = _this.formatContent(_this.off_content);
        _this.createIcon();
        _this.lot = new Lotto();
        _this.lot.iconTalk = function () {
            _this.talk();
        };
        if (_this.isOnline && _this.on_is_open == 'yes' || !_this.isOnline && _this.off_is_open == 'yes') {
            if (_this.on_content != '') {
                if (mnone != 1)
                    _this.show();
            }
        }
    }
    ;
    function Lotto() {
        this.icon = document.getElementById('lotto_icon');
        this.l = document.getElementById('lotto_redpacket');
        this.d = document.getElementById('lotto_decorate');
        this.r = document.getElementById('lotto_round');
        this.i = document.getElementById('lotto_inp');
        this.m = document.getElementById('lotto_message');
        this.w = document.getElementById('lotto_win');
        this.b = document.getElementById('lotto_btn');
        this.t = document.getElementById('lotto_btntext');
        this.s = document.getElementById('lotto_s');
        this.n = document.getElementById('lotto_name');
        this.p = document.getElementById('lotto_phonenum');
        this.u = document.getElementById('lotto_statu');
    }
    ;
    function lotFontSize() {
        var _this = this;
        var client_width = document.body.clientWidth || document.documentElement.clientWidth;
        var ratio = client_width / 375;
        if (this.icon.hasAttribute('53kf_icon_versions')) {
            this.icon.style.fontSize = 10 * ratio + 'px';
        }
        _this.icon.style.display = 'block';
    }
    function positionIcon(left, top) {
        var _this = this;
        _this.lotFontSize();
        var wid = document.documentElement.clientWidth, hei;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            hei = document.documentElement.clientHeight;
        } else {
            hei = window.innerHeight;
        }
        _this.icon.style.left = (wid - parseInt(_this.icon.offsetWidth)) * (left / 100) + 'px';
        _this.icon.style.top = (hei - parseInt(_this.icon.offsetHeight)) * (top / 100) + 'px';
    }
    function lottoShow() {
        var _this = this;
        if (_this.l.style.display == 'none') {
            _this.b.setAttribute('data-class', 0);
            _this.l.style.display = 'block';
            _this.r.style.display = 'block';
            _this.d.style.display = 'none';
            _this.m.style.display = 'none';
            _this.i.style.display = 'none';
            _this.w.style.display = 'none';
            _this.t.innerHTML = '';
            _this.s.style.display = 'inline-block';
            clearInterval(_this.timout);
            _this.s.innerHTML = '(60s)';
            _this.timeGo();
        } else {
            return false;
        }
    }
    function lottoHide() {
        clearInterval(this.timout);
        this.s.innerHTML = '(60s)';
        this.n.value = '';
        this.p.value = '';
        this.l.style.display = 'none';
    }
    function lottoChange(award_id) {
        var _this = this;
        if (!obj)
            var obj = _this.b;
        if (_this.b.getAttribute('data-class') == 0) {
            _this.b.setAttribute('data-class', 1);
            _this.r.style.display = 'none';
            _this.d.style.display = 'block';
            _this.m.style.display = 'block';
            _this.i.style.display = 'block';
            _this.t.innerHTML = 'ȡ';
            _this.s.style.display = 'inline-block';
            clearInterval(_this.timout);
            _this.s.innerHTML = '(60s)';
            _this.timeGo();
        } else if (_this.b.getAttribute('data-class') == 1) {
            var mobil = /^1[3-9]\d{9}$/;
            if (_this.p.value == '') {
                _this.statuSh('ֻ');
                return false;
            } else if (!mobil.test(_this.p.value)) {
                _this.statuSh('Чֻ');
            } else {
                var script_id = 'kf_script_award';
                var name = _this.n.value;
                var mobile = _this.p.value;
                var callBackFunName = 'award_callback_' + new Date().getTime();
                eval(callBackFunName + '= function(data){_this.createResult(data)}');
                var url = hz6d_alias_host + '/client/kfapi_award.php?company_id=' + companyid + '&style=' + hz6d_style_id + '&guest_id=' + hz6d_guest_id + '&name=' + encodeURIComponent(name) + '&mobile=' + mobile + '&award_id=' + award_id + '&callback=' + callBackFunName + '&device=2';
                $53.createScript(script_id, url);
                _this.t.innerHTML = '...';
                _this.s.style.display = 'none';
                clearInterval(_this.timout);
            }
        } else {
            _this.iconTalk();
            _this.l.style.display = 'none';
        }
    }
    function createResult(data) {
        var _this = this;
        if (data.code == 200) {
            _this.b.setAttribute('data-class', 2);
            _this.r.style.display = 'none';
            _this.m.style.display = 'none';
            _this.i.style.display = 'none';
            _this.w.style.display = 'block';
            _this.t.innerHTML = '';
            _this.s.style.display = 'none';
            _this.icon.style.display = 'none';
        } else {
            _this.statuSh(data.info);
        }
    }
    function statuSh(str) {
        var _this = this;
        _this.u.innerHTML = str;
        _this.u.style.display = 'block';
        _this.u.style.marginLeft = -_this.u.offsetWidth / 2 + 'px';
        _this.u.style.left = '50%';
        var timer = setTimeout(function () {
            _this.u.style.display = 'none';
            clearTimeout(timer);
        }, 1500);
    }
    function justNum(obj) {
        obj.value = obj.value.replace(/[^\d]/g, '');
    }
    function timeGo() {
        var _this = this;
        var count = 60;
        _this.timout = setInterval(function () {
            count--;
            _this.s.innerHTML = '(' + count + 's)';
            if (count == 0) {
                clearInterval(_this.timout);
                _this.l.style.display = 'none';
            }
        }, 1000);
    }
    function onFocus() {
        if ($53.data('mobile_chat').chat_bottom != 2) {
            if (document.getElementById('mobile_minchat_div')) {
                document.getElementById('mobile_minchat_div').style.display = 'none';
            }
        }
    }
    function onBlur() {
        if ($53.data('mobile_chat').chat_bottom != 2) {
            if (document.getElementById('mobile_minchat_div')) {
                document.getElementById('mobile_minchat_div').style.display = 'block';
            }
        }
    }
    function iconTalk() {
    }
    Lotto.prototype = {
        lotFontSize: lotFontSize,
        positionIcon: positionIcon,
        lottoShow: lottoShow,
        lottoHide: lottoHide,
        lottoChange: lottoChange,
        createResult: createResult,
        statuSh: statuSh,
        justNum: justNum,
        timeGo: timeGo,
        onFocus: onFocus,
        onBlur: onBlur,
        iconTalk: iconTalk
    };
    function _53_mobile_ivt(ivt_set) {
        var _this = this;
        _this.isOnline = $53.data('is_online') === '1' ? true : false;
        _this.ivtElm = null;
        _this.is_open = ivt_set.is_open;
        _this.invite_off = ivt_set.invite_off;
        _this.invite_left = ivt_set.invite_left;
        _this.invite_top = ivt_set.invite_top;
        _this.invite_area = ivt_set.invite_area;
        _this.fanfu_time = ivt_set.fanfu_time;
        _this.invite_times = ivt_set.invite_times;
        _this.page_times = ivt_set.page_times;
        _this.timeout = ivt_set.timeout;
        _this.ivt_content = ivt_set.content;
        _this.force_kf = '';
        _this.man_content = '';
        _this.acc_from_kf = false;
        if (typeof ivt_set.invite_is_reauto != 'undefined')
            _this.invite_is_reauto = ivt_set.invite_is_reauto;
        else
            _this.invite_is_reauto = 2;
        _this.init();
    }
    _53_mobile_ivt.prototype = new handler();
    function init() {
        var _this = this;
        _this.ivt_content = _this.formatContent(_this.ivt_content);
        _this.createIvt();
        if (_this.getSession(_this.companyId + '_invite_times') == null) {
            _this.setSession(_this.companyId + '_invite_times', _this.invite_times);
        }
        if (_this.is_open == 'yes' && (_this.isOnline || !_this.isOnline && _this.invite_off == 'yes')) {
            setTimeout(function () {
                if (mnone != 1)
                    _this.show('first');
            }, _this.timeout * 1000);
        }
        window.hz6d_showIvt = function () {
            _this.forceShow();
        };
    }
    ;
    function createIvt() {
        var _this = this;
        $53.creElm({
            'style': 'display:none;position:fixed;font-family:Microsoft YaHei,Arial;z-index:1000000;',
            'id': 'mobile_ivt_div',
            'innerHTML': _this.ivt_content
        }, 'div');
        _this.ivtElm = document.getElementById('mobile_ivt_div');
    }
    ;
    function getOpenUrl() {
        var _this = this;
        var mobile_config = $53.data('mobileCompanyInfo');
        try {
            if (mobile_config['zdyurl'] != '' && _this.chat_window != 1) {
                var openUrl = mobile_config['zdyurl'];
                if (openUrl.indexOf('http://') == -1 && openUrl.indexOf('https://') == -1)
                    openUrl = talkHost + openUrl;
                if (openUrl.indexOf('?') == -1)
                    openUrl += '?';
            } else {
                var openUrl = talkHost + '/m.php?';
            }
        } catch (e) {
            var openUrl = talkHost + '/m.php?';
        }
        var openUrl = openUrl + 'kf_sign=' + kf_sign + '&cid=' + _this.companyId + '&style=' + _this.styleId + '&keyword=' + encodeURIComponent(_this.fromPage) + '&referer=' + encodeURIComponent(window.location.href) + '&guest_id=' + hz6d_guest_id + '&tpl=' + encodeURIComponent($53.data('tpl')) + '&uid=' + encodeURIComponent($53.data('api_uuid')) + '&u_stat_id=' + encodeURIComponent($53.data('u_stat_id')) + '&talktitle=' + encodeURIComponent(document.title) + '&tfrom=51&device=' + hz6d_device + '&uuid_53kf=' + encodeURIComponent(uuid_53kf) + '&u_cust_id=' + encodeURIComponent(user_u_cust_id) + '&u_cust_name=' + encodeURIComponent(user_u_cust_name) + '&u_custom_info=' + encodeURIComponent(user_u_custom_info);
        return openUrl;
    }
    ;
    function formatContent(content) {
        var _this = this;
        content = content.replace(/\.\.\//g, _this.talkHost + '/');
        content = content.replace(/class=".*?"/g, '');
        content = content.replace(/event="\{(.*?)\}"/g, function (match, contents) {
            return _this.getEvent(contents.split('|'));
        });
        return content;
    }
    ;
    function getEvent(eventArr) {
        var _this = this;
        var eventStr = '';
        switch (eventArr[0]) {
        case 'close':
            eventStr = 'onclick="' + _this.app_name + "''";
            break;
        case 'talk':
            var params = '';
            if (eventArr[2] == 'group') {
                params += '&zdkf_type=3&kf=' + eventArr[3];
            } else if (eventArr[2] == 'kf') {
                var workInfo = _this.getWorkerInfo(eventArr[3]);
                params += '&zdkf_type=1&kf=' + $53.EN(workInfo['worker_id']);
            } else {
                params += '&zdkf_type=' + $53.data('zdkf_type') + '&kf=' + $53.EN($53.data('kf'));
            }
            eventStr = 'onclick="' + _this.app_name + "'''" + params + '\'';
            break;
        case 'qq':
            eventStr = '\'' + eventArr[1] + '\'';
            break;
        case 'tel':
            eventStr = '\'' + eventArr[1] + '\'';
            break;
        case 'new_tel':
            eventStr = 'onclick="$53.callPriPhone()"';
            break;
        default:
            break;
        }
        return eventStr;
    }
    ;
    function checkArea() {
        var _this = this;
        var ipStr = _this.ipStr;
        if (typeof _this.invite_area == 'undefined' || _this.invite_area == '')
            return true;
        var setAreas = _this.invite_area.split(',');
        if (setAreas.length <= 0) {
            return true;
        }
        var citys = [];
        for (var i in setAreas) {
            citys = setAreas[i].split('.');
            if (citys.length >= 1 && ipStr.indexOf(citys[1]) >= 0) {
                return true;
            } else if (citys.length == 1 && ipStr.indexOf(citys[0]) >= 0) {
                return true;
            }
        }
        return false;
    }
    ;
    function talk(params) {
        var _this = this;
        _this.setSession(_this.companyId + '_invite_times', 0);
        var location_href = _this.getOpenUrl() + params;
        if (_this.acc_from_kf == true)
            location_href += _this.force_kf;
        location.href = location_href;
    }
    ;
    function show(type) {
        var _this = this;
        try {
            if (document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display == 'block') {
                return false;
            }
        } catch (e) {
        }
        if (_this.ivtElm.style.display == 'block') {
            return false;
        }
        if (_this.checkArea() === false) {
            return false;
        }
        if (_this.page_times <= 0) {
            return false;
        }
        if (_this.invite_is_reauto == 2) {
            var invite_times = _this.getSession(_this.companyId + '_invite_times');
            if (invite_times == '' || invite_times <= 0) {
                return false;
            }
            invite_times--;
            _this.setSession(_this.companyId + '_invite_times', invite_times);
        } else {
            if (type != 'first') {
                if (_this.invite_is_reauto != 1 || _this.invite_times <= 0) {
                    return false;
                }
                _this.invite_times--;
            }
        }
        _this.page_times--;
        _this.ivtElm.style.display = 'block';
        _this.setPosition();
    }
    ;
    function forceShow() {
        var _this = this;
        if (typeof force_kf != 'undefined' && typeof man_content != 'undefined' && typeof acc_from_kf != 'undefined') {
            _this.force_kf = force_kf;
            _this.man_content = man_content;
            _this.acc_from_kf = acc_from_kf;
            force_kf = '';
            man_content = '';
            acc_from_kf = false;
        }
        if (_this.ivtElm.style.display == 'none') {
            _this.ivtElm.style.display = 'block';
            _this.setPosition();
        }
    }
    ;
    function hide() {
        var _this = this;
        _this.force_kf = '';
        _this.man_content = '';
        _this.acc_from_kf = false;
        _this.ivtElm.style.display = 'none';
        if (_this.fanfu_time > 0 && _this.is_open == 'yes' && (_this.isOnline || !_this.isOnline && _this.invite_off == 'yes')) {
            setTimeout(function () {
                _this.show();
            }, _this.fanfu_time * 1000);
        }
    }
    ;
    function setPosition() {
        var _this = this;
        var invite_left = _this.invite_left;
        var invite_bottom = 100 - _this.invite_top;
        var ivtElm = _this.ivtElm;
        var ivt_width = ivtElm.offsetWidth == 0 ? ivtElm.firstChild.offsetWidth : ivtElm.offsetWidth;
        var ivt_height = ivtElm.offsetHeight == 0 ? ivtElm.firstChild.offsetHeight : ivtElm.offsetHeight;
        var w = window.innerWidth;
        var h = window.innerHeight;
        ivtElm.firstChild.style.marginLeft = '0px';
        ivtElm.firstChild.style.marginTop = '0px';
        ivtElm.style.height = ivt_height + 'px';
        ivtElm.style.left = (w - ivt_width) * (invite_left / 100) + 'px';
        ivtElm.style.bottom = (h - ivt_height) * (invite_bottom / 100) + 'px';
    }
    ;
    _53_mobile_ivt.prototype.init = init;
    _53_mobile_ivt.prototype.getOpenUrl = getOpenUrl;
    _53_mobile_ivt.prototype.show = show;
    _53_mobile_ivt.prototype.hide = hide;
    _53_mobile_ivt.prototype.talk = talk;
    _53_mobile_ivt.prototype.setPosition = setPosition;
    _53_mobile_ivt.prototype.createIcon = createIcon;
    _53_mobile_ivt.prototype.formatContent = formatContent;
    _53_mobile_ivt.prototype.setMsgTip = setMsgTip;
    _53_mobile_ivt.prototype.getAppObj = getAppObj;
    _53_mobile_ivt.prototype.getEvent = getEvent;
    _53_mobile_ivt.prototype.init = init;
    _53_mobile_ivt.prototype.createIvt = createIvt;
    _53_mobile_ivt.prototype.getOpenUrl = getOpenUrl;
    _53_mobile_ivt.prototype.formatContent = formatContent;
    _53_mobile_ivt.prototype.getEvent = getEvent;
    _53_mobile_ivt.prototype.checkArea = checkArea;
    _53_mobile_ivt.prototype.talk = talk;
    _53_mobile_ivt.prototype.show = show;
    _53_mobile_ivt.prototype.forceShow = forceShow;
    _53_mobile_ivt.prototype.hide = hide;
    _53_mobile_ivt.prototype.setPosition = setPosition;
    function _53_mobile_chat(chat_set) {
        var _this = this;
        _this.isOnline = $53.data('is_online') === '1' ? true : false;
        _this.params = '';
        _this.kf_openurl = '';
        _this.window_scroll_top = 0;
        _this.items = [];
        _this.item = 0;
        _this.audio = null;
        _this.chatElm = null;
        _this.is_open = chat_set.is_open;
        _this.chat_type = chat_set.chat_type;
        _this.chat_window = chat_set.chat_window;
        _this.chat_pop_time = chat_set.chat_pop_time;
        _this.chat_is_reauto = chat_set.chat_is_reauto;
        _this.chat_reauto_time = chat_set.chat_reauto_time;
        _this.chat_pop_num = chat_set.chat_pop_num;
        _this.chat_bottom = chat_set.chat_bottom;
        _this.chat_air = chat_set.chat_air;
        _this.chat_content_color = chat_set.chat_content_color;
        _this.chat_air_bg_color = chat_set.chat_air_bg_color;
        _this.chat_num_show = chat_set.chat_num_show;
        _this.chat_auto_show = typeof chat_set.chat_auto_show == 'undefined' ? 0 : chat_set.chat_auto_show;
        _this.open_sdk = chat_set.open_sdk;
        _this.chat_off = chat_set.chat_off;
        _this.chat_content = chat_set.content;
        _this.mobile_chat_data = eval('(' + chat_set.mobile_chat_data + ')');
        _this.mobile_config = $53.data('mobileCompanyInfo');
        _this.chat_pop_times = 0;
        _this.force_kf = '';
        _this.card_worker_name = 'ͷѯ';
        _this.is_handle_talk = false;
        _this.topOffset = '';
        _this.open_time = new Date().getTime();
        _this.mobile_icon_type = '';
        _this.minimize_height = 0;
        _this.mobile_chat_inited = 0;
        _this.talk_count = 0;
        _this.after_mobile_chat_create_time = 0;
        _this.init();
    }
    _53_mobile_chat.prototype = new handler();
    function init() {
        var _this = this;
        _this.chat_content = _this.formatContent(_this.chat_content);
        if ($53.data('mobile_icon') !== null) {
            _this.mobile_icon_type = $53.data('mobile_icon').m_icon_type;
        } else if (window._53App) {
            _this.mobile_icon_type = window._53App.getApp('icon').m_icon_type;
        }
        if (_this.is_open == 1 && _this.chat_type == 0 && (_this.isOnline || !_this.isOnline && _this.chat_off == 1) || !!_this.mobile_icon_type) {
            _this.createChat();
            if (_this.chat_bottom != 2)
                _this.show();
            if (_this.open_sdk == 0 && !_this.mobile_icon_type || !!_this.mobile_icon_type && _this.is_open != '0') {
                if (_this.chat_pop_time > 0) {
                    setTimeout(function () {
                        if (document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display != 'block') {
                            _this.talk();
                        }
                    }, _this.chat_pop_time * 1000);
                } else {
                    if (document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display != 'block') {
                        _this.talk();
                    }
                }
            }
        }
        _this.isTalkHandle();
        window.acc_chattype = 3;
        window.show_mobile_chat = function () {
            _this.talk();
        };
        window.close_mobile_chat = function () {
            _this.hide();
        };
        window.change_kf_openurl = function (param) {
            if (typeof param != 'undefined')
                _this.params = param;
            _this.openSdkUrl();
        };
        window.get_location = function () {
            _this.forceOpen();
        };
        window.hide_chat_card = function (e) {
            _this.hideCard(e);
        };
        window.talk_to_mobile_chat = function (msg) {
            var msg = 'send_opt_msg_lua:' + msg;
            document.getElementById('iframe_mobile_chat').contentWindow.postMessage(msg, '*');
        };
        window.addEventListener('message', function (event) {
            try {
                _this.handleEventlisten(event.data);
            } catch (e) {
            }
        }, false);
        window.handle_is_talk = function () {
            _this.isTalkHandle();
        };
        if (_this.mobile_config['stop_back'] == 1 && window.history && window.history.pushState) {
            if (navigator.userAgent.toLowerCase().indexOf('baiduboxapp') < 0) {
                window.addEventListener('popstate', function (e) {
                    if (_this.mobile_icon_type == '4') {
                        _this.postMinimizeState('1');
                    } else {
                        try {
                            if (document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display == 'block') {
                                _this.hide();
                            }
                        } catch (e) {
                        }
                    }
                }, false);
            }
        }
    }
    ;
    function isTalkHandle() {
        var _this = this;
        if ($53.data('is_talk') != null && $53.data('is_talk') != '' && _this.is_open != 1 && _this.is_handle_talk === false) {
            _this.is_handle_talk = true;
            _this.force_kf = $53.data('is_talk');
            _this.changeSetting();
            _this.createChat();
            if (!!_this.mobile_icon_type && _this.chat_bottom != 2)
                _this.show();
        }
    }
    ;
    function handleEventlisten(data) {
        var _this = this;
        if (JSON.stringify(data).indexOf('minimize_info') != -1) {
            _this.mobileMinimize(JSON.parse(data.substring(14)));
        }
        if (JSON.stringify(data).indexOf('minimize_state') != -1) {
            var state = JSON.parse(data.substring(15)).state;
            _this.mobileRestore(state);
        }
        if (data.indexOf('head_url') != -1) {
            var head_url = data.substring(9);
            if (!!document.getElementById('kf-bd-df-logo')) {
                document.getElementById('kf-bd-df-logo').style.backgroundImage = 'url(' + head_url + ')';
            }
        }
        if (JSON.stringify(data).indexOf('after_mobile_chat_create') != -1) {
            if (_this.mobile_icon_type != '4' && document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display == 'block' && !(_this.companyId == '72640381' && !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                document.getElementsByTagName('body')[0].style.position = 'fixed';
                document.getElementsByTagName('body')[0].style.width = '100%';
            }
            _this.mobile_chat_inited = '1';
            if (!!document.getElementById('mini_chat'))
                document.getElementById('mini_chat').className = '';
            if (_this.after_mobile_chat_create_time == 0) {
                _this.audio = document.createElement('audio');
                if (_this.mobile_config['mobile_music'] != '' && _this.audio != null && _this.audio.canPlayType && _this.audio.canPlayType('audio/mpeg') && _this.isOnline) {
                    _this.audio.src = _this.talkHost + '/sound/' + _this.mobile_config['mobile_music'] + '.mp3';
                    _this.audio.load();
                    function play_voice() {
                        _this.audio.play();
                    }
                    window.addEventListener('touchstart', play_voice, false);
                    _this.audio.addEventListener('play', function () {
                        window.removeEventListener('touchstart', play_voice, false);
                    }, false);
                }
                _this.after_mobile_chat_create_time = 1;
            }
        }
        if (data.indexOf('53kf_new_msg') != -1) {
            if (document.getElementById('msg_tip')) {
                var msg_tip_dom = document.getElementById('msg_tip');
                if (msg_tip_dom.innerHTML != 'x' || _this.chat_window != 1) {
                    if (msg_tip_dom.innerHTML == 'x')
                        msg_tip_dom.innerHTML = 0;
                    if (_this.chat_num_show != 0)
                        msg_tip_dom.style.display = 'block';
                    msg_tip_dom.innerHTML = 1 + parseInt(msg_tip_dom.innerHTML);
                }
            }
            if (!document.getElementById('msg_tip') || msg_tip_dom.innerHTML != 'x' || _this.chat_window != 1 || _this.mobile_icon_type == '4' || _this.mobile_icon_type == '7') {
                var type = _this.chat_air == '2' ? '1' : '';
                var outside_box = document.getElementById('outside_row_check_box');
                if (outside_box)
                    outside_box.parentNode.removeChild(outside_box);
                _this.msgSlid(_this.contentCode(data.substring(13), type));
                try {
                    if (_this.open_sdk == 0 && _this.mobile_config['mobile_music'] != '')
                        _this.audio.play();
                } catch (e) {
                }
            }
            try {
                $53.callMsg();
            } catch (e) {
            }
            return;
        }
        if (data.indexOf('53kf_fk_new_msg') != -1) {
            try {
                $53.fkCallMsg(_this.contentCode(data.substring(16)));
            } catch (e) {
            }
            return;
        }
        if (data == 'close') {
            if (_this.mobile_icon_type != '4') {
                _this.hide();
                if (_this.mobile_config['stop_back'] == 1 && window.history.state == 'forwardLIII') {
                    window.history.go(-1);
                }
            }
        }
        if (data == 'map_close') {
            document.getElementById('bd_map').style.display = 'none';
        }
        if (data == 'windowCnt' && _this.chat_window != 1) {
            _this.chatPop();
        }
        if (data.indexOf('tel:') != -1) {
            window.location.href = data;
        }
        if (data.indexOf('ios12.0_vx_float_blur') != -1) {
            document.activeElement.scrollIntoViewIfNeeded(true);
        }
        if (data.indexOf('worker_name') != -1) {
            _this.card_worker_name = data.substring(12);
            try {
                document.getElementById('card_worker_name').innerHTML = _this.card_worker_name;
            } catch (e) {
            }
        }
        if (data == 'ios13_float_blur') {
            document.documentElement.scrollTop = _this.topOffset;
            document.body.scrollTop = _this.topOffset;
        }
        if (data == 'ios13_float_focus') {
            _this.topOffset = document.documentElement.scrollTop || document.body.scrollTop;
        }
        if (data == 'get_force') {
            _this.forceOpenLnk();
        }
    }
    ;
    function postMinimizeState(state) {
        var obj = {
            cmd: 'minimize_state_lua',
            state: state
        };
        var msg = 'minimize_state_lua:' + JSON.stringify(obj);
        try {
            document.getElementById('iframe_mobile_chat').contentWindow.postMessage(msg, '*');
        } catch (e) {
            console.log(e);
        }
    }
    ;
    function mobileMinimize(data) {
        var _this = this;
        var minimize_type_ = data.type;
        var first_talk = data.first;
        var client_width = document.body.clientWidth || document.documentElement.clientWidth;
        var ratio = client_width < 375 ? '10' : 375 <= client_width && client_width < 384 ? '10.24' : 384 <= client_width && client_width < 414 ? '10.987' : 414 <= client_width && client_width < 424 ? '11.04' : 424 <= client_width && client_width < 600 ? '13.04' : 600 <= client_width && client_width < 768 ? '20.48' : client_width / 375 * 10;
        _this.minimize_height = ratio * data.rem + 2 + 'px';
        if (first_talk == '1') {
            _this.talk();
        }
    }
    ;
    function mobileRestore(state) {
        var _this = this;
        var minchat_height = _this.mobile_config['minchat_height'] == '' ? '90%' : _this.mobile_config['minchat_height'] + '%';
        if (state == '1') {
            document.getElementById('iframe_mobile_chat').style.height = _this.minimize_height;
            document.getElementById('mini_chat').style.backgroundColor = '';
            document.getElementById('mini_chat').style.height = 'auto';
            document.getElementsByTagName('body')[0].style.overflow = '';
            document.getElementsByTagName('body')[0].style.position = '';
            if (_this.mobile_config['stop_back'] == 1 && window.history.state == 'forwardLIII') {
                window.history.go(-1);
            }
            if (_this.is_open == '1') {
                if (_this.talk_count == '1') {
                    _this.talk_count++;
                    if (_this.chat_pop_time > 0) {
                        setTimeout(function () {
                            if (_this.is_open == '1') {
                                _this.postMinimizeState('2');
                            }
                        }, _this.chat_pop_time * 1000);
                    } else {
                        if (_this.is_open == '1') {
                            _this.postMinimizeState('2');
                        }
                    }
                } else {
                    _this.chatPop();
                }
            }
        } else if (state == '2') {
            document.getElementById('iframe_mobile_chat').style.height = minchat_height;
            document.getElementById('mini_chat').style.backgroundColor = 'rgba(0,0,0,.4)';
            document.getElementById('mini_chat').style.height = '100%';
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.getElementsByTagName('body')[0].style.position = 'fixed';
            document.getElementsByTagName('body')[0].style.width = '100%';
            if (_this.mobile_config['stop_back'] == 1 && navigator.userAgent.toLowerCase().indexOf('baiduboxapp') < 0) {
                window.history.pushState('forwardLIII', null, '');
            }
        } else if (state == '3') {
            try {
                if (document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display == 'block') {
                    _this.hide();
                }
            } catch (e) {
            }
        }
    }
    ;
    function createChat() {
        var _this = this;
        $53.creElm({ 'innerHTML': 'body{margin:0;}#scroll-wrapper{-webkit-overflow-scrolling: touch; overflow-y: scroll;}@-webkit-keyframes twinkling{0% {opacity:0;} 100%{ opacity:1;}}.face_twinkle{-webkit-animation: twinkling 0.5s infinite ease-in-out;}#toolbar img{display:inline;}#toolbar a{color:white;font-size:16px;}html{-webkit-tap-highlight-color: rgba(0,0,0,0);}' }, 'style');
        $53.creElm({
            'style': 'font-size: 0px; z-index: 1000000; position: fixed; bottom: 0px;height:50px;width: 100%;display:none;',
            'id': 'mobile_minchat_div',
            'innerHTML': '<span id="mobile_minchat_btn_line" style="position: absolute;width: 100%;background:rgba(0,0,0,.1);overflow: hidden;height: 1px;top:0;left: 0;"></span>' + _this.chat_content
        }, 'div');
        _this.chatElm = document.getElementById('mobile_minchat_div');
        var is_uc = 0;
        var is_ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (is_ios && navigator.userAgent.indexOf('UCBrowser') != -1) {
            is_uc = 1;
        }
        _this.createMinChat(is_ios, is_uc);
    }
    ;
    function createMinChat(is_uc, is_ios, type) {
        var _this = this;
        if (!!document.getElementById('mini_chat'))
            return;
        $53.creElm({ 'innerHTML': '.mini-chat-beforeiframecreate{height:0 !important;}' }, 'style');
        if (_this.is_open == 1 && _this.open_sdk == 0 || type != undefined || _this.mobile_icon_type == '1' || _this.mobile_icon_type == '4') {
            _this.kf_openurl = _this.getOpenUrl() + _this.params + _this.force_kf + '&minchat=1#' + location.href;
            var iframe_close_html = '';
            var close_top = _this.mobile_config['minchat_height'] == '' ? '10%' : 100 - _this.mobile_config['minchat_height'] + '%';
            if (_this.mobile_config['zdyurl'] != '' && _this.chat_window != 1) {
                iframe_close_html = '<a style="position:fixed;top:' + close_top + ';right:0px;width:44px;height:44px;z-index:99999999102;" id="iframe-close" class="close" onclick="close_mobile_chat()"><div class="header-down"><span style="position: absolute;top: 10px;left: 10px;"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m0 0h24v24h-24z"></path><path d="m12 13.414-6.364 6.364-1.414-1.414 6.364-6.364-6.364-6.364 1.414-1.414 6.364 6.364 6.364-6.364 1.414 1.414-6.364 6.364 6.364 6.364-1.414 1.414z" fill="#fff"></path></g></svg></span></div></a>';
            }
            var minchat_height = _this.mobile_config['minchat_height'] == '' ? '90%' : _this.mobile_config['minchat_height'] + '%';
            if (_this.mobile_icon_type == '4') {
                $53.creElm({
                    'id': 'mini_chat',
                    'style': 'display:none;z-index:1000001;font-size:0;position:fixed;left:0;top:0;height:auto;',
                    'innerHTML': '<br /><iframe id="iframe_mobile_chat" scrolling="no" style="height:0; width:100%;width: 1px!important;min-width:100%;  position:fixed; bottom:0; left:0%; z-index:9999101" frameborder="0" vspace="0" scrolling="yes" src="' + _this.kf_openurl + '"></iframe>' + iframe_close_html
                }, 'div');
            } else {
                if (is_ios && is_uc) {
                    $53.creElm({
                        'id': 'mini_chat',
                        'style': 'display:none;z-index:1000001;font-size:0;position:fixed;left:0;top:0;height:100%;background:rgba(0,0,0,.4);',
                        'innerHTML': '<br /><div id="i_div" style=" opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe id="iframe_mobile_chat" scrolling="no" style="height:' + minchat_height + '; width:100%;width: 1px!important;min-width:100%;  position:fixed; bottom:0; left:0%; z-index:9999101" frameborder="0" vspace="0" scrolling="yes" src="' + _this.kf_openurl + '"></iframe>' + iframe_close_html
                    }, 'div');
                } else if (is_ios) {
                    $53.creElm({
                        'id': 'mini_chat',
                        'style': 'display:none;z-index:1000001;font-size:0;position:fixed;left:0;top:0;height:100%;background:rgba(0,0,0,.4);',
                        'innerHTML': '<br /><div id="i_div" style=" opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe id="iframe_mobile_chat"  scrolling="no" style="height:' + minchat_height + '; width:100%;width: 1px!important;min-width:100%;  position:fixed; bottom:0; left:0%; z-index:9999101" frameborder="0" vspace="0" scrolling="yes" src="' + _this.kf_openurl + '"></iframe>' + iframe_close_html
                    }, 'div');
                } else {
                    $53.creElm({
                        'id': 'mini_chat',
                        'style': 'display:none;z-index:1000001;font-size:0;position:fixed;left:0;top:0;height:100%;background:rgba(0,0,0,.4);',
                        'innerHTML': '<br /><div id="i_div" style=" opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe id="iframe_mobile_chat" style="height:' + minchat_height + '; width:100%;  position:fixed; bottom:0; left:0%; z-index:9999101" frameborder="0" vspace="0" scrolling="yes" src="' + _this.kf_openurl + '"></iframe>' + iframe_close_html
                    }, 'div');
                }
            }
            if (_this.mobile_icon_type != '4') {
                _this.mobile_chat_inited = 0;
                document.getElementById('mini_chat').className = 'mini-chat-beforeiframecreate';
            }
            document.getElementById('mini_chat').onclick = function () {
                if (_this.mobile_icon_type == '4') {
                    _this.postMinimizeState('1');
                } else {
                    try {
                        if (document.getElementById('mini_chat') && document.getElementById('mini_chat').style.display == 'block') {
                            _this.hide();
                        }
                    } catch (e) {
                    }
                }
            };
        }
    }
    ;
    function createMap(is_uc, is_ios) {
        var _this = this;
        if (is_ios && is_uc) {
            $53.creElm({
                'id': 'bd_map',
                'style': 'position:fixed;height: 500px;display:none;z-index:1000001',
                'innerHTML': "''''" + _this.talkHost + '/style/setting/ver06/img/mobile/mobile_chat/off.png?20150709" width="25" /></div><div style="background:#000; opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe frameborder="0" vspace="0" id="bd_map_ifr" style="height:94%; width:94%;  position:fixed; top:3%; left:3%; z-index:9999101" src=""></iframe>'
            }, 'div');
        } else if (is_ios) {
            $53.creElm({
                'id': 'bd_map',
                'style': 'position:fixed;height: 500px;display:none;z-index:1000001',
                'innerHTML': "''''" + _this.talkHost + '/style/setting/ver06/img/mobile/mobile_chat/off.png?20150709" width="25" /></div><div style="background:#000; opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe frameborder="0" vspace="0" id="bd_map_ifr" style="height:94%; width:94%;  position:fixed; top:3%; left:3%; z-index:9999101" src=""></iframe>'
            }, 'div');
        } else {
            $53.creElm({
                'id': 'bd_map',
                'style': 'position:fixed;height: 500px;display:none;z-index:1000001',
                'innerHTML': "''''" + _this.talkHost + '/style/setting/ver06/img/mobile/mobile_chat/off.png?20150709" width="25" /></div><div style="background:#000; opacity:0.5; width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999100"></div><iframe frameborder="0" vspace="0" id="bd_map_ifr" style="height:100%; width:100%;  position:fixed; top:0%; left:0%; z-index:9999101" src=""></iframe>'
            }, 'div');
        }
    }
    ;
    function getOpenUrl() {
        var _this = this;
        try {
            if (_this.mobile_config['zdyurl'] != '' && _this.chat_window != 1) {
                var openUrl = _this.mobile_config['zdyurl'];
                if (openUrl.indexOf('http://') == -1 && openUrl.indexOf('https://') == -1)
                    openUrl = _this.talkHost + openUrl;
                if (openUrl.indexOf('?') == -1)
                    openUrl += '?';
            } else {
                var openUrl = _this.talkHost + '/m.php?';
            }
        } catch (e) {
            var openUrl = _this.talkHost + '/m.php?';
        }
        openUrl += 'kf_sign=' + kf_sign + '&cid=' + _this.companyId + '&style=' + _this.styleId + '&keyword=' + encodeURIComponent(_this.fromPage) + '&referer=' + encodeURIComponent(window.location.href) + '&guest_id=' + hz6d_guest_id + '&tpl=' + encodeURIComponent($53.data('tpl')) + '&uid=' + encodeURIComponent($53.data('api_uuid')) + '&u_stat_id=' + encodeURIComponent($53.data('u_stat_id')) + '&talktitle=' + encodeURIComponent(document.title) + '&tfrom=51&device=' + hz6d_device + '&uuid_53kf=' + encodeURIComponent(uuid_53kf) + '&u_cust_id=' + encodeURIComponent(user_u_cust_id) + '&u_cust_name=' + encodeURIComponent(user_u_cust_name) + '&u_custom_info=' + encodeURIComponent(user_u_custom_info);
        return openUrl;
    }
    ;
    function formatContent(content) {
        var _this = this;
        content = content.replace(/\/style\/setting\/ver07\/img\/mobile_config\/icon2\.png/g, _this.talkHost + '/style/setting/ver07/img/mobile_config/icon2.png');
        content = content.replace(/\.\.\//g, _this.talkHost + '/');
        content = content.replace(/class=".*?"/g, '');
        content = content.replace(/event="\{(.*?)\}"/g, function (match, contents) {
            return _this.getEvent(contents.split('|'));
        });
        return content;
    }
    ;
    function getEvent(eventArr) {
        var _this = this;
        var eventStr = '';
        if (eventArr[0] == 'bindEvent') {
            var mobile_chat_data = _this.mobile_chat_data;
            var active = eventArr[1];
            var active1 = active.replace(/[0-9]/ig, '');
            if (typeof mobile_chat_data[active] == 'undefined') {
                return '';
            }
            switch (active1) {
            case 'advice':
                var params = '';
                if (eventArr[2] == 'group') {
                    params += '&zdkf_type=3&kf=' + eventArr[3];
                } else if (eventArr[2] == 'kf') {
                    var workInfo = _this.getWorkerInfo(eventArr[3]);
                    params += '&zdkf_type=1&kf=' + $53.EN(workInfo['worker_id']);
                } else {
                    params += '&zdkf_type=' + $53.data('zdkf_type') + '&kf=' + $53.EN($53.data('kf')) + '&kflist=' + $53.data('kflist');
                    var addLinkParams = $53.data('add_link_params');
                    if (addLinkParams != null)
                        params += addLinkParams;
                }
                _this.params = params;
                eventStr = 'onclick="' + _this.app_name + "''''";
                break;
            case 'qq':
                eventStr = '\'' + mobile_chat_data[active] + '\'';
                break;
            case 'iphone':
            case 'phone':
                var mobile_chat_iphone = '';
                var other_iphone = '';
                var first_iphone = '';
                if (mobile_chat_data[active] == '') {
                    eventStr = 'onclick="$53.callPriPhone()"';
                } else {
                    for (var i = 0; i < mobile_chat_data[active].length; i++) {
                        var areas = mobile_chat_data[active][i].area.split('');
                        var iphone = mobile_chat_data[active][i].iphone;
                        if (i == 0)
                            first_iphone = iphone;
                        for (var p = 0; p < areas.length; p++) {
                            if (_this.ipStr.indexOf(areas[p]) > -1) {
                                mobile_chat_iphone = iphone;
                                break;
                            }
                            if (areas[p] == '')
                                other_iphone = iphone;
                        }
                    }
                    if (other_iphone != '' && mobile_chat_iphone == '')
                        mobile_chat_iphone = other_iphone;
                    if (mobile_chat_iphone == '')
                        mobile_chat_iphone = first_iphone;
                    eventStr = '\'' + mobile_chat_iphone + '\'';
                }
                break;
            case 'map':
                var mobile_chat_addr = '';
                var other_addr = '';
                var first_addr = '';
                for (var i = 0; i < mobile_chat_data[active].length; i++) {
                    var areas = mobile_chat_data[active][i].area.split('');
                    var addr = mobile_chat_data[active][i].addr;
                    if (i == 0)
                        first_addr = addr;
                    for (var p = 0; p < areas.length; p++) {
                        if (_this.ipStr.indexOf(areas[p]) > -1) {
                            mobile_chat_addr = addr;
                            break;
                        }
                        if (areas[p] == '')
                            other_addr = addr;
                    }
                }
                if (other_addr != '' && mobile_chat_addr == '')
                    mobile_chat_addr = other_addr;
                if (mobile_chat_addr == '')
                    mobile_chat_addr = first_addr;
                var is_uc = 0;
                var is_ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                if (is_ios && navigator.userAgent.indexOf('UCBrowser') != -1) {
                    is_uc = 1;
                }
                _this.createMap(is_ios, is_uc);
                var bd_src = document.getElementById('bd_map_ifr');
                var mobile_config = $53.data('mobileCompanyInfo');
                if (bd_src.src.indexOf('bdmap') == -1) {
                    bd_src.src = _this.talkHost + '/visitor/bdmap.php?img=' + mobile_config['company_logo'] + '&name=' + mobile_config['company_short'] + '&intr=' + mobile_config['company_intr'] + '&address=' + mobile_chat_addr;
                }
                eventStr = "''''";
                break;
            case 'web':
                eventStr = '\'' + mobile_chat_data[active] + '\'';
                break;
            default:
                break;
            }
        }
        return eventStr;
    }
    ;
    function talk(type) {
        var _this = this;
        _this.talk_count++;
        if (_this.chat_window == 1 || type == 'float') {
            var sysInfo = _this.getSys();
            _this.window_scroll_top = window.scrollY;
            if (_this.mobile_icon_type != '4' && _this.mobile_chat_inited == '1' && !(_this.companyId == '72640381' && !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                document.getElementsByTagName('body')[0].style.position = 'fixed';
                document.getElementsByTagName('body')[0].style.width = '100%';
            }
            try {
                document.getElementById('mini_chat').style.width = '100%';
                document.getElementById('mini_chat').style.display = 'block';
            } catch (e) {
            }
            if (document.getElementById('msg_tip')) {
                document.getElementById('msg_tip').style.display = 'none';
                document.getElementById('msg_tip').innerHTML = 'x';
            }
            try {
                if (_this.mobile_icon_type == '4') {
                    if (_this.talk_count == '1') {
                        if (_this.chat_pop_time > 0) {
                            _this.postMinimizeState('1');
                            setTimeout(function () {
                                if (_this.is_open == '1') {
                                    _this.postMinimizeState('2');
                                }
                            }, _this.chat_pop_time * 1000);
                        } else {
                            if (_this.is_open == '1') {
                                _this.postMinimizeState('2');
                            } else {
                                _this.postMinimizeState('1');
                            }
                        }
                    } else {
                        _this.postMinimizeState('2');
                    }
                } else {
                    if (_this.mobile_icon_type == '1' && _this.talk_count == '1' && _this.is_open == '0') {
                        return;
                    } else {
                        document.getElementById('iframe_mobile_chat').contentWindow.postMessage('auto', '*');
                        if (_this.mobile_config['stop_back'] == 1 && navigator.userAgent.toLowerCase().indexOf('baiduboxapp') < 0) {
                            window.history.pushState('forwardLIII', null, '');
                        }
                    }
                }
            } catch (e) {
            }
            if (typeof icon_msg_tip_hide == 'function')
                icon_msg_tip_hide();
            $53.callBackFun('miniShow');
        } else {
            if (document.getElementById('msg_tip')) {
                document.getElementById('msg_tip').style.display = 'none';
                document.getElementById('msg_tip').innerHTML = 'x';
            }
            var new_kf_openurl = _this.getOpenUrl() + _this.params + _this.force_kf + '&is_minchat=1&historylen=' + parseInt(window.history.length) + '&locahref=' + encodeURIComponent(location.href);
            var new_kf_openurl2 = new_kf_openurl + '&fromopen=1#' + location.href;
            try {
                if (!document.getElementById('mini_open_53kf_div') && !document.getElementById('mini_open_53kf_div_company')) {
                    $53.creElm({
                        'id': 'mini_open_53kf_div',
                        'style': 'display:none',
                        'innerHTML': '<a href="' + new_kf_openurl2 + '" id="mini_open_53kf_a" target="_blank">ѯ</a>'
                    }, 'div');
                }
                if (document.getElementById('mini_open_53kf_div_company'))
                    document.getElementById('mini_open_53kf_a').href = new_kf_openurl2;
                var is_ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                if (is_ios) {
                    document.getElementById('mini_open_53kf_a').onclick();
                } else {
                    document.getElementById('mini_open_53kf_a').click();
                }
                window.location.href = new_kf_openurl2;
            } catch (e) {
                window.location.href = new_kf_openurl2;
            }
        }
        try {
            _this.hideCard();
        } catch (e) {
        }
    }
    ;
    function chatPop() {
        var _this = this;
        if (_this.mobile_icon_type == '1' && _this.is_open == '0')
            return false;
        if (_this.chat_is_reauto == 1 && _this.chat_reauto_time > 0) {
            try {
                if (_this.chat_pop_times)
                    clearTimeout(_this.chat_pop_times);
            } catch (e) {
            }
            ;
            _this.chat_pop_times = setTimeout(function () {
                if (_this.chat_pop_num > 0) {
                    _this.talk();
                    _this.chat_pop_num--;
                }
            }, _this.chat_reauto_time * 1000);
        }
    }
    ;
    function openSdkUrl(type) {
        var _this = this;
        var is_uc = 0;
        var is_ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (is_ios && navigator.userAgent.indexOf('UCBrowser') != -1) {
            is_uc = 1;
        }
        _this.createMinChat(is_ios, is_uc, true);
        _this.talk(type);
    }
    ;
    function forceOpen() {
        var _this = this;
        if (typeof force_kf != 'undefined') {
            _this.force_kf = force_kf;
            force_kf = '';
            acc_get_force = true;
        }
        _this.changeSetting();
        _this.openSdkUrl();
        _this.forceOpenLnk();
    }
    ;
    function forceOpenLnk() {
        var _this = this;
        if (cloud_service == 'www111' || hz6d_alias_host.indexOf('w111.53kf.com') !== -1) {
            $53.createScript('hz6d_send_lnk_debug0', hz6d_alias_host + '/wnn_debug.php?cmd=senlnk0&hz6d_guest_ip=' + hz6d_guest_ip + '&hz6d_guest_id=' + hz6d_guest_id + '&force_kf=' + _this.force_kf);
            if (_this.force_kf != '') {
                var workerid = '';
                var params_arr = _this.force_kf.split('&');
                for (var i = 0; i < params_arr.length; i++) {
                    if (params_arr[i].indexOf('kf=') != -1) {
                        workerid = params_arr[i].split('=');
                        workerid = workerid[1];
                    }
                }
                if (workerid != '') {
                    var lnk_msg = 'sendLNK{#53#}' + workerid;
                    try {
                        $53.createScript('hz6d_send_lnk_debug1', hz6d_alias_host + '/wnn_debug.php?cmd=senlnk1&hz6d_guest_ip=' + hz6d_guest_ip + '&hz6d_guest_id=' + hz6d_guest_id);
                        document.getElementById('iframe_mobile_chat').contentWindow.postMessage(lnk_msg, '*');
                    } catch (e) {
                    }
                }
            }
        }
    }
    ;
    function changeSetting() {
        var _this = this;
        if (_this.is_open != 1) {
            if (_this.mobile_icon_type != '1' && _this.mobile_icon_type != '4') {
                _this.is_open = 1;
                _this.chat_window = 1;
                _this.chat_bottom = 2;
                _this.chat_pop_time = 0;
                if (_this.mobile_icon_type == '') {
                    _this.chat_air = 2;
                }
                _this.chat_is_reauto = 0;
                _this.chat_auto_show = 0;
            }
        }
    }
    ;
    function show() {
        var _this = this;
        _this.chatElm.style.display = 'block';
        _this.setPosition();
        try {
            if (_this.mobile_config['zdyurl'] != '' && _this.chat_window != 1) {
                var body_pre = document.body.clientWidth / 375;
                document.getElementById('iframe-close').style.opacity = '1';
                document.getElementById('iframe-close').style.width = 44 * body_pre + 'px';
                document.getElementById('iframe-close').style.height = 44 * body_pre + 'px';
            }
        } catch (e) {
        }
    }
    ;
    function hide() {
        var _this = this;
        document.getElementsByTagName('body')[0].style.overflow = '';
        document.getElementsByTagName('body')[0].style.position = '';
        try {
            document.getElementById('mini_chat').style.display = 'none';
        } catch (e) {
        }
        if (document.getElementById('msg_tip')) {
            document.getElementById('msg_tip').innerHTML = 0;
            document.getElementById('msg_tip').style.display = 'none';
        }
        try {
            if (_this.mobile_icon_type == '4') {
                _this.postMinimizeState('1');
            } else {
                document.getElementById('iframe_mobile_chat').contentWindow.postMessage('hidden', '*');
            }
        } catch (e) {
        }
        _this.chatPop();
        window.scrollTo(0, _this.window_scroll_top);
        $53.callBackFun('miniHide');
        try {
            _this.hideCard();
        } catch (e) {
        }
    }
    ;
    function setPosition() {
        var _this = this;
        var chatElm = _this.chatElm;
        var btn_line = document.getElementById('mobile_minchat_btn_line');
        if (_this.chat_bottom == 0) {
            btn_line.style.top = 0;
            btn_line.style.bottom = 'auto';
            chatElm.style.bottom = '0px';
        } else {
            btn_line.style.top = 'auto';
            btn_line.style.bottom = 0;
            chatElm.style.top = '0px';
        }
        var oDiv = chatElm.getElementsByTagName('div');
        for (var i = 0; i < oDiv.length; i++) {
            oDiv[i].style.width = 100 / oDiv.length + '%';
        }
        if (!oDiv[0].hasAttribute('53kf_menu_versions'))
            return false;
        var client_width = document.body.clientWidth || document.documentElement.clientWidth;
        var ratio = client_width / 375;
        chatElm.style.fontSize = 10 * ratio + 'px';
        chatElm.style.height = 50 * ratio + 'px';
    }
    ;
    function getRem(pwidth, prem) {
        var html = document.getElementsByTagName('html')[0];
        var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
        html.style.fontSize = oWidth / pwidth * prem + 'px';
    }
    ;
    function contentCode(msg, type) {
        if (!type)
            var type = '';
        msg = msg.replace(/<img [^>]+>/gi, function (str) {
            if (str.indexOf('/53b/') > 0)
                return '';
            else
                return '';
        });
        if (type == '1') {
            var btns_arr = [], inside_row_check_arr = [], outside_row_check_arr = [], count = 0;
            var btns_style = 'margin:0 .8em .8em  0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 24em; display: inline-block; height: 2.8em; line-height: 2.6em; border:.1em solid #3B99FC; border-radius: .2em; color: #FFF; background: #3B99FC; padding:0 1em; text-align: center; cursor: pointer;';
            var outside_row_check_style = 'color:#218bfc; cursor:pointer; font-size: 1.2em; margin-top: .8em;';
            var inside_row_check_style = 'color:#218bfc; cursor:pointer; display:inline-block; font-size: 1em;';
            msg = msg.replace(/\{\[(.+?)\]\}/g, function (item) {
                item = item.replace(/\{\[|\]\}/g, '');
                btns_arr.push('<div style="' + btns_style + '\'' + item + '\'' + item + '</div>');
                return '';
            });
            msg = msg.replace(/\<div class=\"btn_welcomeServlets(.+?)\<\/div\>/g, function (item) {
                item = item.replace(/<[^>]+>/g, '');
                btns_arr.push('<div style="' + btns_style + '\'' + item + '\'' + item + '</div>');
                return '';
            });
            msg = msg.replace(/\{\{(.+?)\}\}/g, function (item) {
                item = item.replace(/\{\{|\}\}/g, '@@checkInsideRow@@');
                inside_row_check_arr.push(item);
                return item;
            });
            msg = msg.replace(/\<span class=\"check_welcomeServlets(.+?)\<\/span\>/g, function (item) {
                item = item.replace(/<[^>]+>/g, '@@checkInsideRow@@');
                inside_row_check_arr.push(item);
                return item;
            });
            msg = msg.replace(/\[\{(.+?)\}\]/g, function (item) {
                count++;
                item = item.replace(/\[\{|\}\]/g, '');
                if (count < 3) {
                    outside_row_check_arr.push('<div style="' + outside_row_check_style + '\'' + item + '\'' + item + '</div>');
                } else if (count == 3) {
                    outside_row_check_arr.push('<div style="padding-left: 0.6em;' + outside_row_check_style + '">...</div>');
                }
                return '';
            });
            msg = msg.replace(/\<div class=\"check_outside_row(.+?)\<\/div\>/g, function (item) {
                count++;
                item = item.replace(/<[^>]+>/g, '');
                if (count < 3) {
                    outside_row_check_arr.push('<div style="' + outside_row_check_style + '\'' + item + '\'' + item + '</div>');
                } else if (count == 3) {
                    outside_row_check_arr.push('<div style="padding-left: 0.6em;' + outside_row_check_style + '">...</div>');
                }
                return '';
            });
            msg = msg.replace(/<[^>]+>/g, '');
            msg = msg.replace(/@@checkInsideRow@@(.+?)@@checkInsideRow@@/g, function (item) {
                item = item.replace(/@@checkInsideRow@@/g, '');
                item = '<span style="' + inside_row_check_style + '\'' + item + '\'' + item + '</span>';
                return item;
            });
            var outsideRowBtns = btns_arr.join('');
            var outsideRowOpts = outside_row_check_arr.join('');
            var outsideBox = '<div id="outside_row_check_box" style="overflow:hidden; font-size: 1em">' + outsideRowBtns + outsideRowOpts + '</div>';
            msg = '<div style="overflow:hidden; font-size: 1em; margin-bottom: 1em">' + msg + '</div>' + outsideBox;
        } else {
            msg = msg.replace(/<[^>]+>/g, '');
        }
        return msg;
    }
    ;
    function msgSlid(str) {
        var _this = this;
        if (_this.chat_air == 1)
            _this.showMsgItems(str);
        else if (_this.chat_air == 2)
            _this.showMsgCard(str);
        else if (_this.mobile_icon_type == '7')
            _this.showBaiduIconMsg(str);
        var now_time = new Date().getTime();
        if (_this.chat_auto_show == 1 && (now_time - _this.open_time > _this.chat_pop_time * 1000 || _this.is_open != '1' && _this.mobile_icon_type != '')) {
            if (_this.mobile_icon_type == '4') {
                _this.postMinimizeState('2');
            } else {
                _this.talk();
            }
        }
    }
    ;
    function showBaiduIconMsg(str) {
        str = str.replace(/\{\[(.+?)\]\}/g, function (item) {
            item = item.replace(/\{\[|\]\}/g, '');
            return item;
        });
        str = str.replace(/\{\{(.+?)\}\}/g, function (item) {
            item = item.replace(/\{\{|\}\}/g, '');
            return item;
        });
        str = str.replace(/\[\{(.+?)\}\]/g, function (item) {
            item = item.replace(/\[\{|\}\]/g, '');
            return item;
        });
        document.getElementById('kf-bd-df-val').innerHTML = str;
    }
    ;
    function showMsgCard(str) {
        var _this = this;
        var card = document.getElementById('mobile_chat_card');
        var worker_img = '<span style="width: 2.4em;height: 2.4em;font-size:1em;position: absolute;left: 0;bottom: 0;"><svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="a" cx="12" cy="12" r="12"/><path id="b" d="m1.24509612 4.95249852 4.16765273-1.69874628c.37645116-.15344249.62254806-.51950725.62254806-.92602918v-2.32772306h5.96470309v2.32921356c0 .40577354.2452036.77132006.6206463.92525174l4.1380611 1.69660709c.7508853.30786337 1.2412926 1.03895639 1.2412926 1.85050348v3.19842413h-18v-3.19544313c0-.81304385.49219379-1.54517337 1.24509612-1.85205835z"/><mask id="c" fill="#fff"><use fill="#fff" fill-rule="evenodd" xlink:href="#a"/></mask><mask id="d" fill="#fff"><use fill="#fff" fill-rule="evenodd" xlink:href="#b"/></mask></defs><g fill="none" fill-rule="evenodd"><use fill="#fff" xlink:href="#a"/><g mask="url(#c)"><g transform="translate(3 1)"><path d="m4 5h10v11h-10z" fill="#d8d8d8"/><path d="m2 7h14v13h-14z" fill="#5a4146"/><g transform="translate(0 13)"><use fill="#d2555a" xlink:href="#b"/><path d="m6 1h6l1.5 2.5-4.5 5.5-4.51-5.5z" fill="#deb790" mask="url(#d)"/><path d="m4 3h.94399963c.72753152 1.97333533 2.07608106 2.96000299 4.04564864 2.96000299 1.96956753 0 3.30635153-.98666766 4.01035173-2.96000299h1.0352969l-2.5912973 7.460003h-4.99999997z" fill="#fff" mask="url(#d)"/></g><path d="m4 5h10v6.8676192c0 .7025257-.3685977 1.3535394-.9710085 1.7149859l-3 1.8c-.63336476.3800189-1.42461824.3800189-2.05798301 0l-3-1.8c-.60241082-.3614465-.97100849-1.0124602-.97100849-1.7149859z" fill="#f2cea5"/><path d="m8.27550057 7.8813398-.51298922.61387464c-.00880168-.0073552-.06103896-.03812521-.16328527-.07599868-.19179472-.07104345-.44328005-.11633733-.76162406-.11911797-.5346246-.00466978-.95797554.15748388-1.20849531.47639634l-.62910671-.49419101c.42094174-.53586016 1.08142394-.78884083 1.84458951-.78217481.40990109.00358035.75306408.06538588 1.03251685.16889911.18963422.07024317.32094318.14758981.39839421.21231238z" fill="#cc9872" fill-rule="nonzero" transform="matrix(-1 0 0 1 13.275 0)"/><rect fill="#262626" height="1" rx=".5" width="1" x="6" y="9"/><rect fill="#262626" height="1" rx=".5" width="1" x="11" y="9"/><path d="m12.7607673 7.88134095-.5129893.61387464c-.0088016-.0073552-.0610389-.03812521-.1632852-.07599868-.1917948-.07104345-.4432801-.11633733-.7616241-.11911797-.7910539-.00690961-1.3130694.33219461-1.45946812 1.05041447-.16776876.82305929.0051621 1.55857779.42000172 2.09365589l-.63224384.4901711c-.55735306-.7188981-.78606347-1.6916611-.5716389-2.74360982.23072104-1.13189785 1.10617094-1.70059506 2.25033664-1.69060112.4099011.00358035.7530641.06538588 1.0325168.16889911.1896343.07024317.3209432.14758981.3983943.21231238z" fill="#bb8660" fill-rule="nonzero"/><path d="m9.60932912 5.48588127c.39580848.30416531.85936538.64220489 1.39067088 1.01411873.8040364.56282551 1.7632268 1.04807408 2.8775711 1.45574568l-.0000084.00002298c.088844.0325027.1798822.05866085.2724288.07827744 1.233339.26142392 1.8500085-.08325811 1.8500085-1.0340461 0-3.86599325-3.1340068-7-7-7-3.86599325 0-7 3.13400675-7 7 0 .53672686.66666667.87006019 2 1 1.16666667-.41666667 2.16666667-.91666667 3-1.5.53130425-.37191298.99486029-.70995185 1.39066812-1.01411661l-.00000169-.0000022c.35930216-.27611141.85936057-.27611137 1.21866269.00000008z" fill="#5a4146"/><path d="m3 8h1v3h-1z" fill="#707487"/><path d="m14.0000461 11c-.6541553 1.265297-1.3157072 2.0986299-1.9846557 2.4999988-.6689485.401369-1.6740786.5680357-3.0153904.5" stroke="#464655" stroke-linecap="round"/><path d="m14 8h1v3h-1z" fill="#707487"/></g></g></g></svg></span>';
        if (card == null || card == undefined) {
            $53.creElm({
                'id': 'mobile_chat_card',
                'style': 'display: block;background:' + _this.chat_air_bg_color + ';border: 0.1em solid #DDE5ED;box-shadow: rgba(0, 0, 0, 0.15) 0 0.1em 0.6em 0, rgba(0, 0, 0, 0.09) 0 0.2em 3.2em 0;border-radius: 0.2em;position: fixed;left: 1.6em;right: 1.6em;bottom: -8.6em;box-sizing:border-box;padding:0.8em;margin-left:0.07px;opacity:0;transition:bottom 0.3s,opacity 0.3s;z-index: 1000001',
                'innerHTML': '<div style="font-size:1em;" onclick="show_mobile_chat();"><span class="message-card-head" style="display:block;width: 100%;height:2.6em;position: relative;font-size:1em;">' + worker_img + '<span style="color: ' + _this.chat_content_color + ';width:12.86em;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing: 0.6px;line-height: 1.43em;position: absolute;left: 2.29em;bottom:0.15em;font-size: 1.4em" id="card_worker_name">' + _this.card_worker_name + '</span><span style="width: 2.8em;height: 2.8em;font-size: 1em;position: absolute;right: 0;top: 0;" onclick="hide_chat_card(this)"><span style="position: absolute;right:0;top:0;width: 1.6em;height: 1.6em;font-size:1em;background-color:rgba(255,255,255,0.3);border-radius:50%;" ><span style="position:absolute;width:1.2em;height:1.2em;transform:rotate(45deg);top:.2em;left:.2em;"><span style="width:.2em;height:1.2em;background:' + _this.chat_content_color + ';position:absolute;top:0;left:.5em;"></span><span style="width:1.2em;height:.2em;background:' + _this.chat_content_color + ';position:absolute;top:.5em;left:0em;"></span></span></span></span></span><span class="message-card-body" style="display:block;width: 100%;position: relative;font-size:1em;"><div class="card-content" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;color: ' + _this.chat_content_color + ';letter-spacing: 0.6px;line-height: 1.5em;margin-top:0.5em;font-size: 1em" id="mobile_chat_talk_str">' + str + '</div></span></div>'
            }, 'div');
            card = document.getElementById('mobile_chat_card');
        } else {
            var talk_str = document.getElementById('mobile_chat_talk_str');
            talk_str.innerHTML = str;
            card.style.display = 'block';
        }
        var client_width = document.body.clientWidth || document.documentElement.clientWidth;
        var ratio = client_width / 375;
        card.style.bottom = 70 * ratio + 'px';
        card.style.opacity = 1;
        card.style.fontSize = 10 * ratio + 'px';
    }
    ;
    function hideCard(e) {
        document.getElementById('mobile_chat_card').style.display = 'none';
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }
    }
    ;
    function showMsgItems(str) {
        var _this = this;
        _this.item++;
        var bubble = document.getElementById('mobile_chat_bubble');
        if (bubble == null || bubble == undefined) {
            $53.creElm({
                'id': 'mobile_chat_bubble',
                'style': 'height:10.8em;width:100%;position: fixed;bottom:5.8px;overflow: hidden;z-index:999999',
                'innerHTML': ''
            }, 'div');
            bubble = document.getElementById('mobile_chat_bubble');
        }
        html = '<div onclick="show_mobile_chat();" class="msg-slid-hide-kf" id="msg-slid' + _this.item + '" style="z-index: 1000001; max-width:27em; position: absolute; left: 1em; bottom:0; opacity: 0.9;line-height: 2.33em;height:2.33em;font-size: 1em;letter-spacing: 0.05em;transiton:bottom 0.5s"><b style="position:absolute;width:100%;height:100%;background:' + _this.chat_air_bg_color + ';top:0;left:0;border-radius:1.67em;"></b><label style="width:100%;overflow: hidden;text-overflow:ellipsis;display: inline-block;box-sizing: border-box;color: ' + _this.chat_content_color + ';padding: 0 1em;white-space:nowrap;position:relative;z-index:11;font-size: 1.4em;">' + str + '</label></div>';
        bubble.innerHTML += html;
        bubble.style.display = 'block';
        var client_width = document.body.clientWidth || document.documentElement.clientWidth;
        var ratio = client_width / 375;
        var item_id = 'msg-slid' + _this.item;
        _this.items.push(item_id);
        for (var i = 0; i < _this.items.length; i++) {
            var n = _this.items.length - (i + 1);
            document.getElementById(_this.items[i]).style.bottom = 36 * ratio * n + 'px';
        }
        var bottom = 0;
        var hidden = setInterval(function () {
            _this.disappear(item_id);
            clearTimeout(hidden);
            _this.items.splice(0, 1);
            if (_this.items.length <= 0)
                bubble.style.display = 'none';
        }, 1500);
        bubble.style.bottom = 58 * ratio + 'px';
        bubble.style.opacity = 1;
        bubble.style.fontSize = 10 * ratio + 'px';
    }
    ;
    function disappear(item_id) {
        var temp = 1;
        var t1 = setInterval(function () {
            temp = temp - 0.1;
            var item = document.getElementById(item_id);
            var parentNodes = document.getElementById(item_id).parentNode;
            item.style.opacity = temp;
            item.style.opacity = parseFloat(item.style.opacity) - 0.1;
            if (temp <= 0) {
                clearInterval(t1);
                try {
                    parentNodes.removeChild(item);
                } catch (e) {
                }
            }
        }, 50);
    }
    ;
    function getSys() {
        var system, u = navigator.userAgent;
        u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 ? system = 'android' : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? system = 'ios' : system = '';
        return system;
    }
    ;
    function browserMod() {
        var u = navigator.userAgent.toLowerCase();
        var mod = broswerType = str.indexOf('baiduboxapp') > 0 ? 'bdMobile' : str.indexOf('huawei') > 0 ? 'huawei' : str.indexOf('micromessenger') > 0 ? 'vxin' : str.indexOf('baidubrowser') > 0 ? 'bdBrowser' : str.indexOf('ucbrowser') > 0 ? 'uc' : str.indexOf('mqqbrowser') > 0 ? 'qq' : str.indexOf('qhbrowser') > 0 ? '360' : str.indexOf('sogoumobilebrowser') > 0 ? 'sougou' : 'safari_and_so_on';
        ;
        return mod;
    }
    ;
    _53_mobile_chat.prototype.init = init;
    _53_mobile_chat.prototype.isTalkHandle = isTalkHandle;
    _53_mobile_chat.prototype.handleEventlisten = handleEventlisten;
    _53_mobile_chat.prototype.postMinimizeState = postMinimizeState;
    _53_mobile_chat.prototype.mobileMinimize = mobileMinimize;
    _53_mobile_chat.prototype.mobileRestore = mobileRestore;
    _53_mobile_chat.prototype.createChat = createChat;
    _53_mobile_chat.prototype.createMinChat = createMinChat;
    _53_mobile_chat.prototype.createMap = createMap;
    _53_mobile_chat.prototype.getOpenUrl = getOpenUrl;
    _53_mobile_chat.prototype.formatContent = formatContent;
    _53_mobile_chat.prototype.getEvent = getEvent;
    _53_mobile_chat.prototype.talk = talk;
    _53_mobile_chat.prototype.chatPop = chatPop;
    _53_mobile_chat.prototype.openSdkUrl = openSdkUrl;
    _53_mobile_chat.prototype.forceOpen = forceOpen;
    _53_mobile_chat.prototype.forceOpenLnk = forceOpenLnk;
    _53_mobile_chat.prototype.changeSetting = changeSetting;
    _53_mobile_chat.prototype.show = show;
    _53_mobile_chat.prototype.hide = hide;
    _53_mobile_chat.prototype.setPosition = setPosition;
    _53_mobile_chat.prototype.getRem = getRem;
    _53_mobile_chat.prototype.contentCode = contentCode;
    _53_mobile_chat.prototype.msgSlid = msgSlid;
    _53_mobile_chat.prototype.showBaiduIconMsg = showBaiduIconMsg;
    _53_mobile_chat.prototype.showMsgCard = showMsgCard;
    _53_mobile_chat.prototype.hideCard = hideCard;
    _53_mobile_chat.prototype.showMsgItems = showMsgItems;
    _53_mobile_chat.prototype.disappear = disappear;
    _53_mobile_chat.prototype.getSys = getSys;
    _53_mobile_chat.prototype.browserMod = browserMod;
    function _53App() {
        var _this = this;
        _this.ipStr = decodeURI(ipStr);
        _this.ipContinent = decodeURI(ipContinent);
        _this.apps = [];
        _this.kfOnline = 0;
        _this.kfOfOnline = 0;
        _this.workers = $53.data('workers');
        _this.ofAllWorkers = $53.data('of_all_worker');
        _this.groups = $53.data('groups');
        _this.ofGroups = $53.data('of_groups');
        _this.workerStates = [];
        _this.ofWorkerStates = [];
        _this.init();
    }
    _53App.prototype.init = function () {
        var _this = this;
        var assign_worker = $53.data('assign_worker');
        $53.data('zdkf_type', assign_worker.assignType == 'group' ? '3' : '1');
        $53.data('kflist', assign_worker.assignMode == 'hand' ? 'on' : 'off');
        $53.data('kf', assign_worker.workers == null ? '' : assign_worker.workers);
        if (_this.isMobile() && in_site) {
            $53.setTerminal('mobile');
            $53.setUrl(_this.getOpenUrl());
            _this.initGroup();
            _this.initWorkerStates();
            _this.initOfWorkerStates();
            _this.checkOnline();
            try {
                if ($53.data('mobile_icon') != null && $53.data('mobile_invite') != null && $53.data('mobile_chat') != null) {
                    _this.setApp('icon', new _53_mobile_icon($53.data('mobile_icon')));
                    var mobile_invite = _this.initInviteDate($53.data('mobile_invite'), $53.data('mobile_chat'));
                    if (!$53.data('mobile_icon').m_icon_type)
                        _this.setApp('invite', new _53_mobile_ivt(mobile_invite));
                    _this.setApp('chat', new _53_mobile_chat($53.data('mobile_chat')));
                    _this.clearCache();
                } else {
                    setTimeout(function () {
                        _this.setApp('icon', new _53_mobile_icon($53.data('mobile_icon')));
                        var mobile_invite = _this.initInviteDate($53.data('mobile_invite'), $53.data('mobile_chat'));
                        if (!$53.data('mobile_icon').m_icon_type)
                            _this.setApp('invite', new _53_mobile_ivt(mobile_invite));
                        _this.setApp('chat', new _53_mobile_chat($53.data('mobile_chat')));
                        _this.clearCache();
                    }, 1000);
                }
                $53.apiOnload('mobile');
            } catch (e) {
                console.log(e);
            }
        } else {
            _this.clearCache();
        }
    }, _53App.prototype.getOpenUrl = function () {
        var _this = this;
        var mobile_config = $53.data('mobileCompanyInfo');
        try {
            if (mobile_config['zdyurl'] != '' && _this.chat_window != 1) {
                var openUrl = mobile_config['zdyurl'];
                if (openUrl.indexOf('http://') == -1 && openUrl.indexOf('https://') == -1)
                    openUrl = talkHost + openUrl;
                if (openUrl.indexOf('?') == -1)
                    openUrl += '?';
            } else {
                var openUrl = talkHost + '/m.php?';
            }
        } catch (e) {
            var openUrl = talkHost + '/m.php?';
        }
        openUrl += 'kf_sign=' + kf_sign + '&cid=' + companyId + '&style=' + styleId + '&keyword=' + encodeURIComponent($53.data('page_referer')) + '&referer=' + encodeURIComponent(window.location.href) + '&guest_id=' + hz6d_guest_id + '&tpl=' + encodeURIComponent($53.data('tpl')) + '&uid=' + encodeURIComponent($53.data('api_uuid')) + '&u_stat_id=' + encodeURIComponent($53.data('u_stat_id')) + '&talktitle=' + encodeURIComponent(document.title) + '&tfrom=51&device=' + hz6d_device + '&uuid_53kf=' + encodeURIComponent(uuid_53kf) + '&u_cust_id=' + encodeURIComponent(user_u_cust_id) + '&u_cust_name=' + encodeURIComponent(user_u_cust_name) + '&u_custom_info=' + encodeURIComponent(user_u_custom_info);
        return openUrl;
    };
    _53App.prototype.initInviteDate = function (mobile_invite, mobile_chat) {
        if (mobile_invite.is_open == undefined) {
            if (mobile_chat.chat_type == 1 && mobile_chat.is_open == 1)
                mobile_invite.is_open = 'yes';
            else
                mobile_invite.is_open = 'no';
            mobile_invite.timeout = mobile_chat.invite_pop_time;
            mobile_invite.invite_times = mobile_chat.invite_pop_num;
            mobile_invite.fanfu_time = mobile_chat.invite_reauto_time;
            mobile_invite.invite_off = mobile_chat.invite_off == 1 ? 'yes' : 'no';
            mobile_invite.page_times = 9999;
            mobile_invite.invite_is_reauto = mobile_chat.invite_is_reauto;
        }
        return mobile_invite;
    };
    _53App.prototype.initGroup = function () {
        var _this = this;
        var workers = _this.copyObject($53.data('workers'));
        var id6d = 0;
        for (var group_id in _this.groups) {
            for (var i in _this.groups[group_id].workers) {
                id6d = _this.groups[group_id].workers[i];
                if (workers[id6d] !== undefined) {
                    delete workers[id6d];
                }
            }
        }
        if (_this.isEmptyObject(workers) === false) {
            _this.groups['0'] = {
                'group_name': 'δ',
                'workers': []
            };
            for (var id6d in workers) {
                _this.groups['0'].workers.push(id6d);
            }
        }
    };
    _53App.prototype.overFlow = function () {
        var _this = this;
        var over_flow = $53.data('over_flow');
        if ($53.data('is_online') == 1 || typeof over_flow['overflow_type'] == 'undefined')
            return;
        switch (over_flow['overflow_type']) {
        case '1':
            var addLinkParams = $53.data('add_link_params');
            if (addLinkParams == null)
                $53.data('add_link_params', '&lnk_overflow=1');
            else
                $53.data('add_link_params', addLinkParams + '&lnk_overflow=1');
            $53.data('zdkf_type', '1');
            $53.data('kflist', 'off');
            var kf = over_flow['overflow_value'];
            $53.data('kf', kf);
            if (kf == '') {
                $53.data('is_online', _this.kfOfOnline);
                return;
            }
            kf = kf.split(',');
            for (var i in kf) {
                if (_this.isOfWorkerOnline(kf[i], 'worker_id')) {
                    $53.data('is_online', '1');
                    return;
                }
            }
            $53.data('is_online', '0');
            break;
        case '2':
            $53.data('zdkf_type', '1');
            $53.data('kflist', 'off');
            var scheduleIds = over_flow['overflow_value'];
            var ofSchedule = $53.data('over_flow_schedule');
            var kf = '';
            for (var i in ofSchedule) {
                if (typeof _this.workers[i] != 'undefined') {
                    var workInfo = _this.workers[i];
                    kf += workInfo['worker_id'] + ',';
                }
            }
            $53.data('kf', kf);
            if (scheduleIds == '' && kf == '') {
                $53.data('is_online', '0');
                return;
            }
            for (var i in ofSchedule) {
                if (_this.isOfWorkerOnline(i)) {
                    $53.data('is_online', '1');
                    return;
                }
            }
            $53.data('is_online', '0');
            break;
        case '3':
            var addLinkParams = $53.data('add_link_params');
            if (addLinkParams == null)
                $53.data('add_link_params', '&lnk_overflow=1');
            else
                $53.data('add_link_params', addLinkParams + '&lnk_overflow=1');
            $53.data('zdkf_type', '3');
            $53.data('kflist', 'off');
            var kf = over_flow['overflow_value'];
            $53.data('kf', kf);
            if (kf == '') {
                $53.data('is_online', _this.kfOfOnline);
                return;
            }
            kf = kf.split(',');
            for (var i in kf) {
                if (_this.isOfGroupOnline(kf[i])) {
                    $53.data('is_online', '1');
                    return;
                }
            }
            $53.data('is_online', '0');
            break;
        }
    };
    _53App.prototype.checkAreaShunt = function () {
        var _this = this;
        var areaShunt = $53.data('area_shunt');
        var areaKf = [];
        var kfOnline = 0;
        var areaGroup = [];
        var groupOnline = 0;
        var areaSchedule = [];
        var scheduleOnline = 0;
        var areas = [

        ];
        var ipAddr = '';
        for (var i in areas) {
            if (_this.ipStr.indexOf(areas[i]) >= 0) {
                ipAddr = _this.ipStr;
                break;
            }
        }
        for (var i in areaShunt) {
            if (areaShunt[i]['kf_type'] == '1' && (ipAddr.indexOf(areaShunt[i]['area']) >= 0 || _this.ipContinent.indexOf(areaShunt[i]['area']) >= 0)) {
                areaKf.push(areaShunt[i]['kf']);
                if (kfOnline == 0 && _this.isWorkerOnline(areaShunt[i]['kf'], 'worker_id')) {
                    kfOnline = 1;
                }
            }
            if (areaShunt[i]['kf_type'] == '2' && (ipAddr.indexOf(areaShunt[i]['area']) >= 0 || _this.ipContinent.indexOf(areaShunt[i]['area']) >= 0)) {
                areaGroup.push(areaShunt[i]['kf']);
                if (groupOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])) {
                    groupOnline = 1;
                }
            }
            if (areaShunt[i]['kf_type'] == '4') {
                areaSchedule.push(areaShunt[i]['kf']);
                if (scheduleOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])) {
                    scheduleOnline = 1;
                }
            }
        }
        if (kfOnline === 1) {
            $53.data('zdkf_type', '1');
            $53.data('kf', areaKf.join(','));
            $53.data('is_online', '1');
            return;
        }
        if (groupOnline === 1) {
            $53.data('zdkf_type', '3');
            $53.data('kf', areaGroup.join(','));
            $53.data('is_online', '1');
            return;
        }
        if (scheduleOnline === 1) {
            $53.data('zdkf_type', '3');
            $53.data('kf', areaSchedule.join(','));
            $53.data('is_online', '1');
            return;
        }
        if (areaKf.length > 0) {
            $53.data('zdkf_type', '1');
            $53.data('kf', areaKf.join(','));
            $53.data('is_online', '0');
            return;
        }
        if (areaGroup.length > 0) {
            $53.data('zdkf_type', '3');
            $53.data('kf', areaGroup.join(','));
            $53.data('is_online', '0');
            return;
        }
        if (areaSchedule.length > 0) {
            $53.data('zdkf_type', '3');
            $53.data('kf', areaSchedule.join(','));
            $53.data('is_online', '0');
            return;
        }
    };
    _53App.prototype.checkNewAreaShunt = function () {
        var _this = this;
        var areaShunt = $53.data('area_shunt');
        var areaKf = [];
        var kfOnline = 0;
        var areaGroup = [];
        var groupOnline = 0;
        var areaSchedule = [];
        var scheduleOnline = 0;
        var areas = [

        ];
        var ipAddr = '';
        for (var i in areas) {
            if (_this.ipStr.indexOf(areas[i]) >= 0) {
                ipAddr = _this.ipStr;
                break;
            }
        }
        for (var i in areaShunt) {
            if (areaShunt[i]['kf_type'] == '1' && (ipAddr.indexOf(areaShunt[i]['area']) >= 0 || _this.ipContinent.indexOf(areaShunt[i]['area']) >= 0)) {
                areaKf.push(areaShunt[i]['kf']);
                if (kfOnline == 0 && _this.isWorkerOnline(areaShunt[i]['kf'], 'worker_id')) {
                    kfOnline = 1;
                }
            }
            if (areaShunt[i]['kf_type'] == '2' && (ipAddr.indexOf(areaShunt[i]['area']) >= 0 || _this.ipContinent.indexOf(areaShunt[i]['area']) >= 0)) {
                areaGroup.push(areaShunt[i]['kf']);
                if (groupOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])) {
                    groupOnline = 1;
                }
            }
        }
        if (kfOnline === 1 || groupOnline === 1) {
            for (var i in areaGroup) {
                areaKf = _this.getGroupsWorkerid(areaGroup[i], areaKf);
            }
            $53.data('zdkf_type', '1');
            $53.data('kf', areaKf.join(','));
            $53.data('is_online', '1');
            return;
        }
        if (areaKf.length > 0 || areaGroup.length > 0) {
            for (var i in areaGroup) {
                areaKf = _this.getGroupsWorkerid(areaGroup[i], areaKf);
            }
            $53.data('zdkf_type', '1');
            $53.data('kf', areaKf.join(','));
            $53.data('is_online', '0');
            _this.overFlow();
            return;
        }
        var over_flow = $53.data('over_flow');
        if (typeof over_flow['overflow_type'] == 'undefined') {
            $53.data('zdkf_type', '1');
            $53.data('kf', '');
            $53.data('is_online', '0');
            var addLinkParams = $53.data('add_link_params');
            if (addLinkParams == null)
                $53.data('add_link_params', '&lnk_overflow=2');
            else
                $53.data('add_link_params', addLinkParams + '&lnk_overflow=2');
        }
        _this.overFlow();
    };
    _53App.prototype.checkSourceShunt = function () {
        var _this = this;
        var form_page = hz6d_from_page;
        var shunt_source = $53.data('source_shunt');
        var sourceKf = [];
        var isOnline = 0;
        var domain_host = _this.getDomain(form_page);
        var search = _this.getSearch(domain_host);
        if (search != '') {
            for (var i in shunt_source) {
                if (typeof shunt_source[i]['shunt'] != 'undefined' && shunt_source[i]['shunt'] != null) {
                    var shunt = shunt_source[i].shunt.split(',');
                    for (var j in shunt) {
                        if (shunt[j] == '')
                            continue;
                        if (search.indexOf(shunt[j]) != -1) {
                            if (shunt_source[i]['kf_type'] == 1) {
                                if (isOnline == 0 && _this.isWorkerOnline(shunt_source[i]['kf']))
                                    isOnline = 1;
                                var id6d = shunt_source[i]['kf'];
                                var workInfo = _this.workers[id6d];
                                var kf = workInfo['worker_id'];
                                if (sourceKf.indexOf(kf) == -1)
                                    sourceKf.push(kf);
                            }
                            if (shunt_source[i]['kf_type'] == 2) {
                                if (isOnline == 0 && _this.isGroupOnline(shunt_source[i]['kf']))
                                    isOnline = 1;
                                sourceKf = _this.getGroupsWorkerid(shunt_source[i]['kf'], sourceKf);
                            }
                        }
                    }
                }
            }
        }
        $53.data('zdkf_type', '1');
        $53.data('kf', sourceKf.join(','));
        var over_flow = $53.data('over_flow');
        if (sourceKf.join(',') == '' && typeof over_flow['overflow_type'] == 'undefined') {
            var addLinkParams = $53.data('add_link_params');
            if (addLinkParams == null)
                $53.data('add_link_params', '&lnk_overflow=2');
            else
                $53.data('add_link_params', addLinkParams + '&lnk_overflow=2');
        }
        if (isOnline == 1) {
            $53.data('is_online', '1');
            return;
        } else {
            $53.data('is_online', '0');
            _this.overFlow();
            return;
        }
    };
    _53App.prototype.checkChannelShunt = function () {
        var _this = this;
        var shunt_channel = $53.data('channel_shunt');
        var land_page = decodeURIComponent(hz6d_land_page);
        var channelKf = [];
        var isOnline = 0;
        for (var i in shunt_channel) {
            if (typeof shunt_channel[i]['shunt'] != 'undefined' && shunt_channel[i]['shunt'] != null) {
                var shunt = shunt_channel[i].shunt.split(',');
                for (var j in shunt) {
                    if (shunt[j] == '')
                        continue;
                    if (land_page.indexOf(shunt[j]) != -1) {
                        if (shunt_channel[i]['kf_type'] == 1) {
                            if (isOnline == 0 && _this.isWorkerOnline(shunt_channel[i]['kf']))
                                isOnline = 1;
                            var id6d = shunt_channel[i]['kf'];
                            var workInfo = _this.workers[id6d];
                            var kf = workInfo['worker_id'];
                            if (channelKf.indexOf(kf) == -1)
                                channelKf.push(kf);
                        }
                        if (shunt_channel[i]['kf_type'] == 2) {
                            if (isOnline == 0 && _this.isGroupOnline(shunt_channel[i]['kf']))
                                isOnline = 1;
                            channelKf = _this.getGroupsWorkerid(shunt_channel[i]['kf'], channelKf);
                        }
                    }
                }
            }
        }
        $53.data('zdkf_type', '1');
        $53.data('kf', channelKf.join(','));
        var over_flow = $53.data('over_flow');
        if (channelKf.join(',') == '' && typeof over_flow['overflow_type'] == 'undefined') {
            var addLinkParams = $53.data('add_link_params');
            if (addLinkParams == null)
                $53.data('add_link_params', '&lnk_overflow=2');
            else
                $53.data('add_link_params', addLinkParams + '&lnk_overflow=2');
        }
        if (isOnline == 1) {
            $53.data('is_online', '1');
            return;
        } else {
            $53.data('is_online', '0');
            _this.overFlow();
            return;
        }
    };
    _53App.prototype.checkKf = function () {
        var _this = this;
        if ($53.data('is_online') !== null) {
            return;
        }
        var zdkf_type = $53.data('zdkf_type');
        var kf = $53.data('kf');
        if (kf == '') {
            $53.data('is_online', _this.kfOnline);
            return;
        }
        if (zdkf_type == '1') {
            kf = kf.split(',');
            for (var i in kf) {
                if (_this.isWorkerOnline(kf[i], 'worker_id')) {
                    $53.data('is_online', '1');
                    return;
                }
            }
            $53.data('is_online', '0');
        } else {
            kf = kf.split(',');
            for (var i in kf) {
                if (_this.isGroupOnline(kf[i])) {
                    $53.data('is_online', '1');
                    return;
                }
            }
            $53.data('is_online', '0');
        }
        _this.overFlow();
    };
    _53App.prototype.checkOnline = function () {
        var _this = this;
        var shunt_info = $53.data('shunt_info');
        if (typeof shunt_info['shunt_type'] == 'undefined') {
            shunt_info['shunt_type'] = '5';
        }
        switch (shunt_info['shunt_type']) {
        case '1':
            _this.checkKf();
            break;
        case '2':
            $53.data('area_shunt', shunt_info['shunt_area']);
            _this.checkNewAreaShunt();
            break;
        case '3':
            $53.data('source_shunt', shunt_info['shunt_source']);
            _this.checkSourceShunt();
            break;
        case '4':
            $53.data('channel_shunt', shunt_info['shunt_channel']);
            _this.checkChannelShunt();
            break;
        default:
            _this.checkAreaShunt();
            _this.checkKf();
            break;
        }
    };
    _53App.prototype.isWorkerOnline = function (worker, type) {
        var _this = this;
        if (type == 'worker_id') {
            return _this.workerStates[worker] == '1' ? true : false;
        } else {
            return _this.workers[worker]['state'] == '1' ? true : false;
        }
    };
    _53App.prototype.isGroupOnline = function (groupId) {
        var _this = this;
        var group = _this.groups[groupId];
        if (group == null) {
            return false;
        }
        if (typeof group['state'] !== 'undefined') {
            return group['state'] == '1' ? true : false;
        }
        var workers = group['workers'];
        for (var i in workers) {
            if (_this.isWorkerOnline(workers[i])) {
                _this.groups[groupId]['state'] = '1';
                return true;
            }
        }
        _this.groups[groupId]['state'] = '0';
        return false;
    };
    _53App.prototype.isOfWorkerOnline = function (worker, type) {
        var _this = this;
        if (type == 'worker_id') {
            return _this.ofWorkerStates[worker] == '1' ? true : false;
        } else {
            return _this.ofAllWorkers[worker]['state'] == '1' ? true : false;
        }
    };
    _53App.prototype.isOfGroupOnline = function (groupId) {
        var _this = this;
        var group = _this.ofGroups[groupId];
        if (group == null) {
            return false;
        }
        if (typeof group['state'] !== 'undefined') {
            return group['state'] == '1' ? true : false;
        }
        var workers = group['workers'];
        for (var i in workers) {
            if (_this.isOfWorkerOnline(workers[i])) {
                _this.ofGroups[groupId]['state'] = '1';
                return true;
            }
        }
        _this.ofGroups[groupId]['state'] = '0';
        return false;
    };
    _53App.prototype.getGroupsWorkerid = function (groupId, workerids) {
        var _this = this;
        if (typeof workerids == 'undefined')
            var workerids = [];
        if (typeof _this.groups[groupId] == 'undefined' || _this.groups[groupId] == null) {
            return workerids;
        }
        var id6ds = _this.groups[groupId]['workers'];
        for (var i = id6ds.length - 1; i >= 0; i--) {
            var workInfo = _this.workers[id6ds[i]];
            if (workerids.indexOf(workInfo['worker_id']) == -1)
                workerids.push(workInfo['worker_id']);
        }
        return workerids;
    };
    _53App.prototype.initWorkerStates = function () {
        var _this = this;
        var is_online = 0;
        for (var id6d in _this.workers) {
            is_online = _this.workers[id6d]['state'];
            _this.workerStates[_this.workers[id6d]['worker_id']] = is_online;
            if (is_online == '1')
                _this.kfOnline = '1';
        }
    };
    _53App.prototype.initOfWorkerStates = function () {
        var _this = this;
        var workers = _this.ofAllWorkers;
        var is_online = 0;
        for (var id6d in workers) {
            is_online = workers[id6d]['state'];
            _this.ofWorkerStates[workers[id6d]['worker_id']] = is_online;
            if (is_online == '1')
                _this.kfOfOnline = '1';
        }
    };
    _53App.prototype.getSearch = function (url) {
        var realSearch = new Array('shenma', 'shenma', 'baidu', 'sogou', 'sogou', 'sina', 'yahoo', 'youdao', 'soso', '360', '360', 'google', 'google', 'google', 'baidu', 'baidu', 'baidu', 'baidu', '3721', '3721', 'Yisou', 'sogou', 'sina', 'sina', 'yahoo', 'Tom', 'Tom', 'youdao', 'soso', 'bing', '360', '360', '360', '360');
        var search = new Array('sm.cn', 'm.sm.cn', 'm.baidu.com', 'm.sogou.com', 'wap.sogou.com', '3g.sina.com.cn', 'm.yahoo.com', 'm.youdao.com', 'm.soso.com', 'm.so.com', 'm.haosou.com', 'google.com', 'google.cn', 'googleads.g.doubleclick.net', 'cpro.baidu.com', 'zhidao.baidu.com', 'baidu.com', 'baidu.com', '3721.com', '3721.com', 'yisou.com', 'sogou.com', 'iask.com', 'sina.com', 'yahoo.com', 'search.tom.com', 'search.tom.com', 'youdao.com', 'soso.com', 'cn.bing.com', '360.cn', 'so.com', 'sou.com', 'haosou.com');
        var len = search.length;
        for (var i = 0; i < len; i++) {
            if (url.indexOf(search[i]) != -1) {
                return realSearch[i];
            }
        }
        return '';
    };
    _53App.prototype.getDomain = function (url) {
        var pos = url.indexOf('http://');
        if (pos == 0) {
            var pos1 = url.indexOf('/', 7);
            if (pos1 == -1) {
                return url.substr(7);
            } else {
                var len = pos1 - pos - 7;
                return url.substr(7, len);
            }
        } else {
            var posHttps = url.indexOf('https://');
            if (0 == posHttps) {
                var pos1 = url.indexOf('/', 8);
                if (pos1 == -1) {
                    return url.substr(8);
                } else {
                    var len = pos1 - 8;
                    return url.substr(8, len);
                }
            } else {
                pos = url.indexOf('www.');
                if (pos == 0) {
                    var pos1 = url.indexOf('/');
                    if (pos1 == -1) {
                        return url.substr(0);
                    } else {
                        return url.substr(0, pos1);
                    }
                }
            }
        }
        pos = url.indexOf('/');
        if (pos == -1) {
            return url;
        } else {
            return url.substr(0, pos);
        }
    };
    _53App.prototype.clearCache = function () {
        var _this = this;
        _this.workers = null;
        _this.groups = null;
        _this.workerStates = null;
        $53.data('mobile_icon', null);
        $53.data('mobile_invite', null);
        $53.data('assign_worker', null);
    };
    _53App.prototype.isMobile = function () {
        var regex_match = /(nokia|iphone|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220|ipad|XiaoMi)/i;
        if (navigator.userAgent.match(regex_match)) {
            return true;
        }
        return false;
    };
    _53App.prototype.getApp = function (name) {
        var _this = this;
        return _this.apps[name];
    };
    _53App.prototype.setApp = function (name, app) {
        var _this = this;
        _this.apps[name] = app;
    };
    _53App.prototype.copyObject = function (e) {
        var _this = this;
        if (typeof e != 'object')
            return e;
        if (e == null)
            return e;
        var myNewObj = new Object();
        for (var i in e)
            myNewObj[i] = _this.copyObject(e[i]);
        return myNewObj;
    };
    _53App.prototype.isEmptyObject = function (e) {
        var t;
        for (t in e)
            return !1;
        return !0;
    };
    _53App.prototype.show = function (type) {
        var _this = this;
        _this.getApp(type).show();
    };
    _53App.prototype.hide = function (type) {
        var _this = this;
        _this.getApp(type).hide();
    };
    _53App.prototype.talk = function (type, params) {
        var _this = this;
        _this.getApp(type).talk(params);
    };
    _53App.prototype.setMsgTip = function (type, obj) {
        var _this = this;
        _this.getApp(type).setMsgTip(obj);
    };
    _53App.prototype.getAppObj = function (type, obj) {
        var _this = this;
        return _this.getApp(type).getAppObj(obj);
    };
    function create53APP() {
        if ($53.data('mobile_icon') == null || $53.data('mobile_invite') == null || $53.data('assign_worker') == null) {
            setTimeout(function () {
                create53APP();
            }, 200);
            return;
        }
        window._53App = new _53App();
    }
    if (typeof id_creared_53app == 'undefined') {
        create53APP();
        window.id_creared_53app = 'creared';
    }
}