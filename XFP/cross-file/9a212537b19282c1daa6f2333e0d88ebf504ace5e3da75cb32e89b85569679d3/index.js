import {getYyRxId} from './getYyRxId.js'
import {getYyRxId1} from './getYyRxId1.js'
import {getYyRxId2} from './getYyRxId2.js'
import {getYyRxId3} from './getYyRxId3.js'
import {getYyRxId4} from './getYyRxId4.js'
import {getRiskxConfig} from './getRiskxConfig.js'
import {_convertedFunction_n0} from './_convertedFunction_n0.js'
import {_0xfc28} from './_0xfc28.js'
import {_convertedFunction_n1} from './_convertedFunction_n1.js'
import {ie} from './ie.js'
import {_convertedFunction_n2} from './_convertedFunction_n2.js'
import {trimHash} from './trimHash.js'
import {stringToBoolean} from './stringToBoolean.js'
import {getFirstIfArray} from './getFirstIfArray.js'
import {decodeError} from './decodeError.js'
import {shorten} from './shorten.js'
import {setSafariIsIncognito} from './setSafariIsIncognito.js'
import {setChromeQuota} from './setChromeQuota.js'
import {setServiceWorkerUndefined} from './setServiceWorkerUndefined.js'
import {setIsBrave} from './setIsBrave.js'
import {safariIncognitoTest} from './safariIncognitoTest.js'
import {queryChromeQuota} from './queryChromeQuota.js'
import {getHref} from './getHref.js'
import {_shorten} from './_shorten.js'
import {_convertedFunction_n3} from './_convertedFunction_n3.js'
import {_convertedFunction_n4} from './_convertedFunction_n4.js'
import {_convertedFunction_n5} from './_convertedFunction_n5.js'
import {_convertedFunction_n6} from './_convertedFunction_n6.js'
import {_convertedFunction_n7} from './_convertedFunction_n7.js'
import {_convertedFunction_n8} from './_convertedFunction_n8.js'
import {_convertedFunction_n9} from './_convertedFunction_n9.js'
import {_convertedFunction_n10} from './_convertedFunction_n10.js'
import {_convertedFunction_n11} from './_convertedFunction_n11.js'
import {_convertedFunction_n12} from './_convertedFunction_n12.js'
import {_convertedFunction_n13} from './_convertedFunction_n13.js'
import {_convertedFunction_n14} from './_convertedFunction_n14.js'
import {_convertedFunction_n15} from './_convertedFunction_n15.js'
import {_convertedFunction_n16} from './_convertedFunction_n16.js'
import {_convertedFunction_n17} from './_convertedFunction_n17.js'
import {_convertedFunction_n18} from './_convertedFunction_n18.js'
import {_convertedFunction_n19} from './_convertedFunction_n19.js'
import {_convertedFunction_n20} from './_convertedFunction_n20.js'
import {_convertedFunction_n21} from './_convertedFunction_n21.js'
import {_convertedFunction_n22} from './_convertedFunction_n22.js'
import {_convertedFunction_n23} from './_convertedFunction_n23.js'
import {_convertedFunction_n24} from './_convertedFunction_n24.js'
import {_convertedFunction_n25} from './_convertedFunction_n25.js'
var _0xc28f = [
    ' this is null or not defined',
    'get_url_string_from_object',
    'riskified_cookie',
    'build_payload',
    'p_measurements',
    'client_info',
    'batteryData',
    'Error getBattery()',
    'trim_hash',
    'hash=',
    '[&?]?hash=[^&?\\n\\t\\r]*',
    'toLowerCase',
    'trim',
    'true',
    'false',
    'isArray',
    '%+([^%]*)$',
    'incognitoData',
    'safari',
    'chrome_quota',
    'serviceWorker',
    'is_brave',
    'brave',
    'onupgradeneeded',
    'result',
    'createObjectStore',
    'put',
    'message',
    'close',
    'indexedDB',
    'deleteDatabase',
    'webkitTemporaryStorage',
    'queryUsageAndQuota',
    'href',
    'getReferrer',
    'referrer',
    'buildClientInfo',
    'cart',
    'ontouchstart',
    'maxTouchPoints',
    'msMaxTouchPoints',
    'colorDepth',
    'shop',
    'hardwareConcurrency',
    'title',
    'getConsoleJson',
    'getBatteryJson',
    'getInitialCookieState',
    'getBrowserData',
    'getOSData',
    'getGpu',
    'getResolutions',
    'getNavigatorData',
    'getPageLanguage',
    'getIncognitoData',
    'getChromeKeys',
    'join',
    'cartId',
    'console_js_heap_size_limit',
    'jsHeapSizeLimit',
    'console_used_js_heap_size',
    'memory',
    'usedJSHeapSize',
    'console_total_js_heap_size',
    'console_error',
    'console.memory is undefined',
    'console is undefined',
    'error getting console',
    'error',
    'battery_error',
    'charging',
    'battery_charging',
    'boolean',
    'battery_level',
    'chargingTime',
    'battery_charging_time',
    'dischargingTime',
    'battery_discharging_time',
    'Infinity',
    'initial_cookie_state_',
    'for getting the stack trace',
    'stack',
    '{anonymous}()@',
    'onClientInfo',
    'rResult',
    'pageId',
    'buildImgUrl',
    '/img/',
    'shouldFire',
    'current_page',
    'setSid',
    'incognito',
    'opr',
    'addons',
    'platform',
    'canvas',
    'getContext',
    'experimental-webgl',
    'getExtension',
    'WEBGL_debug_renderer_info',
    'getParameter',
    'UNMASKED_RENDERER_WEBGL',
    'resolution',
    'devicePixelRatio',
    'width',
    'availWidth',
    'innerWidth',
    'outerHeight',
    'DateTimeFormat',
    'numberingSystem',
    'calendar',
    'timeZone',
    'locale',
    'num_sys',
    'cal',
    'intl',
    'downlink',
    'downlink_error',
    'plugins',
    'nav_plu',
    'nav_lang',
    'language',
    'page_language_data',
    'querySelector',
    'html',
    'lang',
    'html.translated-rtl,html.translated-ltr,ya-tr-span',
    'btoaSupported',
    'global',
    'btoa',
    'shuffle',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    'charCodeAt',
    '_keyStr',
    'fromCharCode',
    'p_measurements_callback',
    'getEntries',
    'resource',
    'filter',
    'timing',
    'postRequest',
    'is_empty',
    'querySelectorAll',
    'field_name',
    'af_timestamp',
    'nodeName',
    'DOMContentLoaded',
    'change',
    'object',
    'https://',
    '/v2/client_infos',
    '/pd',
    'pm_url',
    '/pm',
    'af_url',
    '/af',
    'image-l.gif',
    'undefined',
    'version',
    'IPv4',
    'complete',
    'base_url',
    'latency',
    'subscribe',
    'page_ready',
    'start_lat_measurement',
    'page_unload',
    'skip',
    'before_beacon',
    'length',
    'addEventListener',
    'attachEvent',
    'floor',
    'ceil',
    'push',
    'iqr',
    'latencies',
    'sort',
    'ncmp',
    'round',
    'https:',
    'location',
    'protocol',
    '?t=',
    'getTime',
    'random',
    '&c=',
    'doIt',
    'cookieValue',
    '&p=',
    'RI22',
    'generatePageId',
    '&a=',
    'getCartId',
    '&o=',
    '&rt=',
    'onload',
    'onerror',
    'min',
    'aborted',
    'call',
    'latency_runs',
    'calc_latency',
    'send_lat_event',
    'iterate',
    'abort',
    'running',
    'stderr',
    'timeout',
    'defer',
    'finish',
    'fireEvent',
    'vars',
    'events',
    'onpagehide',
    'addListener',
    'pagehide',
    'unload',
    'beforeunload',
    'lat',
    'lat_err',
    'createElement',
    'getElementsByTagName',
    'innerHTML',
    '<!--[if gt IE ',
    ']><i></i><![endif]-->',
    'keys',
    'prototype',
    'hasOwnProperty',
    'propertyIsEnumerable',
    'toString',
    'toLocaleString',
    'valueOf',
    'isPrototypeOf',
    'constructor',
    'Object.keys called on a non-object',
    'forEach',
    'rCookie',
    'http',
    'local',
    'session',
    'substr',
    'page_id',
    'string',
    'split',
    'substring',
    'indexOf',
    'file:',
    'match',
    'cookie',
    '=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/',
    'renew_cookie',
    'create_expiration_date',
    '; expires=',
    '; path=/; domain=',
    'localStorage',
    'parse',
    'getItem',
    'is_valid_cookie',
    'setItem',
    'stringify',
    'validate_cookie_value_from_storage',
    'value',
    'includes',
    'expiration_date',
    'date_diff_in_days',
    'UTC',
    'getFullYear',
    'getMonth',
    'setDate',
    'getDate',
    'sessionStorage',
    'host',
    'replace',
    'from_http_cookie',
    'LOCAL',
    'INDEXED_DB',
    'initialState',
    'none',
    'from_session_storage',
    'from_indexed_db',
    'getCookieFromAllStorages',
    'setCookieInstanceInAllLocation',
    'getCookieCandidates',
    'filterOnlyValidCandidates',
    'chooseCookieValue',
    'COOKIE_NAME',
    'generateCookieId',
    'setCookie',
    'removeItem',
    'cleanHttpCookie',
    'cleanSessionCookie',
    'cleanLocalCookie',
    'merchantBlacklisted',
    'enoughTimeBetweenCalls',
    'LAST_ACTIVATION_COOKIE_NAME',
    'MIN_ACTIVATIONS_INTERVAL_MINUTES',
    'MERCHANT_BLACKLIST_REGEX',
    'RUN_COOKIE_NAME',
    'IDLE_PAGES_COUNT',
    'sentCount',
    'firstPwd',
    'password',
    'field_type',
    'firstEmail',
    'firstPan',
    'is_pan',
    'getHref',
    'obfuscate',
    'is_email',
    'target',
    'name',
    'isTrusted',
    'type',
    'test',
    'getData',
    'text/plain',
    'lastFocusTimestamp',
    'lastBlurTimestamp',
    'focus',
    'blur',
    'XMLHttpFactories',
    'Msxml2.XMLHTTP',
    'Msxml3.XMLHTTP',
    'Microsoft.XMLHTTP',
    'sendRequestPOST',
    'createXMLHTTPObject',
    'open',
    'POST',
    'setRequestHeader',
    'Content-Type',
    'application/json; charset=utf-8',
    'Access-Control-Allow-Headers',
    'onreadystatechange',
    'readyState',
    'status',
    'send',
    'readCookie',
    'charAt',
    'function',
    'map'
];
_convertedFunction_n0(_0xc28f, 148);
var R_BOOMR_start, MEASUREMENTS, R_BOOMR;
_0xfc28('0x0') != typeof RISKX && (RISKX = {}), RISKX['host_url'] = 'https://c.riskified.com/client_infos.json', RISKX['client_infos_url'] = _0xfc28('0x1') + getYyRxId4() + _0xfc28('0x2'), RISKX['pd_url'] = _0xfc28('0x1') + getYyRxId4() + _0xfc28('0x3'), RISKX[_0xfc28('0x4')] = _0xfc28('0x1') + getYyRxId4() + _0xfc28('0x5'), RISKX[_0xfc28('0x6')] = _0xfc28('0x1') + getYyRxId4() + _0xfc28('0x7'), R_BOOMR_start = new Date()['getTime'](), MEASUREMENTS = 2, _convertedFunction_n1(window), _0xfc28('0x9') == typeof window.DEBUG && (window.DEBUG = !0);
// ie();
ie < 9 && (Object[_0xfc28('0x4e')] = Object[_0xfc28('0x4e')] || function () {
}(), Array[_0xfc28('0x4f')][_0xfc28('0x58')] || (Array[_0xfc28('0x4f')][_0xfc28('0x58')] = function (_0x1a59ed, _0x24be86) {
    'use strict';
    var _0x38e76e, _0x20ef71;
    for (_0x38e76e = 0, _0x20ef71 = this[_0xfc28('0x15')]; _0x38e76e < _0x20ef71; ++_0x38e76e)
        _0x38e76e in this && _0x1a59ed[_0xfc28('0x34')](_0x24be86, this[_0x38e76e], _0x38e76e, this);
}));
var RI22 = {
    COOKIE_NAME: _0xfc28('0x59'),
    HTTP: _0xfc28('0x5a'),
    LOCAL: _0xfc28('0x5b'),
    SESSION: _0xfc28('0x5c'),
    INDEXED_DB: 'indexeddb',
    IDLE_PAGES_COUNT: 0,
    RUN_COOKIE_NAME: 'rskxRunCookie',
    MERCHANT_BLACKLIST_REGEX: null,
    MIN_ACTIVATIONS_INTERVAL_MINUTES: null,
    LAST_ACTIVATION_COOKIE_NAME: 'lastRskxRun',
    page_id: null,
    generateCookieId: function () {
        'use strict';
        return Math[_0xfc28('0x25')]()['toString'](36)[_0xfc28('0x5d')](2, 15) + Math[_0xfc28('0x25')]()['toString'](36)[_0xfc28('0x5d')](2, 15) + new Date()['getTime']()[_0xfc28('0x52')](36);
    },
    generatePageId: function () {
        'use strict';
        return null == RI22[_0xfc28('0x5e')] && (RI22[_0xfc28('0x5e')] = Math[_0xfc28('0x25')]()[_0xfc28('0x52')](36)[_0xfc28('0x5d')](3, 6)), RI22[_0xfc28('0x5e')];
    },
    get_value_from_cookie: function (_0x3c086b, _0x2226bf) {
        'use strict';
        if (_0xfc28('0x5f') == typeof _0x2226bf) {
            var _0x196db4, _0x14b540, _0x2f3f96 = _0x3c086b + '=', _0x3a81b2 = _0x2226bf[_0xfc28('0x60')](/[;&]/);
            for (_0x196db4 = 0; _0x196db4 < _0x3a81b2[_0xfc28('0x15')]; _0x196db4 += 1) {
                for (_0x14b540 = _0x3a81b2[_0x196db4]; ' ' === _0x14b540['charAt'](0);)
                    _0x14b540 = _0x14b540[_0xfc28('0x61')](1, _0x14b540['length']);
                if (0 === _0x14b540[_0xfc28('0x62')](_0x2f3f96))
                    return _0x14b540[_0xfc28('0x61')](_0x2f3f96[_0xfc28('0x15')], _0x14b540[_0xfc28('0x15')]);
            }
        }
    },
    root_from_domain: function (_0x94b6a6) {
        if (_0xfc28('0x63') == document[_0xfc28('0x21')][_0xfc28('0x22')])
            return '';
        var _0x137cc4 = _0x94b6a6[_0xfc28('0x64')](/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1][_0xfc28('0x60')](':')[0];
        if (function (_0x1edfc1) {
                var _0x59f44d = _0x1edfc1[_0xfc28('0x60')]('.'), _0x24c558 = !0;
                if (4 === _0x59f44d['length']) {
                    for (var _0x71d3c0 = 0; _0x71d3c0 < 4; _0x71d3c0++)
                        if (isNaN(parseInt(_0x59f44d[_0x71d3c0])) || parseInt(_0x59f44d[_0x71d3c0], 10) < 0 || 255 < parseInt(_0x59f44d[_0x71d3c0], 10)) {
                            _0x24c558 = !1;
                            break;
                        }
                } else
                    _0x24c558 = !1;
                return _0x24c558;
            }(_0x137cc4))
            return _0x137cc4;
        var _0x4cec79 = _0x137cc4[_0xfc28('0x60')]('.');
        return _0x4cec79 = _0x4cec79[_0x4cec79[_0xfc28('0x15')] - 2] + '.' + _0x4cec79[_0x4cec79[_0xfc28('0x15')] - 1];
    },
    from_http_cookie: function (_0x33d58c, _0x1bac27) {
        'use strict';
        if (void 0 !== _0x1bac27)
            return document[_0xfc28('0x65')] = _0x33d58c + _0xfc28('0x66'), this[_0xfc28('0x67')](_0x33d58c, _0x1bac27), _0x1bac27;
        var _0x478cf1 = this['get_value_from_cookie'](_0x33d58c, document[_0xfc28('0x65')]);
        return void 0 !== _0x478cf1 && this[_0xfc28('0x67')](_0x33d58c, _0x478cf1), _0x478cf1;
    },
    renew_cookie: function (_0x5a9fdf, _0x10bf3d) {
        var _0x2bd787 = this['root_from_domain'](window[_0xfc28('0x21')][_0xfc28('0x22')] + '//' + window[_0xfc28('0x21')]['hostname']), _0x38c976 = this[_0xfc28('0x68')]();
        document['cookie'] = _0x5a9fdf + '=' + _0x10bf3d + _0xfc28('0x69') + _0x38c976 + _0xfc28('0x6a') + _0x2bd787;
    },
    from_local_storage: function (_0x3f22ef, _0x4931ba) {
        'use strict';
        try {
            var _0x5ce300 = window[_0xfc28('0x6b')];
            if (_0x5ce300) {
                if (void 0 === _0x4931ba) {
                    _0x1dc0cd = JSON[_0xfc28('0x6c')](_0x5ce300[_0xfc28('0x6d')](_0x3f22ef));
                    return this[_0xfc28('0x6e')](_0x1dc0cd);
                }
                var _0x1dc0cd = {
                    value: _0x4931ba,
                    expiration_date: this[_0xfc28('0x68')]()
                };
                _0x5ce300[_0xfc28('0x6f')](_0x3f22ef, JSON[_0xfc28('0x70')](_0x1dc0cd));
            }
        } catch (_0x214278) {
        }
    },
    is_valid_cookie: function (_0xda2e13) {
        if (!0 === this[_0xfc28('0x71')](_0xda2e13) && !0 === this['validate_cookie_expiration'](_0xda2e13))
            return _0xda2e13['value'];
    },
    validate_cookie_value_from_storage: function (_0x512b35) {
        if (void 0 === _0x512b35)
            return !1;
        var _0x31c257 = _0x512b35[_0xfc28('0x72')];
        return void 0 !== _0x31c257 && !_0x31c257[_0xfc28('0x73')]('{') && !_0x31c257[_0xfc28('0x73')](_0xfc28('0x72'));
    },
    validate_cookie_expiration: function (_0x2af421) {
        try {
            if (void 0 === _0x2af421 || void 0 === _0x2af421[_0xfc28('0x74')])
                return !1;
            var _0x51d888 = new Date(_0x2af421[_0xfc28('0x74')]), _0x46893c = new Date(), _0xdfbf61 = this[_0xfc28('0x75')](_0x46893c, _0x51d888);
            return _0xdfbf61 <= 365 && 0 < _0xdfbf61;
        } catch (_0x94ff86) {
            return !1;
        }
    },
    date_diff_in_days: function (_0x147daf, _0x145be0) {
        var _0x10f264 = Date[_0xfc28('0x76')](_0x147daf[_0xfc28('0x77')](), _0x147daf[_0xfc28('0x78')](), _0x147daf['getDate']()), _0x4d181b = Date['UTC'](_0x145be0[_0xfc28('0x77')](), _0x145be0[_0xfc28('0x78')](), _0x145be0['getDate']());
        return Math['floor']((_0x4d181b - _0x10f264) / 86400000);
    },
    create_expiration_date: function () {
        var _0x3c1001 = new Date();
        return _0x3c1001[_0xfc28('0x79')](_0x3c1001[_0xfc28('0x7a')]() + 730), _0x3c1001['toUTCString']();
    },
    from_session_storage: function (_0x9e44e5, _0x248099) {
        'use strict';
        try {
            var _0x50d19e = window[_0xfc28('0x7b')];
            if (_0x50d19e) {
                if (void 0 === _0x248099)
                    return _0x50d19e[_0xfc28('0x6d')](_0x9e44e5);
                _0x50d19e[_0xfc28('0x6f')](_0x9e44e5, _0x248099);
            }
        } catch (_0x1ac663) {
        }
    },
    getHost: function () {
        'use strict';
        return window[_0xfc28('0x21')][_0xfc28('0x7c')][_0xfc28('0x7d')](/:\d+/, '');
    },
    from_indexed_db: function (_0x46bfc7, _0x5608d5) {
    },
    getCookieCandidates: function (_0x537792) {
        'use strict';
        var _0x1bdad1 = {};
        return _0x1bdad1[this['HTTP']] = this[_0xfc28('0x7e')](_0x537792), _0x1bdad1[this[_0xfc28('0x7f')]] = this['from_local_storage'](_0x537792), _0x1bdad1[this['SESSION']] = this['from_session_storage'](_0x537792), _0x1bdad1[this[_0xfc28('0x80')]] = this['from_indexed_db'](_0x537792), _0x1bdad1;
    },
    chooseCookieValue: function (_0x2bb544, _0x284352) {
        'use strict';
        var _0x89d717, _0x305148 = {};
        return _0x89d717 = Object[_0xfc28('0x4e')](_0x2bb544)[_0xfc28('0x15')], _0x305148[_0xfc28('0x28')] = _0x284352, _0x305148[_0xfc28('0x81')] = [_0xfc28('0x82')], 0 !== _0x89d717 && (_0x305148[_0xfc28('0x28')] = Object['keys'](_0x2bb544)[0], _0x305148[_0xfc28('0x81')] = _0x2bb544[_0x305148[_0xfc28('0x28')]]), _0x305148;
    },
    filterOnlyValidCandidates: function (_0x144614) {
        'use strict';
        var _0x47f382 = {};
        return Object[_0xfc28('0x4e')](_0x144614)[_0xfc28('0x58')](function (_0x509a90) {
            void 0 !== _0x144614[_0x509a90] && null !== _0x144614[_0x509a90] && '' !== _0x144614[_0x509a90] && (void 0 === _0x47f382[_0x144614[_0x509a90]] && (_0x47f382[_0x144614[_0x509a90]] = []), _0x47f382[_0x144614[_0x509a90]][_0xfc28('0x1a')](_0x509a90));
        }), _0x47f382;
    },
    setCookieInstanceInAllLocation: function (_0x2641d7, _0x9650e) {
        'use strict';
        this[_0xfc28('0x7e')](_0x2641d7, _0x9650e), this['from_local_storage'](_0x2641d7, _0x9650e), this[_0xfc28('0x83')](_0x2641d7, _0x9650e), this[_0xfc28('0x84')](_0x2641d7, _0x9650e);
    },
    setCookie: function (_0x2babc2, _0x4858df) {
        'use strict';
        var _0x2ebb8c, _0x487914;
        return _0x487914 = (_0x2ebb8c = this[_0xfc28('0x85')](_0x2babc2, _0x4858df))['cookieValue'], this[_0xfc28('0x86')](_0x2babc2, _0x487914), _0x2ebb8c;
    },
    getCookieFromAllStorages: function (_0x48177b, _0x231309) {
        var _0x1bfd53, _0xb2ecb6;
        return _0x1bfd53 = this[_0xfc28('0x87')](_0x48177b), _0xb2ecb6 = this[_0xfc28('0x88')](_0x1bfd53), this[_0xfc28('0x89')](_0xb2ecb6, _0x231309);
    },
    doIt: function (_0xe254f, _0x27f56d) {
        'use strict';
        return void 0 === _0xe254f && (_0xe254f = this[_0xfc28('0x8a')]), void 0 === _0x27f56d && (_0x27f56d = this[_0xfc28('0x8b')]()), this[_0xfc28('0x8c')](_0xe254f, _0x27f56d);
    },
    cleanHttpCookie: function (_0x3003da) {
        'use strict';
        var _0x39a06a = new Date();
        _0x39a06a['setDate'](_0x39a06a[_0xfc28('0x7a')]() - 1), document[_0xfc28('0x65')] = _0x3003da + '=;expires=' + _0x39a06a;
    },
    cleanSessionCookie: function (_0x43e5ed) {
        'use strict';
        var _0x5a0d0c = window[_0xfc28('0x7b')];
        try {
            _0x5a0d0c && _0x5a0d0c[_0xfc28('0x8d')](_0x43e5ed);
        } catch (_0x1424be) {
        }
    },
    cleanLocalCookie: function (_0x1595a3) {
        'use strict';
        var _0x1cac92 = window[_0xfc28('0x6b')];
        try {
            _0x1cac92 && _0x1cac92[_0xfc28('0x8d')](_0x1595a3);
        } catch (_0x2c2104) {
        }
    },
    cleanAllCookieInstances: function (_0x58a09a) {
        'use strict';
        this[_0xfc28('0x8e')](_0x58a09a), this[_0xfc28('0x8f')](_0x58a09a), this[_0xfc28('0x90')](_0x58a09a);
    },
    shouldFire: function (_0x5e8e4a) {
        'use strict';
        if (!this[_0xfc28('0x91')](_0x5e8e4a) && this['activePage']() && this[_0xfc28('0x92')]())
            return this[_0xfc28('0x86')](this[_0xfc28('0x93')], new Date()[_0xfc28('0x24')]()), this[_0xfc28('0x86')](this['RUN_COOKIE_NAME'], 0), !0;
    },
    enoughTimeBetweenCalls: function () {
        'use strict';
        var _0x33a7f1, _0x11a863 = this[_0xfc28('0x93')];
        if (!this[_0xfc28('0x94')])
            return !0;
        try {
            _0x33a7f1 = this[_0xfc28('0x85')](_0x11a863, 0)[_0xfc28('0x28')];
        } catch (_0x1d8adb) {
            return !0;
        }
        return !((new Date()[_0xfc28('0x24')]() - _0x33a7f1) / 1000 / 60 < this['MIN_ACTIVATIONS_INTERVAL_MINUTES']);
    },
    merchantBlacklisted: function (_0x51bf75) {
        'use strict';
        return this[_0xfc28('0x95')] && _0x51bf75 && _0x51bf75['match'](this[_0xfc28('0x95')]);
    },
    activePage: function () {
        'use strict';
        var _0x591cf9, _0x45b8e1 = void 0, _0x3e1bf5 = this[_0xfc28('0x96')];
        if (this[_0xfc28('0x97')] <= 0)
            return !0;
        try {
            _0x591cf9 = this[_0xfc28('0x85')](_0x3e1bf5, 0), _0x45b8e1 = parseInt(_0x591cf9[_0xfc28('0x28')]);
        } catch (_0x2825c1) {
            return !0;
        }
        return !(_0x45b8e1 < this[_0xfc28('0x97')]) || (this[_0xfc28('0x86')](_0x3e1bf5, _0x45b8e1 + 1), !1);
    }
};
if (function () {
        function _0x1bea33() {
            return +new Date();
        }
        try {
            _0x3fd9df['senderHandle'] = setInterval(_0x5da8c9, 3000), document[_0xfc28('0x16')]('paste', function (_0x454427) {
                try {
                    var _0x90cbed = '' !== _0x454427[_0xfc28('0xa2')][_0xfc28('0xa3')] ? _0x454427[_0xfc28('0xa2')][_0xfc28('0xa3')] : '' !== _0x454427[_0xfc28('0xa2')]['id'] ? _0x454427['target']['id'] : _0x454427[_0xfc28('0xa2')]['nodeName'], _0x2d9470 = _0x454427[_0xfc28('0xa2')]['type'], _0xcc68bf = {
                            field_name: _0x90cbed,
                            field_type: _0x2d9470 = 'string' == typeof _0x2d9470 ? _0x2d9470 : JSON[_0xfc28('0x70')](_0x2d9470),
                            is_trusted: _0x454427[_0xfc28('0xa4')],
                            is_pan: _0xfc28('0x9a') !== _0x454427[_0xfc28('0xa2')][_0xfc28('0xa5')] ? /^[\-0-9]{13,23}$/[_0xfc28('0xa6')](_0x454427['clipboardData'][_0xfc28('0xa7')](_0xfc28('0xa8'))) : null,
                            is_email: _0xfc28('0x9a') !== _0x454427[_0xfc28('0xa2')]['type'] ? /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/[_0xfc28('0xa6')](_0x454427['clipboardData'][_0xfc28('0xa7')](_0xfc28('0xa8'))) : null,
                            timestamp: _0x1bea33(),
                            last_blur_timestamp: _0x1082f5['lastBlurTimestamp'],
                            last_focus_timestamp: _0x1082f5[_0xfc28('0xa9')]
                        };
                    _0x2abdbf(_0xcc68bf), _0x1082f5[_0xfc28('0xaa')] = null, _0x1082f5['lastFocusTimestamp'] = null;
                } catch (_0x52f847) {
                }
            }), window[_0xfc28('0x16')](_0xfc28('0xab'), function (_0x350106) {
                _0x1082f5[_0xfc28('0xa9')] = _0x1bea33();
            }, !1), window[_0xfc28('0x16')](_0xfc28('0xac'), function (_0x4be621) {
                _0x1082f5[_0xfc28('0xaa')] = _0x1bea33();
            }, !1);
        } catch (_0x469d09) {
        }
    }(), _0xfc28('0x0') != typeof RISKX)
    var RISKX = {};
