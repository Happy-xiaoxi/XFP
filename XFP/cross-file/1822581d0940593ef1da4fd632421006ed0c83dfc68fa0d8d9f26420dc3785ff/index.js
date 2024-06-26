import {_convertedFunction} from './_convertedFunction.js'
import {hz6d_html_replace} from './hz6d_html_replace.js'
import {hz6d_is_exist} from './hz6d_is_exist.js'
import {hz6d_is_exists} from './hz6d_is_exists.js'
import {hasdoctype_func} from './hasdoctype_func.js'
import {detectBrowser} from './detectBrowser.js'
import {smoothMove} from './smoothMove.js'
import {setIsinvited} from './setIsinvited.js'
import {set53gidCookie} from './set53gidCookie.js'
import {getHz6dReferer} from './getHz6dReferer.js'
import {hz6d_sendACC} from './hz6d_sendACC.js'
import {_convertedFunction3} from './_convertedFunction3.js'
import {getOpenUrl} from './getOpenUrl.js'
import {show} from './show.js'
import {hide} from './hide.js'
import {talk} from './talk.js'
import {setPosition} from './setPosition.js'
import {createIcon} from './createIcon.js'
import {formatContent} from './formatContent.js'
import {setMsgTip} from './setMsgTip.js'
import {getAppObj} from './getAppObj.js'
import {getEvent} from './getEvent.js'
import {_convertedFunction4} from './_convertedFunction4.js';