RISKX[_0xfc28('0xad')] = [
    function () {
        'use strict';
        return new XDomainRequest();
    },
    function () {
        'use strict';
        return new XMLHttpRequest();
    },
    function () {
        'use strict';
        return new ActiveXObject(_0xfc28('0xae'));
    },
    function () {
        'use strict';
        return new ActiveXObject(_0xfc28('0xaf'));
    },
    function () {
        'use strict';
        return new ActiveXObject(_0xfc28('0xb0'));
    }
], RISKX['createXMLHTTPObject'] = function () {
    'use strict';
    var _0x1e67cd, _0x5156bc = !1;
    for (_0x1e67cd = 0; _0x1e67cd < RISKX[_0xfc28('0xad')]['length']; _0x1e67cd += 1) {
        try {
            _0x5156bc = RISKX[_0xfc28('0xad')][_0x1e67cd]();
        } catch (_0x1506c3) {
            continue;
        }
        break;
    }
    return _0x5156bc;
}, RISKX[_0xfc28('0xb1')] = function (_0x36607e, _0x536dd3, _0x7c2c5c) {
    'use strict';
    var _0x95b7f2 = RISKX[_0xfc28('0xb2')](), _0x6e756b = JSON[_0xfc28('0x70')]({ client_info: _0x7c2c5c });
    if (_0x95b7f2) {
        _0x95b7f2[_0xfc28('0xb3')](_0xfc28('0xb4'), _0x36607e, !0);
        try {
            _0x95b7f2[_0xfc28('0xb5')](_0xfc28('0xb6'), _0xfc28('0xb7')), _0x95b7f2['setRequestHeader'](_0xfc28('0xb8'), _0xfc28('0xb6')), _0x95b7f2['setRequestHeader']('Access-Control-Allow-Origin', '*');
        } catch (_0x1690b3) {
        }
        _0x95b7f2[_0xfc28('0xb9')] = function () {
            4 === _0x95b7f2[_0xfc28('0xba')] && (200 !== _0x95b7f2[_0xfc28('0xbb')] && 201 !== _0x95b7f2[_0xfc28('0xbb')] && 304 !== _0x95b7f2['status'] || null != _0x536dd3 && _0x536dd3(_0x95b7f2));
        }, _0x95b7f2['onerror'] = function (_0xce7495) {
        }, 4 !== _0x95b7f2[_0xfc28('0xba')] && _0x95b7f2[_0xfc28('0xbc')](_0x6e756b);
    }
}, RISKX[_0xfc28('0xbd')] = function (_0x13165f) {
    'use strict';
    var _0x2d56d0, _0x928e02, _0x3e7103 = _0x13165f + '=', _0x2f51a6 = document[_0xfc28('0x65')][_0xfc28('0x60')](';');
    for (_0x2d56d0 = 0; _0x2d56d0 < _0x2f51a6[_0xfc28('0x15')]; _0x2d56d0 += 1) {
        for (_0x928e02 = _0x2f51a6[_0x2d56d0]; ' ' === _0x928e02[_0xfc28('0xbe')](0);)
            _0x928e02 = _0x928e02[_0xfc28('0x61')](1, _0x928e02[_0xfc28('0x15')]);
        if (0 === _0x928e02['indexOf'](_0x3e7103))
            return _0x928e02[_0xfc28('0x61')](_0x3e7103['length'], _0x928e02[_0xfc28('0x15')]);
    }
    return null;
}, Object['keys'] ? RISKX['keys'] = Object[_0xfc28('0x4e')] : RISKX['keys'] = function () {
    'use strict';
    var _0x4f7d23 = Object[_0xfc28('0x4f')]['hasOwnProperty'], _0x5e18d0 = !{ toString: null }[_0xfc28('0x51')](_0xfc28('0x52')), _0x223e10 = [
            _0xfc28('0x52'),
            'toLocaleString',
            _0xfc28('0x54'),
            'hasOwnProperty',
            _0xfc28('0x55'),
            _0xfc28('0x51'),
            _0xfc28('0x56')
        ], _0x439886 = _0x223e10[_0xfc28('0x15')];
    return function (_0x15eaae) {
        if (_0xfc28('0x0') != typeof _0x15eaae && (_0xfc28('0xbf') != typeof _0x15eaae || null === _0x15eaae))
            throw new TypeError('Object.keys called on non-object');
        var _0x318e2d, _0x9cf77f, _0x33da2b = [];
        for (_0x318e2d in _0x15eaae)
            _0x4f7d23[_0xfc28('0x34')](_0x15eaae, _0x318e2d) && _0x33da2b[_0xfc28('0x1a')](_0x318e2d);
        if (_0x5e18d0)
            for (_0x9cf77f = 0; _0x9cf77f < _0x439886; _0x9cf77f++)
                _0x4f7d23[_0xfc28('0x34')](_0x15eaae, _0x223e10[_0x9cf77f]) && _0x33da2b[_0xfc28('0x1a')](_0x223e10[_0x9cf77f]);
        return _0x33da2b;
    };
}(), Array[_0xfc28('0x4f')][_0xfc28('0xc0')] ? RISKX[_0xfc28('0xc0')] = Array[_0xfc28('0x4f')]['map'] : RISKX[_0xfc28('0xc0')] = function (_0x2309c8, _0x44b6b5) {
    var _0x164d09, _0x1d657b, _0x49fccc;
    if (null == this)
        throw new TypeError(_0xfc28('0xc1'));
    var _0x17b4b3 = Object(this), _0x1be208 = _0x17b4b3[_0xfc28('0x15')] >>> 0;
    if (_0xfc28('0xbf') != typeof _0x2309c8)
        throw new TypeError(_0x2309c8 + ' is not a function');
    for (1 < arguments[_0xfc28('0x15')] && (_0x164d09 = _0x44b6b5), _0x1d657b = new Array(_0x1be208), _0x49fccc = 0; _0x49fccc < _0x1be208;) {
        var _0x3be72e, _0x34f69d;
        _0x49fccc in _0x17b4b3 && (_0x3be72e = _0x17b4b3[_0x49fccc], _0x34f69d = _0x2309c8[_0xfc28('0x34')](_0x164d09, _0x3be72e, _0x49fccc, _0x17b4b3), _0x1d657b[_0x49fccc] = _0x34f69d), _0x49fccc++;
    }
    return _0x1d657b;
}, RISKX[_0xfc28('0xc2')] = function (_0x5d6ddd, _0x2ff91b) {
    _0x2ff91b || (_0x2ff91b = ''), _0x2ff91b && (_0x2ff91b += '_');
    var _0x226054 = RISKX[_0xfc28('0x4e')](_0x5d6ddd);
    return _0x226054['map'] = RISKX[_0xfc28('0xc0')], _0x226054['map'](function (_0x34a54e) {
        return _0xfc28('0x0') == typeof _0x5d6ddd[_0x34a54e] && null != _0x5d6ddd[_0x34a54e] ? (string = RISKX[_0xfc28('0xc2')](_0x5d6ddd[_0x34a54e], _0x34a54e), string) : encodeURIComponent(_0x2ff91b + _0x34a54e) + '=' + encodeURIComponent(_0x5d6ddd[_0x34a54e]);
    })['join']('&');
}, RISKX['clientInfoToString'] = function (_0x2e24b4) {
    return RISKX[_0xfc28('0xc2')](_0x2e24b4);
}, RISKX['build_payload'] = function (_0x337bb5) {
    var _0x11f7f2;
    try {
        _0x11f7f2 = RISKX_SHUFFLE['obfuscate'](_0x337bb5);
    } catch (_0x4ce9d1) {
        _0x11f7f2 = null;
    }
    return {
        riskified_cookie: _0x337bb5[_0xfc28('0xc3')],
        error: null == _0x11f7f2,
        payload: _0x11f7f2
    };
}, RISKX['onClientInfo'] = function () {
    'use strict';
    RISKX[_0xfc28('0xb1')](RISKX['client_infos_url'], null, RISKX[_0xfc28('0xc4')](RISKX['client_info'])), RISKX[_0xfc28('0xc5')](RISKX[_0xfc28('0xc6')]['shop']);
}, RISKX[_0xfc28('0xc7')] = {};
try {
    navigator['getBattery']()['then'](function (_0x765994) {
        RISKX[_0xfc28('0xc7')] = _0x765994;
    });
} catch (_0x48c65b) {
    RISKX[_0xfc28('0xc7')] = { error: _0xfc28('0xc8') };
}
var RISKX_REQUEST_SENDER, RISKX_SHUFFLE;
RISKX['getHref'] = getHref, RISKX[_0xfc28('0xe3')] = _shorten, RISKX[_0xfc28('0xe5')] = _convertedFunction_n3, RISKX[_0xfc28('0xf8')] = function (_0x7017b2) {
    try {
        _0x7017b2['chr_keys'] = Object['keys'](chrome)[_0xfc28('0xf9')](',');
    } catch (_0x2aa4cc) {
    }
}, RISKX[_0xfc28('0x2d')] = _convertedFunction_n4, RISKX[_0xfc28('0xee')] = _convertedFunction_n5, RISKX[_0xfc28('0xef')] = _convertedFunction_n6, RISKX[_0xfc28('0xf0')] = _convertedFunction_n7, RISKX['printStackTrace'] = _convertedFunction_n8, RISKX[_0xfc28('0x14')] = _convertedFunction_n9, RISKX[_0xfc28('0x10')] = _convertedFunction_n10, RISKX[_0xfc28('0x117')] = _convertedFunction_n11, RISKX['go'] = _convertedFunction_n12, RISKX[_0xfc28('0x11b')] = _convertedFunction_n13, typeof getYyRxId1 == typeof Function && null != getYyRxId1() && (RISKX[_0xfc28('0xeb')] = getYyRxId1()), RI22[_0xfc28('0x119')](RISKX[_0xfc28('0xeb')]) && (R_BOOMR['init'](RISKX[_0xfc28('0x117')]()), R_BOOMR['page_ready']()), RISKX[_0xfc28('0xd2')] = {
    safari: !1,
    chrome_quota: 0,
    service_worker_undefined: !1,
    is_brave: !1,
    error: void 0
};
try {
    setServiceWorkerUndefined(), setIsBrave(), queryChromeQuota(setChromeQuota), safariIncognitoTest(setSafariIsIncognito);
} catch (_0x4344b4) {
    RISKX[_0xfc28('0xd2')][_0xfc28('0x105')] = !0;
}
RISKX[_0xfc28('0xf7')] = _convertedFunction_n14, RISKX[_0xfc28('0xf1')] = _convertedFunction_n15, RISKX[_0xfc28('0xf2')] = _convertedFunction_n15, RISKX['getGpu'] = _convertedFunction_n16, RISKX[_0xfc28('0xf4')] = _convertedFunction_n17, RISKX['getTimeLocale'] = _convertedFunction_n18, RISKX[_0xfc28('0xf5')] = _convertedFunction_n19, RISKX[_0xfc28('0xf6')] = _convertedFunction_n20, 'object' != typeof RISKX_REQUEST_SENDER && (RISKX_REQUEST_SENDER = {}), RISKX_REQUEST_SENDER['postRequest'] = function (_0x577ac9, _0x3a0ec5, _0x1fcd86) {
    'use strict';
    var _0x105507 = RISKX[_0xfc28('0xb2')](), _0x325876 = JSON[_0xfc28('0x70')](_0x3a0ec5);
    if (_0x105507) {
        _0x105507[_0xfc28('0xb3')]('POST', _0x577ac9, !0);
        try {
            _0x105507[_0xfc28('0xb5')](_0xfc28('0xb6'), 'application/json; charset=utf-8'), _0x105507['setRequestHeader']('Access-Control-Allow-Headers', _0xfc28('0xb6')), _0x105507[_0xfc28('0xb5')]('Access-Control-Allow-Origin', '*');
        } catch (_0x90fa16) {
        }
        _0x105507[_0xfc28('0xb9')] = function () {
            4 === _0x105507[_0xfc28('0xba')] && (200 !== _0x105507[_0xfc28('0xbb')] && 201 !== _0x105507[_0xfc28('0xbb')] && 304 !== _0x105507[_0xfc28('0xbb')] || null != _0x1fcd86 && _0x1fcd86(_0x105507));
        }, _0x105507[_0xfc28('0x31')] = function (_0x306a66) {
        }, 4 !== _0x105507['readyState'] && _0x105507[_0xfc28('0xbc')](_0x325876);
    }
}, _0xfc28('0x0') != typeof RISKX_SHUFFLE && (RISKX_SHUFFLE = {}), RISKX_SHUFFLE[_0xfc28('0x140')] = _convertedFunction_n21, RISKX_SHUFFLE[_0xfc28('0xa0')] = _convertedFunction_n22, RISKX_SHUFFLE['shuffle'] = _convertedFunction_n23, _keyStr = _0xfc28('0x144'), function b64Encode(_0x200d53) {
    var _0x42381c, _0x4c902e, _0x3a39d9, _0x1096c1, _0x4bae06, _0x248e3e, _0x4c3f37, _0x32a042 = '', _0x4ff6ed = 0;
    for (_0x200d53 = _utf8_encode(_0x200d53); _0x4ff6ed < _0x200d53[_0xfc28('0x15')];)
        _0x1096c1 = (_0x42381c = _0x200d53[_0xfc28('0x145')](_0x4ff6ed++)) >> 2, _0x4bae06 = (3 & _0x42381c) << 4 | (_0x4c902e = _0x200d53[_0xfc28('0x145')](_0x4ff6ed++)) >> 4, _0x248e3e = (15 & _0x4c902e) << 2 | (_0x3a39d9 = _0x200d53[_0xfc28('0x145')](_0x4ff6ed++)) >> 6, _0x4c3f37 = 63 & _0x3a39d9, isNaN(_0x4c902e) ? _0x248e3e = _0x4c3f37 = 64 : isNaN(_0x3a39d9) && (_0x4c3f37 = 64), _0x32a042 = _0x32a042 + this['_keyStr'][_0xfc28('0xbe')](_0x1096c1) + this['_keyStr'][_0xfc28('0xbe')](_0x4bae06) + this['_keyStr']['charAt'](_0x248e3e) + this[_0xfc28('0x146')][_0xfc28('0xbe')](_0x4c3f37);
    return _0x32a042;
}, function _utf8_encode(_0x342438) {
    var _0x1791f1 = '';
    _0x342438 = _0x342438[_0xfc28('0x7d')](/\r\n/g, '\n');
    for (var _0x556e62 = 0; _0x556e62 < _0x342438[_0xfc28('0x15')]; _0x556e62++) {
        var _0x467946 = _0x342438[_0xfc28('0x145')](_0x556e62);
        _0x467946 < 128 ? _0x1791f1 += String[_0xfc28('0x147')](_0x467946) : (127 < _0x467946 && _0x467946 < 2048 ? _0x1791f1 += String[_0xfc28('0x147')](_0x467946 >> 6 | 192) : (_0x1791f1 += String['fromCharCode'](_0x467946 >> 12 | 224), _0x1791f1 += String[_0xfc28('0x147')](_0x467946 >> 6 & 63 | 128)), _0x1791f1 += String[_0xfc28('0x147')](63 & _0x467946 | 128));
    }
    return _0x1791f1;
}, RISKX[_0xfc28('0xc5')] = _convertedFunction_n24, RISKX[_0xfc28('0x148')] = _convertedFunction_n25, function () {
    function _0x457519() {
        setTimeout(_0xb74264, 50);
    }
    function _0x327dd6(_0x31a479) {
        for (key in (fieldsToSend = [
                'field_name',
                _0xfc28('0x9b'),
                _0xfc28('0x14e')
            ], newObject = {}, _0x31a479))
            fieldsToSend['includes'](key) && (newObject[key] = _0x31a479[key]);
        return newObject;
    }
    function _0xd0271d(_0x11bf52, _0x14eb3e) {
        return _0x885a83 = _0x11bf52[_0xfc28('0xc0')](_0x327dd6), _0x3f2a6d = _0x14eb3e[_0xfc28('0xc0')](_0x327dd6), JSON[_0xfc28('0x70')](_0x885a83) == JSON['stringify'](_0x3f2a6d);
        var _0x885a83, _0x3f2a6d;
    }
    try {
        _0x457519(), document[_0xfc28('0x16')](_0xfc28('0x153'), _0x457519), document['addEventListener'](_0xfc28('0x154'), _0x457519);
    } catch (_0x2d8c3d) {
    }
}();