var facilitator_id = '';
var local_cookie = 'cookie';
var information_switch = '';
var acc_host = 'www59.eiisys.com';
var companyid = '72155416';
var hz6d_guest_ip = '172.104.82.156';
var ipstr = '%E6%97%A5%E6%9C%AC';
var areastr = '%E4%B8%9C%E4%BA%AC%E9%83%BD%2D%E4%B8%9C%E4%BA%AC';
var ipContinent = '%E4%BA%9A%E6%B4%B2';
var in_timestamp = '1700824254934';
var hz6d_guest_id = '11906596378009';
var hz6d_style_id = '1';
var hz6d_alias_host = 'https://www59.eiisys.com';
var company_site = {};
var mnone = 0;
var hz6d_device = '';
var get_gdt_openid = '1';
var kf_sign = 'DgyNDMTcwMI1NDExOTA2NTk2Mzc4MDA5NzIxNTU0MTY%3D';
var cloud_service = 'www59';
var user_u_cust_id = '';
var user_u_cust_name = '';
var user_u_custom_info = '';
try {
    var local_guest_id = localStorage['53kf_guest_id'];
    if (local_guest_id != '' && local_guest_id != undefined) {
        hz6d_guest_id = local_guest_id;
    } else {
        localStorage['53kf_guest_id'] = hz6d_guest_id;
    }
} catch (e) {
}
var lua_uuid_53kf = '4cf4ce20bafb0a8724213363dff1323b';
var force_kf = '';
try {
    if (hz6d_device == 'android') {
        var android_guest_id = Android.giveInformation(null);
        if (android_guest_id) {
            hz6d_guest_id = android_guest_id;
        } else if (hz6d_guest_id != '0') {
            Android.writeData(hz6d_guest_id.toString());
        }
    }
} catch (e) {
}
in_timestamp = parseInt(in_timestamp / 1000);
var http_pro = document.location.protocol == 'https:' ? 'https://' : 'http://';
var onliner_zdfq = 0;
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (val) {
        var value = this;
        for (var i = 0; i < value.length; i++) {
            if (value[i] == val)
                return i;
        }
        return -1;
    };
}
// _convertedFunction(window);
var hasdoctype = hasdoctype_func();
var browser = detectBrowser();
var w = window, d = document, dd = d.documentElement, db = d.body, head = d.head || d.getElementsByTagName('head')[0] || dd, isStrict = d.compatMode == 'CSS1Compat', m = Math.max, ua = navigator.userAgent, np = navigator.platform, EN = w.encodeURIComponent, DE = w.decodeURIComponent;
    function $53(id) {
        return d.getElementById(id) ? d.getElementById(id) : null;
    }
    $53.version = '1.0.0';
    $53.global = {};
    $53.getKFscript = function () {
        if (typeof $53.global[''] == 'undefined' || $53.global[''] == null) {
            var scripts = document.getElementsByTagName('script'), len = scripts.length, i = 0;
            for (; i < len; i++) {
                if (/kf\.php/img.test(scripts[i].src)) {
                    $53.global[''] = scripts[i];
                    break;
                }
            }
        }
        return $53.global[''];
    };
    $53.ready = function () {
        function run() {
            isReady = true;
            for (var i = 0; i < fn.length; i++)
                fn[i]();
        }
        return function (f) {
            if (d.body) {
                f();
                return;
            }
            if (isReady) {
                f();
                return;
            }
            if (!ie && !wk && d.addEventListener)
                return d.addEventListener('DOMContentLoaded', f, false);
            if (fn.push(f) > 1)
                return;
            if (ie) {
                function _convertedFunction2() {
                    if (!isReady) {
                        try {
                            d.documentElement.doScroll('left');
                            run();
                        } catch (err) {
                            setTimeout(arguments.callee, 0);
                        }
                    }
                }
                _convertedFunction2();
            } else if (wk) {
                var t = setInterval(function () {
                    if (/^(loaded|complete)$/.test(d.readyState))
                        clearInterval(t), run();
                }, 0);
            }
        };
    }();
    $53.forEach = function (enumerable, iterator, context) {
        var i, n, t;
        if (typeof iterator == 'function' && enumerable) {
            n = typeof enumerable.length == 'number' ? enumerable.length : enumerable.byteLength;
            if (typeof n == 'number') {
                if (Object.prototype.toString.call(enumerable) === '[object Function]') {
                    return enumerable;
                }
                for (i = 0; i < n; i++) {
                    t = enumerable[i];
                    t === undefined && (t = enumerable.charAt && enumerable.charAt(i));
                    iterator.call(context || null, t, i, enumerable);
                }
            } else if (typeof enumerable == 'number') {
                for (i = 0; i < enumerable; i++) {
                    iterator.call(context || null, i, i, i);
                }
            } else if (typeof enumerable == 'object') {
                for (i in enumerable) {
                    if (enumerable.hasOwnProperty(i)) {
                        iterator.call(context || null, enumerable[i], i, enumerable);
                    }
                }
            }
        }
        return enumerable;
    };
    $53.type = function () {
        var objectType = {}, nodeType = [
                'HTMLElement',
                'Attribute',
                'Text',
                'Comment',
                'Document',
                'DocumentFragment'
            ], str = 'Array Boolean Date Error Function Number RegExp String', retryType = {
                'object': 1,
                'function': '1'
            }, toString = objectType.toString;
        $53.forEach(str.split(' '), function (name) {
            objectType['[object ' + name + ']'] = name.toLowerCase();
            $53['is' + name] = function (unknow) {
                return $53.type(unknow) == name.toLowerCase();
            };
        });
        return function (unknow) {
            var s = typeof unknow;
            return !retryType[s] ? s : unknow == null ? 'null' : unknow._type_ || objectType[toString.call(unknow)] || nodeType[unknow.nodeType] || (unknow == unknow.window ? 'Window' : '') || 'object';
        };
    }();
    $53.isObject = function (unknow) {
        return typeof unknow === 'function' || typeof unknow === 'object' && unknow != null;
    };
    $53.isPlainObject = function (unknow) {
        var key, hasOwnProperty = Object.prototype.hasOwnProperty;
        if ($53.type(unknow) != 'object') {
            return false;
        }
        if (unknow.constructor && !hasOwnProperty.call(unknow, 'constructor') && !hasOwnProperty.call(unknow.constructor.prototype, 'isPrototypeOf')) {
            return false;
        }
        for (key in unknow) {
        }
        return key === undefined || hasOwnProperty.call(unknow, key);
    };
    $53.kfextend = function (depthClone, object) {
        var second, options, key, src, copy, i = 1, n = arguments.length, result = depthClone || {}, copyIsArray, clone;
        $53.isBoolean(depthClone) && (i = 2) && (result = object || {});
        !$53.isObject(result) && (result = {});
        for (; i < n; i++) {
            options = arguments[i];
            if ($53.isObject(options)) {
                for (key in options) {
                    src = result[key];
                    copy = options[key];
                    if (src === copy) {
                        continue;
                    }
                    if ($53.isBoolean(depthClone) && depthClone && copy && ($53.isPlainObject(copy) || (copyIsArray = $53.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && $53.isArray(src) ? src : [];
                        } else {
                            clone = src && $53.isPlainObject(src) ? src : {};
                        }
                        result[key] = $53.kfextend(depthClone, clone, copy);
                    } else if (copy !== undefined) {
                        result[key] = copy;
                    }
                }
            }
        }
        return result;
    };
    $53.kfextend($53, {
        $: function (id) {
            return d.getElementById(id) ? d.getElementById(id) : null;
        },
        EN: EN,
        DE: DE,
        isStrict: isStrict,
        counter: 1,
        data: function (key, value) {
            if (typeof value == 'undefined') {
                return $53.global[key] === undefined ? null : $53.global[key];
            } else {
                $53.global[key] = value;
            }
        },
        trim: function (text) {
            return text == null ? '' : (text + '').replace(new RegExp('(^[\\s\\t\\xa0\\u3000\\uFEFF]+)|([\\u3000\\xa0\\s\\t\\uFEFF]+$)', 'g'), '');
        },
        getOs: function () {
            var allOs = [
                'iphone',
                'android',
                'macos',
                'linux',
                'win2008',
                'win8',
                'win7',
                'winvista',
                'win98',
                'win2000',
                'win2003',
                'winxp',
                'os_other'
            ];
            var isWin = np == 'Win32' || np == 'Windows' || np == 'Win64';
            if (isWin) {
                var winos = {
                    'win98': '(Win98)|(Windows 98)',
                    'win2000': '(Windows NT 5.0)|(Windows 2000)',
                    'winxp': '(Windows NT 5.1)|(Windows XP)',
                    'win2003': '(Windows NT 5.2)|(Windows 2003)',
                    'win7': '(Windows NT 6.1)|(Windows 7)',
                    'winvista': '(Windows NT 6.0)|(Windows Vista)',
                    'win8': '(Windows NT 6.2)|(Windows 8)',
                    'win2008': '(Windows NT 6.1)|(Windows 2008)'
                };
                for (var i in winos) {
                    if (winos.hasOwnProperty(i) && new RegExp(winos[i], 'i').test(ua))
                        return i;
                }
            }
            var isMac = np == 'Mac68K' || np == 'MacPPC' || np == 'Macintosh' || np == 'MacIntel';
            if (isMac)
                return 'macos';
            if (np == 'X11' && !isWin && !isMac)
                return 'unix';
            if ((np.toLowerCase() + ua.toLowerCase()).indexOf('iphone') > -1)
                return 'iphone';
            if (np.toLowerCase().indexOf('linux') > -1 && ua.toLowerCase().indexOf('android') > -1)
                return 'android';
            if (np.indexOf('Linux') > -1)
                return 'linux';
            return 'os_other';
        },
        isMobile: function () {
            var userAgentInfo = navigator.userAgent;
            var Agents = [
                'Android',
                'iPhone',
                'SymbianOS',
                'Windows Phone',
                'iPad',
                'iPod'
            ];
            var flag = 'n';
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = 'y';
                    break;
                }
            }
            return flag;
        },
        getUrlHost: function (url) {
            if (typeof url == 'undefined' || url == '')
                return '';
            var domain = url.split('/');
            if (domain[2])
                domain = domain[2];
            else
                domain = '';
            return domain;
        },
        getUrlParam: function () {
            var url = location.search;
            var theRequest = new Object();
            if (url.indexOf('?') != -1) {
                var str = url.substr(1);
                strs = str.split('&');
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
                }
            }
            return theRequest;
        },
        getBrowser: function () {
            var browsers = {
                'sogou': 'sogou',
                'maxthon': 'maxthon',
                'opera': 'opera',
                'qq': 'tencent',
                'uc': 'uc',
                '360': '360',
                'firefox': 'firefox',
                'chrome': 'chrome',
                'safari': 'safari',
                'ie10': 'msie 10',
                'ie9': 'msie 9',
                'ie8': 'msie 8',
                'ie7': 'msie 7',
                'ie6': 'msie 6',
                'ie5': 'msie 5'
            };
            for (var i in browsers) {
                if (browsers.hasOwnProperty(i) && new RegExp(browsers[i], 'i').test(ua))
                    return i;
            }
            return 'ua_other';
        },
        getScreen: function () {
            return screen.width + '_' + screen.height;
        },
        setCookie: function (key, value, options) {
            if (!$53.isCookieKey(key)) {
                return;
            }
            options = options || {};
            var expires = options.expires;
            try {
                if ((facilitator_id == '36' || facilitator_id == '24' || local_cookie == 'localStorage') && window.localStorage && window.sessionStorage) {
                    if ('number' == typeof options.expires) {
                        expires = new Date().getTime() + options.expires * 1000;
                        window.localStorage.setItem(key, JSON.stringify({
                            data: value,
                            time: expires
                        }));
                    } else {
                        window.sessionStorage.setItem(key, value);
                    }
                    return;
                }
            } catch (e) {
            }
            if ('number' == typeof options.expires) {
                expires = new Date();
                expires.setTime(expires.getTime() + options.expires * 1000);
            }
            document.cookie = key + '=' + EN(value) + (options.path ? '; path=' + options.path : '') + (expires ? '; expires=' + expires.toUTCString() : '') + ('; domain=' + (options.domain ? options.domain : location.hostname)) + (options.secure ? '; secure' : '');
        },
        getCookie: function (key) {
            try {
                if ((facilitator_id == '36' || facilitator_id == '24' || local_cookie == 'localStorage') && window.localStorage && window.sessionStorage) {
                    if (typeof window.localStorage.getItem(key) == 'string') {
                        var dataObj = JSON.parse(window.localStorage.getItem(key));
                        if (new Date().getTime() - dataObj.time > 0) {
                            return '';
                        } else {
                            return dataObj.data;
                        }
                    }
                    if (typeof window.sessionStorage.getItem(key) == 'string') {
                        return window.sessionStorage.getItem(key);
                    }
                }
            } catch (e) {
            }
            if ($53.isCookieKey(key)) {
                var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)'), result = reg.exec(document.cookie);
                if (result) {
                    var value = result[2] === undefined || result[2] === null ? '' : result[2];
                }
            }
            if ('string' == typeof value) {
                return DE(value);
            }
            return '';
        },
        isCookieKey: function (key) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(key);
        },
        setKfCookie: function (data) {
            var _this = this;
            var url = '//tb.53kf.com/code/ck/';
            var param = new Array();
            for (var i = 0; i < data.length; i++) {
                var ck = data[i];
                for (var j = 0; j < ck.length; j++) {
                    param.push(encodeURIComponent(ck[j]));
                }
            }
            var param_str = param.join('/');
            url += param_str;
            var id = 'kf_script_' + _this.counter;
            _this.createScript(id, url);
            _this.counter++;
        },
        getWH: function () {
            return {
                W: (isStrict ? dd : d.body).clientWidth,
                H: (isStrict ? dd : d.body).clientHeight
            };
        },
        getSWH: function () {
            return {
                W: screen.width,
                H: screen.height
            };
        },
        getS: function () {
            return {
                L: m(dd.scrollLeft, d.body.scrollLeft),
                T: m(dd.scrollTop, d.body.scrollTop)
            };
        },
        htmlDecode: function (text) {
            return text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&douhao/g, ',').replace(/&jinghao/g, '#');
        },
        creElm: function (o, t, a, loc) {
            loc = loc || 0;
            if (companyid === '72202088')
                loc = 1;
            var b = d.createElement(t || 'div'), c = a || d.body || dd;
            for (var p in o) {
                if (!o.hasOwnProperty(p))
                    continue;
                p == 'style' ? b[p].cssText = o[p] : b[p] = o[p];
                if (p == 'id' && $53(o[p]))
                    $53(o[p]).parentNode.removeChild($53(o[p]));
            }
            if (!loc)
                return c.insertBefore(b, c.firstChild);
            else
                return $53.insertAfter(b, c.lastChild);
        },
        insertAfter: function (newEl, targetEl) {
            var parentEl = targetEl.parentNode;
            if (parentEl.lastChild == targetEl) {
                return parentEl.appendChild(newEl);
            } else {
                return parentEl.insertBefore(newEl, targetEl.nextSibling);
            }
        },
        createScript: function (id, url) {
            $53.creElm({
                'id': id == '' ? 'hz6d_script_' + Math.random() : id,
                'src': url,
                'charset': 'utf-8'
            }, 'script', head);
        },
        before: function (html, elem) {
            var frag = d.createDocumentFragment(), div = d.createElement('div');
            div.innerHTML = html;
            frag.appendChild(div);
            return (elem.parentNode || d.body || dd).insertBefore(div.firstChild.cloneNode(true), elem);
            frag = null;
        },
        after: function (html, elem) {
            var frag = d.createDocumentFragment(), div = d.createElement('div');
            div.innerHTML = html;
            frag.appendChild(div);
            return $53.insertAfter(div.firstChild.cloneNode(true), elem);
            frag = null;
        },
        insertFixed: function (html) {
            $53.ready(function () {
                var script = $53.getKFscript(), elem = null;
                if (script.parentNode == head)
                    elem = $53.before(html, d.body.firstChild);
                else
                    elem = $53.after(html, script);
            });
        },
        getTimeTo24: function () {
            var d1 = new Date(), d2 = new Date();
            d1.setDate(d1.getDate() + 1);
            d1.setHours(0);
            d1.setMinutes(0);
            d1.setSeconds(0);
            return (d1.getTime() - d2.getTime()) / 1000;
        },
        json2str: function (json, code) {
            var arr = [];
            var encode = code == 'urlencode' ? $53.EN : function (data) {
                return data;
            };
            for (var i in json) {
                if (json.hasOwnProperty(i)) {
                    arr.push(i + '=' + encode(json[i]));
                }
            }
            return arr.join('&');
        },
        addEvent: function (obj, type, fn) {
            if (obj.attachEvent) {
                obj['e' + type + fn] = fn;
                obj[type + fn] = function () {
                    obj['e' + type + fn](window.event);
                };
                obj.attachEvent('on' + type, obj[type + fn]);
            } else {
                obj.addEventListener(type, fn, false);
            }
        },
        removeEvent: function (obj, type, fn) {
            if (obj.detachEvent) {
                obj.detachEvent('on' + type, obj[type + fn]);
                obj[type + fn] = null;
            } else {
                obj.removeEventListener(type, fn, false);
            }
        },
        callBackPhone: function (data) {
            var data_json = data;
            if (data_json.code == 0) {
                location.href = 'tel:' + data_json.msg;
            } else {
                alert('ͷæ');
            }
        }
    });
    $53.kfextend($53, {
        $: function (id) {
            return d.getElementById(id) ? d.getElementById(id) : null;
        },
        EN: EN,
        DE: DE,
        isStrict: isStrict,
        online: 'false',
        terminal: 'pc',
        openurl: '',
        workers: [],
        groups: [],
        groupIds: [],
        popParam: '',
        apiArr: [],
        uuid: '',
        host: '',
        sign: '',
        callBackArr: {},
        isTalk: '',
        talkApiArr: {},
        isOnload: '',
        createApi: function () {
            var api = new _53API(this.online, this.terminal, this.openurl, this.workers, this.groups, this.groupIds);
            this.apiArr.push(api);
            return api;
        },
        setOnline: function (online) {
            this.online = online;
        },
        setUrl: function (url) {
            this.openurl = url;
        },
        setTerminal: function (terminal) {
            if (terminal == 'mobile') {
                this.terminal = 'mobile';
            }
        },
        apiOnload: function (terminal) {
            this.isOnload = terminal;
            if (this.talkApiArr.type != undefined) {
                var client_api = $53.createApi();
                client_api.openClinet(this.talkApiArr.type, this.talkApiArr.group_id, this.talkApiArr.worker_id, this.talkApiArr.id6d);
                this.talkApiArr = {};
            }
        },
        setIsTalk: function (isTalk) {
            this.isTalk = isTalk;
            $53.data('is_talk', isTalk);
            try {
                if (typeof handle_is_talk == 'function')
                    handle_is_talk();
            } catch (e) {
            }
        },
        setWorkers: function (workers) {
            this.workers = workers;
        },
        setGroups: function (groups) {
            this.groups = groups;
            for (var i = 0; i < groups.length; i++) {
                this.groupIds[i] = groups[i].group_id;
            }
        },
        getPopParam: function () {
            var re = this.popParam;
            this.popParam = '';
            return re;
        },
        setPopParam: function (param) {
            this.popParam = param;
        },
        callMsg: function () {
            if (typeof this.callBackArr['callMsg'] == 'function') {
                this.callBackArr['callMsg']();
                return;
            }
            ;
            for (var i = 0; i < this.apiArr.length; i++) {
                this.apiArr[i].callMsg();
            }
        },
        fkCallMsg: function (msg) {
            if (typeof this.callBackArr['fkCallMsg'] == 'function') {
                this.callBackArr['fkCallMsg']();
                return;
            }
            ;
            for (var i = 0; i < this.apiArr.length; i++) {
                this.apiArr[i].fkCallMsg(msg);
            }
        },
        callBackFun: function (func_name) {
            var func_names = [
                'miniShow',
                'miniHide'
            ];
            if (func_names.indexOf(func_name) < 0) {
                return;
            }
            if (typeof this.callBackArr[func_name] == 'function') {
                this.callBackArr[func_name]();
                return;
            }
            for (var i = 0; i < this.apiArr.length; i++) {
                this.apiArr[i][func_name]();
            }
        },
        setUuid: function (uuid) {
            this.uuid = uuid;
        },
        getUuid: function () {
            return this.uuid;
        },
        setHost: function (host) {
            this.host = host;
        },
        setSign: function (sign) {
            this.sign = sign;
            this.initApi();
        },
        sendData: function (type, data) {
            var _this = this;
            var id = 'kf_script_' + _this.counter;
            var url = '//' + _this.host + '/kfapi.php?company_id=' + companyid + '&id=' + encodeURIComponent(_this.uuid) + '&type=' + encodeURIComponent(type) + '&data=' + encodeURIComponent(data) + '&sign=' + encodeURIComponent(_this.sign);
            _this.createScript(id, url);
            _this.counter++;
        },
        sendKfapiInit: function (sendData) {
            var _this = this;
            var id = 'kf_script_' + _this.counter;
            var url = '//' + _this.host + '/client/kfapi_init_info.php?company_id=' + companyid + '&id=' + encodeURIComponent(_this.uuid) + '&sign=' + encodeURIComponent(_this.sign) + sendData;
            _this.createScript(id, url);
            _this.counter++;
        },
        sendLword: function (type, msg, name, email, qq, phone, company, address, notes) {
            var _this = this;
            var id = 'kf_script_' + _this.counter;
            var talk_page_tmp = window.location.href;
            if (talk_page_tmp.indexOf('hz6d{') != -1) {
                talk_page_tmp = talk_page_tmp.substring(0, talk_page_tmp.indexOf('hz6d{'));
            }
            var sendData = '&msg=' + msg + '&ly_name=' + name + '&ly_email=' + email + '&ly_qq=' + qq + '&ly_phone=' + phone + '&ly_company=' + company + '&ly_addr=' + address + '&notes=' + notes + '&ly_first=true&ly_mode=3&ly_object=';
            var url = '//' + _this.host + '/lword_sdk.php?company_id=' + companyid + '&guest_id=' + hz6d_guest_id + '&style=' + hz6d_style_id + '&referer1=' + encodeURIComponent(hz6d_from_page) + '&referer=' + encodeURIComponent(talk_page_tmp) + '&land_page=' + encodeURIComponent(hz6d_land_page) + '&uid=' + encodeURIComponent(_this.uuid) + sendData;
            _this.createScript(id, url);
            _this.counter++;
        },
        callPhone: function (call, id6d, worker_id) {
            var _this = this;
            var id = 'kf_script_' + _this.counter;
            var talk_page_tmp = window.location.href;
            if (talk_page_tmp.indexOf('hz6d{') != -1) {
                talk_page_tmp = talk_page_tmp.substring(0, talk_page_tmp.indexOf('hz6d{'));
            }
            var sendData = '&call=' + call + '&id6d=' + id6d;
            if (worker_id != undefined)
                sendData += '&worker_id=' + worker_id;
            var url = '//' + _this.host + '/impl/rpc_callback_phone.php?from=api&company_id=' + companyid + '&guest_id=' + hz6d_guest_id + '&style=' + hz6d_style_id + '&from_page=' + encodeURIComponent(hz6d_from_page) + '&talk_page=' + encodeURIComponent(talk_page_tmp) + '&land_page=' + encodeURIComponent(hz6d_land_page) + sendData;
            _this.createScript(id, url);
            _this.counter++;
        },
        callBack: function (data) {
            console.log(data);
        },
        comeInfo: function (logo, title, content, curl, sendtype) {
            var _this = this;
            var id = 'kf_script_' + _this.counter;
            var sendData = '&logo=' + encodeURIComponent(logo) + '&title=' + encodeURIComponent(title) + '&content=' + encodeURIComponent(content) + '&curl=' + encodeURIComponent(curl) + '&sendtype=' + encodeURIComponent(sendtype);
            var url = '//' + _this.host + '/comeinfo.php?company_id=' + companyid + '&id=' + encodeURIComponent(_this.uuid) + '&sign=' + encodeURIComponent(_this.sign) + sendData;
            _this.createScript(id, url);
            _this.counter++;
            $53.setCookie('uid', _this.uuid, { 'domain': _this.host });
        },
        addCustMsg: function (msg, callback) {
            var _this = this;
            var id = 'kf_script_' + _this.counter;
            var sendData = '&msg=' + encodeURIComponent(msg) + '&callback=' + encodeURIComponent(callback);
            var url = '//' + _this.host + '/client/add_cust_msg.php?company_id=' + companyid + '&id=' + encodeURIComponent(_this.uuid) + '&sign=' + encodeURIComponent(_this.sign) + sendData;
            _this.createScript(id, url);
            _this.counter++;
        },
        callPriPhone: function (worker_id, callback) {
            var _this = this;
            var id = 'kf_script_' + _this.counter;
            if (typeof callback == 'undefined' || callback == '') {
                var callback = '$53.callBackPhone';
            }
            if (typeof worker_id == 'undefined' || worker_id == '') {
                var zdkf_type = $53.data('zdkf_type');
                var worker_id = $53.data('kf');
            } else {
                var zdkf_type = 1;
            }
            var talk_page_tmp = window.location.href;
            if (talk_page_tmp.indexOf('hz6d{') != -1) {
                talk_page_tmp = talk_page_tmp.substring(0, talk_page_tmp.indexOf('hz6d{'));
            }
            var sendData = '&callback=' + encodeURIComponent(callback);
            var url = '//' + _this.host + '/client/getPrivacyPhone.php?from=api&company_id=' + companyid + '&id6d=0&talk_id=0&zdkf_type=' + zdkf_type + '&worker_id=' + worker_id + '&guest_id=' + hz6d_guest_id + '&style=' + hz6d_style_id + '&from_page=' + encodeURIComponent(hz6d_from_page) + '&talk_page=' + encodeURIComponent(talk_page_tmp) + '&land_page=' + encodeURIComponent(hz6d_land_page) + sendData;
            _this.createScript(id, url);
            _this.counter++;
        },
        initApi: function () {
            var _this = this;
            try {
                if (typeof _$53 == 'object') {
                    for (var i = 0; i < _$53.length; i++) {
                        _this.handleInitApi(_$53[i]);
                    }
                }
            } catch (e) {
            }
        },
        handleInitApi: function (arr) {
            var _this = this;
            var cmds = [
                '_setPageTag',
                '_setComeInfo',
                '_callBackFun',
                '_setGuestInfo',
                '_kfclient'
            ];
            try {
                var cmd = arr[0];
                if (cmds.indexOf(arr[0]) < 0) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            switch (cmd) {
            case '_setPageTag':
                var prod_id = typeof arr[1] == 'undefined' ? '' : arr[1];
                var prod_name = typeof arr[2] == 'undefined' ? '' : arr[2];
                var sendData = '&cmd=' + encodeURIComponent(cmd) + '&prod_id=' + encodeURIComponent(prod_id) + '&prod_name=' + encodeURIComponent(prod_name);
                _this.sendKfapiInit(sendData);
                break;
            case '_setComeInfo':
                var title = typeof arr[1] == 'undefined' ? '' : $53.trim(arr[1]);
                var logo = typeof arr[2] == 'undefined' ? '' : $53.trim(arr[2]);
                var content = typeof arr[3] == 'undefined' ? '' : $53.trim(arr[3]);
                var curl = typeof arr[4] == 'undefined' ? '' : $53.trim(arr[4]);
                var sendtype = typeof arr[5] == 'undefined' ? '' : $53.trim(arr[5]);
                _this.comeInfo(logo, title, content, curl, sendtype);
                break;
            case '_setGuestInfo':
                if (typeof arr[1] == 'object') {
                    var data = arr[1];
                    var id = $53.trim(data.id ? data.id : '');
                    var name = $53.trim(data.name ? data.name : '');
                    var email = $53.trim(data.email ? data.email : '');
                    var qq = $53.trim(data.qq ? data.qq : '');
                    var phone = $53.trim(data.phone ? data.phone : '');
                    var company = $53.trim(data.company ? data.company : '');
                    var address = $53.trim(data.address ? data.address : '');
                    var notes = $53.trim(data.notes ? data.notes : '');
                    var crm_fields = $53.trim(data.crm_fields ? data.crm_fields : '');
                    var custom_info = $53.trim(data.custom_info ? data.custom_info : '');
                    if (custom_info != '' && custom_info.length > 40)
                        return _this.reback('601', 'custom_info length cannot exceed 40');
                    var script_id = 'kf_script_guest';
                    var url = hz6d_alias_host + '/kfapi_guest.php?company_id=' + companyid + '&guest_id=' + hz6d_guest_id + '&u_cust_id=' + id + '&u_cust_name=' + name + '&email=' + email + '&qq=' + qq + '&phone=' + phone + '&company=' + company + '&address=' + address + '&notes=' + notes + '&crm_fields=' + crm_fields + '&custom_info=' + custom_info + '&id=' + encodeURIComponent(_this.uuid);
                    $53.createScript(script_id, url);
                    user_u_cust_id = id;
                    user_u_cust_name = name;
                    user_u_custom_info = custom_info;
                    return {
                        code: '201',
                        info: 'success'
                    };
                } else {
                    return {
                        code: '401',
                        info: 'params error'
                    };
                }
                break;
            case '_callBackFun':
                var call_back_cmds = [
                    'callMsg',
                    'miniShow',
                    'miniHide'
                ];
                var data = {};
                var call_back_cmd = typeof arr[1] == 'undefined' ? '' : $53.trim(arr[1]);
                if (call_back_cmd == '' || call_back_cmds.indexOf(call_back_cmd) < 0) {
                    return {
                        code: '401',
                        info: 'params error'
                    };
                }
                if (typeof arr[2] == 'function') {
                    _this.callBackArr[call_back_cmd] = arr[2];
                    return {
                        code: '201',
                        info: 'success'
                    };
                } else {
                    return {
                        code: '401',
                        info: 'params error'
                    };
                }
                break;
            case '_kfclient':
                if (typeof arr[1] == 'object') {
                    var data = arr[1];
                    this.talkApiArr.type = $53.trim(data.type ? data.type : '');
                    this.talkApiArr.group_id = $53.trim(data.group_id ? data.group_id : '');
                    this.talkApiArr.worker_id = $53.trim(data.worker_id ? data.worker_id : '');
                    this.talkApiArr.id6d = $53.trim(data.id6d ? data.id6d : '');
                    if (this.isOnload != '') {
                        var _kfclient_api = $53.createApi();
                        _kfclient_api.openClinet(this.talkApiArr.type, this.talkApiArr.group_id, this.talkApiArr.worker_id, this.talkApiArr.id6d);
                        this.talkApiArr = {};
                    }
                    return {
                        code: '201',
                        info: 'success'
                    };
                } else {
                    return {
                        code: '401',
                        info: 'params error'
                    };
                }
                break;
            default:
                break;
            }
        }
    });
    function _53API(online, terminal, openurl, workers, groups, groupIds) {
        this.online = online, this.terminal = terminal, this.openurl = openurl, this.workers = workers, this.groups = groups, this.groupIds = groupIds, this.paramArr = [
            'cmd',
            'type',
            'group_id',
            'worker_id',
            'msg_callback',
            'mini_show_callbcak',
            'mini_hide_callbcak',
            'mtalk',
            'stat_id',
            'member',
            'id',
            'name',
            'lword',
            'msg',
            'email',
            'qq',
            'wechat',
            'phone',
            'company',
            'address',
            'notes',
            'crm_fields',
            'custom_info',
            'stat',
            'callphone',
            'callpriphone',
            'id6d',
            'call',
            'logo',
            'title',
            'content',
            'curl',
            'sendtype',
            'custmsg',
            'msg_callback_fk'
        ], this.param = {}, this.callMsg = function () {
        }, this.fkCallMsg = function () {
        }, this.miniShow = function () {
        }, this.miniHide = function () {
        }, this.setPopParam = function (param) {
            $53.setPopParam(param);
        }, this.checkGroup = function (group_id) {
            var _this = this;
            var groupIds = group_id.split(',');
            for (var i = 0; i < groupIds.length; i++) {
                if (_this.groupIds.indexOf(groupIds[i]) < 0) {
                    return false;
                }
            }
            return true;
        }, this.push = function (key, value) {
            var _this = this;
            if (_this.paramArr.indexOf(key) < 0) {
                return _this.reback('401', 'error param');
            }
            switch (key) {
            case 'msg_callback':
                if (typeof value == 'function') {
                    _this.callMsg = value;
                } else {
                    return _this.reback('402', 'msg_callback must be a function');
                }
                break;
            case 'msg_callback_fk':
                if (typeof value == 'function') {
                    _this.fkCallMsg = value;
                } else {
                    return _this.reback('402', 'msg_callback_fk must be a function');
                }
                break;
            case 'mini_show_callbcak':
                if (typeof value == 'function') {
                    _this.miniShow = value;
                } else {
                    return _this.reback('402', 'mini_show_callbcak must be a function');
                }
                break;
            case 'mini_hide_callbcak':
                if (typeof value == 'function') {
                    _this.miniHide = value;
                } else {
                    return _this.reback('402', 'mini_hide_callbcak must be a function');
                }
                break;
            default:
                value = $53.trim(value);
                if (value == '') {
                    return _this.reback('403', 'error value');
                }
                if (key == 'group_id' && _this.checkGroup(value) === false) {
                    return _this.reback('404', 'unknown group_id');
                }
                _this.param[key] = value;
                break;
            }
            return _this.reback('201', 'success', false);
        }, this.query = function () {
            var _this = this;
            switch (_this.param.cmd) {
            case 'kfclient':
                if (_this.param.type != 'new' && _this.param.type != 'popup') {
                    return _this.reback('501', 'error type');
                }
                var group_id = $53.trim(_this.param.group_id);
                var worker_id = $53.trim(_this.param.worker_id);
                var id6d = $53.trim(_this.param.id6d);
                if (group_id != '' && (worker_id != '' || id6d != '') || worker_id != '' && id6d != '') {
                    return _this.reback('503', 'worker_id and group_id and id6d can only choose one');
                }
                var zdkf_type = 1;
                var kf = worker_id;
                if (id6d != '') {
                    var workers = $53.data('workers');
                    id6ds = id6d.split(',');
                    kf = '';
                    var tmpid = '';
                    for (var i = 0; i < id6ds.length; i++) {
                        if (typeof workers[id6ds[i]] == 'undefined') {
                            tmpid = id6ds[i];
                        } else {
                            tmpid = workers[id6ds[i]].worker_id;
                        }
                        if (kf != '')
                            tmpid = ',' + tmpid;
                        kf = kf + tmpid;
                    }
                }
                if (group_id != '') {
                    zdkf_type = 3;
                    kf = group_id;
                }
                if (_this.param.type == 'new' || _this.terminal != 'mobile')
                    _this.openkf(_this.param.type, zdkf_type, kf);
                else
                    _this.talk(_this.param.type, zdkf_type, kf);
                return _this.reback('201', 'success');
                break;
            case 'mtalk':
                var group_id = $53.trim(_this.param.group_id);
                var worker_id = $53.trim(_this.param.worker_id);
                var id6d = $53.trim(_this.param.id6d);
                if (_this.terminal != 'mobile') {
                    return _this.reback('301', 'error terminal');
                }
                if (group_id != '' && (worker_id != '' || id6d != '') || worker_id != '' && id6d != '') {
                    return _this.reback('303', 'worker_id and group_id and id6d can only choose one');
                }
                var zdkf_type = 1;
                var kf = worker_id;
                if (id6d != '') {
                    var workers = $53.data('workers');
                    id6ds = id6d.split(',');
                    kf = '';
                    var tmpid = '';
                    for (var i = 0; i < id6ds.length; i++) {
                        if (typeof workers[id6ds[i]] == 'undefined') {
                            tmpid = id6ds[i];
                        } else {
                            tmpid = workers[id6ds[i]].worker_id;
                        }
                        if (kf != '')
                            tmpid = ',' + tmpid;
                        kf = kf + tmpid;
                    }
                }
                if (group_id != '') {
                    zdkf_type = 3;
                    kf = group_id;
                }
                _this.talk(_this.param.type, zdkf_type, kf);
                return _this.reback('201', 'success');
                break;
            case 'member':
                var id = $53.trim(_this.param.id ? _this.param.id : '');
                var name = $53.trim(_this.param.name ? _this.param.name : '');
                var email = $53.trim(_this.param.email ? _this.param.email : '');
                var qq = $53.trim(_this.param.qq ? _this.param.qq : '');
                var phone = $53.trim(_this.param.phone ? _this.param.phone : '');
                var wechat = $53.trim(_this.param.wechat ? _this.param.wechat : '');
                var company = $53.trim(_this.param.company ? _this.param.company : '');
                var address = $53.trim(_this.param.address ? _this.param.address : '');
                var notes = $53.trim(_this.param.notes ? _this.param.notes : '');
                var crm_fields = $53.trim(_this.param.crm_fields ? _this.param.crm_fields : '');
                var custom_info = $53.trim(_this.param.custom_info ? _this.param.custom_info : '');
                if (custom_info != '' && custom_info.length > 40)
                    return _this.reback('601', 'custom_info length cannot exceed 40');
                var script_id = 'kf_script_guest';
                var url = hz6d_alias_host + '/kfapi_guest.php?company_id=' + companyid + '&guest_id=' + hz6d_guest_id + '&u_cust_id=' + id + '&u_cust_name=' + name + '&email=' + email + '&qq=' + qq + '&wechat=' + wechat + '&phone=' + phone + '&company=' + company + '&address=' + address + '&notes=' + notes + '&crm_fields=' + crm_fields + '&custom_info=' + custom_info + '&id=' + encodeURIComponent($53.uuid);
                $53.createScript(script_id, url);
                user_u_cust_id = id;
                user_u_cust_name = name;
                user_u_custom_info = custom_info;
                break;
            case 'status':
                return _this.reback('201', _this.online);
                break;
            case 'grouplist':
                return _this.reback('201', _this.groups);
                break;
            case 'workerlist':
                return _this.reback('201', _this.workers);
                break;
            case 'jzl':
            case 'mxsj':
            case 'xsgl':
                var data = $53.trim(_this.param.stat_id);
                _this.saveData(_this.param.cmd, data);
                break;
            case 'stat':
                var type = $53.trim(_this.param.id);
                var data = $53.trim(_this.param.stat_id);
                _this.saveData(type, data);
            case 'lword':
                var msg = $53.trim(_this.param.msg);
                if (msg == '')
                    return _this.reback('601', 'msg is null');
                var name = $53.trim(_this.param.name ? _this.param.name : '');
                var email = $53.trim(_this.param.email ? _this.param.email : '');
                var qq = $53.trim(_this.param.qq ? _this.param.qq : '');
                var phone = $53.trim(_this.param.phone ? _this.param.phone : '');
                var company = $53.trim(_this.param.company ? _this.param.company : '');
                var address = $53.trim(_this.param.address ? _this.param.address : '');
                var notes = $53.trim(_this.param.notes ? _this.param.notes : '');
                _this.saveLword(_this.param.cmd, msg, name, email, qq, phone, company, address, notes);
                break;
            case 'callphone':
                var id6d = $53.trim(_this.param.id6d ? _this.param.id6d : '');
                var call = $53.trim(_this.param.call ? _this.param.call : '');
                var worker_id = $53.trim(_this.param.worker_id ? _this.param.worker_id : '');
                var reg = /^((0\d{2,3}-?\d{7,8})|(1[3-9]\d{9}))$/;
                if (call != '' && !reg.test(call))
                    return _this.reback('601', 'error call');
                _this.savePhone(call, id6d, worker_id);
                break;
            case 'callpriphone':
                var worker_id = $53.trim(_this.param.worker_id ? _this.param.worker_id : '');
                _this.savePriPhone(worker_id);
                break;
            case 'comeinfo':
                var title = $53.trim(_this.param.title);
                var logo = $53.trim(_this.param.logo);
                var content = $53.trim(_this.param.content);
                var curl = $53.trim(_this.param.curl);
                var sendtype = typeof _this.param.sendtype == 'undefined' ? '0' : $53.trim(_this.param.sendtype);
                _this.saveCinfo(logo, title, content, curl, sendtype);
                break;
            case 'custmsg':
                var msg = $53.trim(_this.param.msg).replace(/<[^>]+>/g, '');
                var type = $53.trim(_this.param.type);
                if (msg == '')
                    return _this.reback('601', 'msg cannot null');
                var callback = '';
                if (type == '1') {
                    if (_this.terminal == 'pc') {
                        callback = 'hz6d_startReautoTimer2(3)';
                    } else {
                        callback = 'change_kf_openurl()';
                    }
                } else if (type == '2') {
                    if (_this.terminal == 'pc') {
                        var iTop = 200;
                        var iLeft = 200;
                        try {
                            iTop = (window.screen.height - 600) / 2;
                            iLeft = (window.screen.width - 800) / 2;
                        } catch (e) {
                        }
                        callback = 'window.open("' + _this.openurl + '","_blank","height=600,width=800,top=' + iTop + ',left=' + iLeft + ',status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no")';
                    } else {
                        callback = 'location.href = "' + _this.openurl + '"';
                    }
                }
                _this.saveCustMsg(msg, callback);
                break;
            default:
                return _this.reback('601', 'error cmd');
                break;
            }
        }, this.talk = function (type, zdkf_type, kf) {
            var _this = this;
            var param = kf != '' ? '&zdkf_type=' + zdkf_type + '&kf=' + kf : '';
            if (_this.terminal == 'mobile') {
                _this.setPopParam(param);
                change_kf_openurl(param);
            }
        }, this.openkf = function (type, zdkf_type, kf) {
            var _this = this;
            var param = kf != '' ? '&zdkf_type=' + zdkf_type + '&kf=' + kf : '';
            var top = 200;
            var left = 200;
            try {
                top = (window.screen.height - 600) / 2;
                left = (window.screen.width - 800) / 2;
            } catch (e) {
            }
            if (type == 'new') {
                var url = _this.openurl + param;
                if (_this.terminal == 'pc') {
                    window.open(url, '_blank', 'height=600,width=800,top=' + top + ',left=' + left + ',status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no');
                } else {
                    location.href = url;
                }
            } else {
                if (_this.terminal == 'pc') {
                    _this.setPopParam(param);
                    hz6d_startReautoTimer2(3);
                } else {
                    show_mobile_chat();
                }
            }
        }, this.openClinet = function (type, group_id, worker_id, id6d) {
            var _this = this;
            if (group_id != '' && (worker_id != '' || id6d != '') || worker_id != '' && id6d != '') {
                console.log('worker_id and group_id and id6d can only choose one');
            }
            var zdkf_type = 1;
            var kf = worker_id;
            if (id6d != '') {
                var workers = $53.data('workers');
                id6ds = id6d.split(',');
                kf = '';
                var tmpid = '';
                for (var i = 0; i < id6ds.length; i++) {
                    if (typeof workers[id6ds[i]] == 'undefined') {
                        tmpid = id6ds[i];
                    } else {
                        tmpid = workers[id6ds[i]].worker_id;
                    }
                    if (kf != '')
                        tmpid = ',' + tmpid;
                    kf = kf + tmpid;
                }
            }
            if (group_id != '') {
                zdkf_type = 3;
                kf = group_id;
            }
            if (type == 'new' || _this.terminal != 'mobile')
                _this.openkf(type, zdkf_type, kf);
            else
                _this.talk(type, zdkf_type, kf);
        };
        this.saveData = function (type, data) {
            $53.sendData(type, data);
        }, this.saveLword = function (type, msg, name, email, qq, phone, company, address, notes) {
            $53.sendLword(type, msg, name, email, qq, phone, company, address, notes);
        }, this.savePhone = function (call, id6d, worker_id) {
            $53.callPhone(call, id6d, worker_id);
        }, this.savePriPhone = function (worker_id) {
            $53.callPriPhone(worker_id);
        }, this.saveCinfo = function (logo, title, content, curl, sendtype) {
            $53.comeInfo(logo, title, content, curl, sendtype);
        }, this.saveCustMsg = function (msg, callback) {
            $53.addCustMsg(msg, callback);
        };
        this.openUrl = function (url, resize) {
            window.open(url, '_blank', 'height=470,width=702,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=' + resize + ',scrollbars=no,location=no,titlebar=no');
        }, this.reback = function (code, info, clear) {
            var _this = this;
            var data = {};
            if (code == '201') {
                data = {
                    code: code,
                    cmd: _this.param.cmd,
                    info: info
                };
            } else {
                data = {
                    code: code,
                    info: info
                };
            }
            if (clear !== false) {
                _this.param = {};
            }
            return data;
        };
    }
    var _open = window.open;
    window.open = function (sURL, sName, sFeatures, bReplace) {
        if (sURL == undefined) {
            sURL = '';
        }
        if (sName == undefined) {
            sName = '';
        }
        if (sFeatures == undefined) {
            sFeatures = '';
        }
        if (bReplace == undefined) {
            bReplace = false;
        }
        if (/webCompany.php|webClientMin.php/.test(sURL)) {
            sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
        } else if ('$zdyurl' != '') {
            var _zdyurl = '$zdyurl';
            if (sURL.indexOf(_zdyurl) > -1) {
                sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
            }
        }
        try {
            sURL = sURL.replace('&referer={hz6d_referer}', hz6d_referer).replace('{hz6d_keyword}', hz6d_from_page_new + '&tfrom=1');
        } catch (e) {
        }
        var win = _open(sURL, sName, sFeatures, bReplace);
        return win;
    };
    window.$53 = $53;
if (!$53.getCookie('53gid2')) {
    set53gidCookie('53gid2', hz6d_guest_id, 10 * 365 * 24 * 3600);
} else if ($53.getCookie('53gid2')) {
    var hz6d_53gid2 = $53.getCookie('53gid2');
    if (hz6d_guest_id == hz6d_53gid2) {
        $53.setCookie('visitor_type', 'old');
        hz6d_guest_id = $53.getCookie('53gid2');
    } else {
        set53gidCookie('53gid2', hz6d_guest_id, 10 * 365 * 24 * 3600);
    }
}
if (!$53.getCookie('53gid0')) {
    set53gidCookie('53gid0', hz6d_guest_id, $53.getTimeTo24());
} else if ($53.getCookie('53gid2')) {
    var hz6d_53gid0 = $53.getCookie('53gid0');
    if (hz6d_guest_id == hz6d_53gid0) {
        $53.data('is_uv', 0);
    } else {
        set53gidCookie('53gid0', hz6d_guest_id, $53.getTimeTo24());
    }
}
if (!$53.getCookie('53gid1')) {
    set53gidCookie('53gid1', hz6d_guest_id, 86400);
} else if ($53.getCookie('53gid2')) {
    var hz6d_53gid1 = $53.getCookie('53gid1');
    if (hz6d_guest_id == hz6d_53gid1) {
        $53.data('is_rv', 0);
    } else {
        set53gidCookie('53gid1', hz6d_guest_id, 86400);
    }
}
var is_revisit = 0;
if (!$53.getCookie('53revisit')) {
    $53.setCookie('53revisit', new Date().getTime(), {
        expires: 10 * 365 * 24 * 3600,
        'path': '/'
    });
} else {
    if (new Date().getTime() - $53.getCookie('53revisit') > 86400000) {
        is_revisit = 1;
    }
}
var hz6d_from_page = $53.getCookie('53kf_' + companyid + '_keyword');
var hz6d_now_host = window.location.host;
if (hz6d_from_page == '') {
    hz6d_from_page = getHz6dReferer();
    if (hz6d_now_host != '')
        $53.setCookie('53kf_' + companyid + '_from_host', hz6d_now_host, { 'path': '/' });
} else {
    var hz6d_from_page_referer = getHz6dReferer();
    var hz6d_from_page_host = $53.getUrlHost(hz6d_from_page_referer);
    if (hz6d_from_page_host != '' && hz6d_now_host != '' && hz6d_now_host != hz6d_from_page_host) {
        var hz6d_now_hosts_string = $53.getCookie('53kf_' + companyid + '_from_host');
        var hz6d_now_hosts = hz6d_now_hosts_string.split(',');
        if (hz6d_now_hosts.length > 0) {
            if (hz6d_now_hosts.indexOf(hz6d_from_page_host) == -1) {
                hz6d_from_page = hz6d_from_page_referer;
            }
            if (hz6d_now_hosts.indexOf(hz6d_now_host) == -1) {
                hz6d_now_hosts_string += ',' + hz6d_now_host;
                $53.setCookie('53kf_' + companyid + '_from_host', hz6d_now_hosts_string, { 'path': '/' });
            }
        } else {
            hz6d_from_page = hz6d_from_page_referer;
            $53.setCookie('53kf_' + companyid + '_from_host', hz6d_now_host, { 'path': '/' });
        }
    }
}
$53.data('page_referer', hz6d_from_page);
var uuid_53kf = $53.getCookie('uuid_53kf_' + companyid) != 'null' && $53.getCookie('uuid_53kf_' + companyid) != '' ? $53.getCookie('uuid_53kf_' + companyid) : lua_uuid_53kf;
$53.setCookie('53kf_' + companyid + '_keyword', hz6d_from_page, { 'path': '/' });
$53.setCookie('uuid_53kf_' + companyid, uuid_53kf, { 'path': '/' });
var hz6d_from_page_new = '&keyword=' + $53.EN(hz6d_from_page);
var acc_browser = $53.getBrowser();
var acc_os = $53.getOs();
var hz6d_land_page = $53.getCookie('53kf_' + companyid + '_land_page');
eval("var kf_" + companyid + "_land_page_ok=$53.getCookie('kf_" + companyid + "_land_page_ok');");
try {
    var in_site = false;
    var talk_page_now = window.location.href;
    if (talk_page_now.indexOf('hz6d{') != -1) {
        talk_page_now = talk_page_now.substring(0, talk_page_now.indexOf('hz6d{'));
    }
    var talk_page = window.encodeURIComponent(talk_page_now);
    if (!eval('kf_' + companyid + '_land_page_ok')) {
        hz6d_land_page = talk_page;
    }
    var is_null = true;
    if (talk_page_now.indexOf('53kf.com') == -1) {
        for (var p in company_site) {
            if (company_site.hasOwnProperty(p)) {
                is_null = false;
                if (talk_page_now.indexOf(company_site[p].replace(/\\\//g, '/')) != -1) {
                    in_site = true;
                    break;
                }
            }
        }
        if (is_null)
            in_site = true;
    } else {
        in_site = true;
    }
} catch (e) {
    in_site = true;
}
if (window.location.href.substr(0, 4) == 'file')
    in_site = false;
$53.setCookie('53kf_' + companyid + '_land_page', hz6d_land_page, { 'path': '/' });
$53.setCookie('kf_' + companyid + '_land_page_ok', 1, { 'path': '/' });
var acc_first_time = new Date().getTime();
var acc_get_force = false;
if (in_site)
    hz6d_sendACC($53);
if (companyid == 72757101 || companyid == 72000450 || companyid == 72000079)
    $53.createScript('hz6d_referer_debug', hz6d_alias_host + '/wnn_debug.php?cmd=_referer&company_id=' + companyid + '&hz6d_guest_id=' + hz6d_guest_id + '&referer=' + window.encodeURIComponent(document.referrer));
$53.data('workers', {
    '10238682': {
        'worker_id': 'liulili@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10234849': {
        'worker_id': '1986787350@qq.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10235094': {
        'worker_id': '80042789@qq.com',
        'state': 0,
        'bname': 'к-ѩʦ'
    },
    '10291474': {
        'worker_id': '764551789@qq.com-deleted',
        'state': 0,
        'bname': 'ʦ'
    },
    '10234846': {
        'worker_id': '70271111@qq.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10233774': {
        'worker_id': '1124632199@qq.com-deleted',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10233732': {
        'worker_id': '1528259277@qq.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10230211': {
        'worker_id': 'zhangye@oldboyedu.com',
        'state': 0,
        'bname': 'к\u0865γ̹'
    },
    '10302103': {
        'worker_id': 'huangyanze@oldboyedu.com',
        'state': 0,
        'bname': 'null'
    },
    '10283355': {
        'worker_id': '1184407951@qq.com',
        'state': 0,
        'bname': 'ʦ'
    },
    '10251217': {
        'worker_id': 'wulinzhuo@oldboyedu.com',
        'state': 0,
        'bname': ''
    },
    '10235566': {
        'worker_id': 'wusanjiang@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10233810': {
        'worker_id': '2398228703@qq.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10246846': {
        'worker_id': 'jinyan@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10237202': {
        'worker_id': 'zhanghuanyu@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10238687': {
        'worker_id': 'zhoujunyan@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10238708': {
        'worker_id': 'baodandan@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10238779': {
        'worker_id': 'yangxueyuan@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10233738': {
        'worker_id': '1602424923@qq.com',
        'state': 1,
        'bname': 'к-Сʦ'
    }
});
$53.data('groups', {
    '19740116': {
        'group_name': '',
        'workers': [
            '10233732',
            '10233738',
            '10233810',
            '10283355',
            '10238682',
            '10234849',
            '10233774'
        ]
    }
});
$53.data('shunt_info', { 'shunt_type': '1' });
$53.data('area_shunt', {});
$53.data('source_shunt', {});
$53.data('channel_shunt', {});
$53.data('over_flow', {});
$53.data('over_flow_schedule', {});
$53.data('of_all_worker', {
    '10238682': {
        'worker_id': 'liulili@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10234849': {
        'worker_id': '1986787350@qq.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10235094': {
        'worker_id': '80042789@qq.com',
        'state': 0,
        'bname': 'к-ѩʦ'
    },
    '10291474': {
        'worker_id': '764551789@qq.com-deleted',
        'state': 0,
        'bname': 'ʦ'
    },
    '10234846': {
        'worker_id': '70271111@qq.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10233774': {
        'worker_id': '1124632199@qq.com-deleted',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10233732': {
        'worker_id': '1528259277@qq.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10230211': {
        'worker_id': 'zhangye@oldboyedu.com',
        'state': 0,
        'bname': 'к\u0865γ̹'
    },
    '10302103': {
        'worker_id': 'huangyanze@oldboyedu.com',
        'state': 0,
        'bname': 'null'
    },
    '10283355': {
        'worker_id': '1184407951@qq.com',
        'state': 0,
        'bname': 'ʦ'
    },
    '10251217': {
        'worker_id': 'wulinzhuo@oldboyedu.com',
        'state': 0,
        'bname': ''
    },
    '10235566': {
        'worker_id': 'wusanjiang@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10233810': {
        'worker_id': '2398228703@qq.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10246846': {
        'worker_id': 'jinyan@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10237202': {
        'worker_id': 'zhanghuanyu@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10238687': {
        'worker_id': 'zhoujunyan@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10238708': {
        'worker_id': 'baodandan@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10238779': {
        'worker_id': 'yangxueyuan@oldboyedu.com',
        'state': 0,
        'bname': 'к-ʦ'
    },
    '10233738': {
        'worker_id': '1602424923@qq.com',
        'state': 1,
        'bname': 'к-Сʦ'
    }
});
$53.data('of_groups', {
    '19740116': {
        'group_name': '',
        'workers': [
            '10233732',
            '10233738',
            '10233810',
            '10283355',
            '10238682',
            '10234849',
            '10233774'
        ]
    }
});
$53.data('mobileCompanyInfo', {
    'stop_back': '1',
    'company_logo': '../img/upload/10155416/mobile/temp/mobile_53kf_1527645773.jpg',
    'company_intr': '<p><img src="/upload/ueditor/10155416/106205365/style_new_window/2022030914321474946.gif"/></p>',
    'company_short': 'к<10רעIT>',
    'mobile_music': 'msg_tip_2',
    'zdyurl': '',
    'minchat_height': '100'
});
$53.data('icon_award', {});
$53.data('api_uuid', '351573e030e222ac5e54dc712335e597');
$53.setUuid('351573e030e222ac5e54dc712335e597');
_convertedFunction3(window);
_convertedFunction4(window, document, hz6d_alias_host, ipstr, ipContinent, companyid, hz6d_style_id);
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = 'https://www59.eiisys.com';
var done = false;
script.onload = script.onreadystatechange = function () {
    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        done = true;
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
    }
};
head.appendChild(script);