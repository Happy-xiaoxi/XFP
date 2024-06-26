import {D} from './D.js'
import {Za} from './Za.js'
import {xa} from './xa.js'
import {T} from './T.js'
import {newEle} from './newEle.js'
import {injectScript} from './injectScript.js'
import {injectSicScript} from './injectSicScript.js'
import {injectApolloScript} from './injectApolloScript.js'
import {injectSicIframe} from './injectSicIframe.js'
import {insertEle} from './insertEle.js'
import {eleId} from './eleId.js'
import {injectPixel} from './injectPixel.js'
import {docUrl} from './docUrl.js'
import {getMeta} from './getMeta.js'
import {getLink} from './getLink.js'
import {extend} from './extend.js'
import {isArray} from './isArray.js'
import {inArray} from './inArray.js'
import {toArray} from './toArray.js'
import {indexOf} from './indexOf.js'
import {unique} from './unique.js'
import {iframeType} from './iframeType.js'
import {iframeEle} from './iframeEle.js'
import {iframeTop} from './iframeTop.js'
import {getTopWin} from './getTopWin.js'
import {isolated} from './isolated.js'
import {tyntIds} from './tyntIds.js'
import {getPubId} from './getPubId.js'
import {countIds} from './countIds.js'
import {_log} from './_log.js'
import {log} from './log.js'
import {clog} from './clog.js'
import {callIcU} from './callIcU.js'
import {callIcCb} from './callIcCb.js'
import {callIc} from './callIc.js'
import {callDeb} from './callDeb.js'
import {callDebX} from './callDebX.js'
import {jsonDecode} from './jsonDecode.js'
import {getCookie} from './getCookie.js'
import {trim} from './trim.js'
import {trunc} from './trunc.js'
import {when} from './when.js'
import {prob} from './prob.js'
import {on} from './on.js'
import {off} from './off.js'
import {pageUrl} from './pageUrl.js'
import {clientHints} from './clientHints.js'
import {getPrivacyParameters} from './getPrivacyParameters.js'
import {getUrlArgs} from './getUrlArgs.js'
import {inXOIframe} from './inXOIframe.js'
import {init} from './init.js'
import {inIframe} from './inIframe.js'
import {inSOIframe} from './inSOIframe.js'
import {H} from './H.js'
import {_t} from './_t.js'
import {_P} from './_P.js'
import {_ja} from './_ja.js'
// import {_w} from './_w.js'
import {_bb} from './_bb.js'
import {_Ea} from './_Ea.js'
import {_K} from './_K.js'
import {_Ga} from './_Ga.js'
import {_Fa} from './_Fa.js'
import {_W} from './_W.js'
import {_xb} from './_xb.js'
import {_yb} from './_yb.js'
import {_Wa} from './_Wa.js'
import {_zb} from './_zb.js'
import {_Ab} from './_Ab.js'
import {_Cb} from './_Cb.js'
import {_Db} from './_Db.js'
import {_Fb} from './_Fb.js'
import {_Eb} from './_Eb.js'
import {_Gb} from './_Gb.js';
var Tynt = window.Tynt || [];

var e = window, g = document, p = {
        distro: 'TICF',
        id: 'TICF-' + new Date().getTime()
    };
;
if (document.body) {
    Date.now || (Date.now = function () {
        return new Date().getTime();
    });
    var f = {
            _maxRef: 600,
            _idMacro: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            init: function () {
                this._icUrl = p.protocol + (Tynt.e || '') + 'ic.tynt.com';
                this._debUrl = p.protocol + (Tynt.e || '') + 'de.tynt.com/deb/v2';
                this._sicUrl = p.protocol + (Tynt.e || '') + 'cdn-sic.33across.com/1/javascripts/sic.js';
                this._apUrl = p.protocol + (Tynt.e || '') + 'cdn-ap.33across.com/javascripts/ap.js';
                this._chmob = this._chua = this._chuav = this._chm = this._chpv = this._chp = '';
                this.init.fbl = function (a, c) {
                    if (c)
                        for (var d = 0; d < c.length; ++d)
                            0 < d && (f[a] += ', '), f[a] += c[d].brand + ';v=' + c[d].version;
                };
                var a = navigator.userAgentData;
                'undefined' != typeof a && ('undefined' != typeof a.getHighEntropyValues && (this._chpv = 'pending', a.getHighEntropyValues([
                    'model',
                    'platformVersion',
                    'fullVersionList'
                ]).then(function (a) {
                    f._chm = a.model;
                    f._chpv = a.platformVersion;
                    f.init.fbl('_chuav', a.fullVersionList);
                })), this._chp = a.platform, this._chmob = a.mobile, this.init.fbl('_chua', a.brands));
            },
            _imgs: [],
            newEle: newEle,
            injectScript: injectScript,
            injectSicScript: injectSicScript,
            injectApolloScript: injectApolloScript,
            injectSicIframe: injectSicIframe,
            insertEle: insertEle,
            eleId: eleId,
            injectPixel: injectPixel,
            docUrl: docUrl,
            getMeta: getMeta,
            getLink: getLink,
            extend: extend,
            isArray: isArray,
            inArray: inArray,
            toArray: toArray,
            indexOf: indexOf,
            unique: unique,
            iframeType: iframeType,
            iframeEle: iframeEle,
            iframeTop: iframeTop,
            getTopWin: getTopWin,
            isolated: isolated,
            tyntIds: tyntIds,
            getPubId: getPubId,
            countIds: countIds,
            _log: _log,
            log: log,
            clog: clog,
            callIcU: callIcU,
            callIcCb: callIcCb,
            callIc: callIc,
            callDeb: callDeb,
            callDebX: callDebX,
            jsonDecode: jsonDecode,
            getCookie: getCookie,
            trim: trim,
            trunc: trunc,
            when: when,
            prob: prob,
            on: on,
            off: off,
            pageUrl: pageUrl,
            clientHints: clientHints,
            getPrivacyParameters: getPrivacyParameters,
            getUrlArgs: getUrlArgs
        }, ha = {
            uspString: null,
            init: function () {
                var a = this, b = function () {
                        for (var a = window, b; !b;) {
                            try {
                                a.frames.__uspapiLocator && (b = a);
                            } catch (c) {
                            }
                            if (a === window.top)
                                break;
                            a = a.parent;
                        }
                        var d = {};
                        e.__uspapi = function (a, c, e) {
                            if (b) {
                                var l = 'usp-' + Math.random();
                                a = {
                                    __uspapiCall: {
                                        command: a,
                                        callId: l,
                                        version: c
                                    }
                                };
                                d[l] = e;
                                b.postMessage(a, '*');
                            } else
                                e({ msg: '__uspapi not found' }, !1);
                        };
                        f.on(window, 'message', function (a) {
                            var b = a.data;
                            if ('string' === typeof a.data)
                                try {
                                    b = JSON.parse(a.data);
                                } catch (c) {
                                }
                            b.__uspapiReturn && (a = b.__uspapiReturn, d[a.callId](a.returnValue, a.success), delete d[a.callId]);
                        }, !1);
                    }, c = function () {
                        e.__uspapi('getUSPData', 1, function (b, c) {
                            c && (a.uspString = b.uspString);
                        });
                    };
                e.__uspapi || b();
                try {
                    c();
                } catch (d) {
                    b(), c();
                }
                Tynt.getUspString = function () {
                    return a.uspString;
                };
                Tynt.getConsentString = function () {
                    return null;
                };
            }
        }, k = {
            gppSid: [],
            gppString: null,
            gppPromise: null,
            cmpWindow: null,
            cmpFound: !1,
            timeoutMs: 10000,
            findCmpWindow: function () {
                for (var a = window, b = null; !b;) {
                    try {
                        a.frames.__gppLocator && (b = a);
                    } catch (c) {
                    }
                    if (a === window.top)
                        break;
                    a = a.parent;
                }
                return k.cmpWindow = b;
            },
            createCmpProxy: function () {
                var a = {};
                e.__gpp = function (b, c, d, e) {
                    if (k.cmpWindow) {
                        var f = '33x-gpp-' + Math.random();
                        b = {
                            __gppCall: {
                                command: b,
                                parameter: d,
                                version: e,
                                callId: f
                            }
                        };
                        'function' == typeof c && (a[f] = c);
                        k.cmpWindow.postMessage(b, '*');
                    } else
                        'function' == typeof c && c('__gppLocator not found', !1);
                };
                f.on(window, 'message', function (b) {
                    var c = b.data;
                    if ('string' === typeof b.data)
                        try {
                            c = JSON.parse(b.data);
                        } catch (d) {
                            c = null, f.log('JSON.parse exception:', b.data);
                        }
                    c && c.__gppReturn && (b = c.__gppReturn, a[b.callId](b.returnValue, b.success), delete a[b.callId]);
                }, !1);
            },
            isAppSec: function (a) {
                return a && Array.isArray(a.applicableSection) && 0 < a.applicableSection.length && 0 !== a.applicableSection[0];
            },
            isAppSecs: function (a) {
                return a && Array.isArray(a.applicableSections) && 0 < a.applicableSections.length && 0 !== a.applicableSections[0];
            },
            getApplicableSections: function (a) {
                return k.isAppSecs(a) ? a.applicableSections : k.isAppSec(a) ? a.applicableSection : [];
            },
            startListening: function () {
                f.log('startListening');
                var a = e.__gpp('addEventListener', k.handleEvent);
                a && f.log('startListening, event returned:', a);
                a && a.pingData && '1.1' != a.pingData.gppVersion && k.handleEvent(a);
            },
            handleEvent: function (a) {
                if (a && a.pingData) {
                    var b = a.pingData;
                    f.log('handleEvent', b.gppVersion, a);
                    'loaded' == b.cmpStatus && ('1.1' == b.gppVersion ? b.gppString && b.applicableSections && k.receiveData(b) : k.receiveData(e.__gpp('getGPPData')));
                } else
                    f.log('handleEvent:', a);
            },
            nullData: function () {
                return {
                    gpp: null,
                    gppSid: [],
                    usp: 'function' === typeof Tynt.getUspString ? Tynt.getUspString() : null,
                    coppa: null,
                    gdpr: null
                };
            },
            init: function () {
                Tynt.getPrivacySignals = function () {
                    null == k.gppPromise && (k.gppPromise = new Promise(function (a, c) {
                        var d = null;
                        k.cmpFound ? d = setTimeout(function () {
                            f.log('_gpp timed-out after ' + k.timeoutMs / 1000 + ' seconds.');
                            a(k.nullData());
                        }, k.timeoutMs) : a(k.nullData());
                        k.receiveData = function (c) {
                            c && (k.gppString = c ? c.gppString : null, k.gppSid = k.getApplicableSections(c), null != k.gppString && (clearTimeout(d), a({
                                gpp: 'string' === typeof k.gppString ? k.gppString : null,
                                gppSid: k.gppSid,
                                usp: 'function' === typeof Tynt.getUspString ? Tynt.getUspString() : null,
                                coppa: null,
                                gdpr: null
                            })));
                        };
                    }));
                    return k.gppPromise;
                };
                k.cmpFound = 'function' === typeof e.__gpp;
                if (!k.cmpFound) {
                    var a = e.location.search;
                    'object' === typeof u && 0 < a.indexOf('__tcgppver=1.0') ? u.init() : 'object' === typeof v && 0 < a.indexOf('__tcgppver=1.1') && v.init();
                    k.cmpFound = 'function' === typeof e.__gpp;
                }
                Tynt.getPrivacySignals().then(function (a) {
                    f.log('getPrivacySignals resolve:', a);
                }, function (a) {
                    f.log('getPrivacySignals reject:', a);
                });
                'function' === typeof e.__gpp ? k.startListening() : p.inIframe() && p.isolated ? null == k.findCmpWindow() ? f.log('CMP API not found in frame ancestors.') : (k.cmpFound = !0, k.createCmpProxy(), k.startListening()) : f.log('CMP API not found in _window.');
            }
        }, u = {
            pingData: {
                gppVersion: '1.0',
                cmpStatus: 'stub',
                cmpDisplayStatus: 'hidden',
                supportedAPIs: [
                    'tcfeuv2',
                    'tcfcav1',
                    'uspv1'
                ],
                cmpId: 0
            },
            mockEvent: function (a, b) {
                var c = {
                    eventName: a,
                    listenerId: 0,
                    data: b,
                    pingData: u.pingData
                };
                f.log('mockEvent', a, b, u.pingData);
                for (var d = 0; d < e.__gpp.events.length; d++)
                    'function' === typeof e.__gpp.events[d].callback && (c.listenerId = d, e.__gpp.events[d].callback(c, !0));
            },
            init: function () {
                e.__gpp_addFrame_33 = function (a) {
                    if (!e.frames[a])
                        if (document.body) {
                            var b = document.createElement('iframe');
                            b.style.cssText = 'display:none';
                            b.name = a;
                            document.body.appendChild(b);
                        } else
                            e.setTimeout(e.__gpp_addFrame_33, 10, a);
                };
                e.__gpp_mock_33 = function () {
                    var a = arguments;
                    if (!a.length)
                        return null;
                    var b = a[0], c = 1 < a.length ? a[1] : null, a = 2 < a.length ? a[2] : null, d = null;
                    if ('ping' === b)
                        d = u.pingData;
                    else if ('addEventListener' === b)
                        b = ++e.__gpp.lastId, e.__gpp.events.push({
                            id: b,
                            callback: c,
                            parameter: a
                        }), d = {
                            eventName: 'listenerRegistered',
                            listenerId: b,
                            data: !0,
                            pingData: u.pingData
                        };
                    else if ('removeEventListener' === b) {
                        c = !1;
                        for (b = 0; b < e.__gpp.events.length; b++)
                            if (e.__gpp.events[b].id == a) {
                                e.__gpp.events[b].splice(b, 1);
                                c = !0;
                                break;
                            }
                        d = {
                            eventName: 'listenerRemoved',
                            listenerId: a,
                            data: c,
                            pingData: u.pingData
                        };
                    } else
                        'getGPPData' === b ? 'loaded' == u.pingData.cmpStatus ? (c = f.getUrlArgs(), a = c.__tcgppstr ? c.__tcgppstr : 'DBABzw~1YNY~BVQqAAAAAgA', c = (c.__tcgppsid ? c.__tcgppsid : '6,7').split(',').map(function (a) {
                            return Number(a);
                        }), d = {
                            sectionId: 3,
                            gppVersion: 1,
                            sectionList: c,
                            applicableSections: c,
                            gppString: a,
                            pingData: u.pingData
                        }) : d = null : d = null;
                    return d;
                };
                e.__gpp_msgHandler_33 = function (a) {
                    var b, c = 'string' === typeof a.data;
                    try {
                        b = c ? JSON.parse(a.data) : a.data;
                    } catch (d) {
                        b = null;
                    }
                    if ('object' === typeof b && null !== b && '__gppCall' in b) {
                        var l = b.__gppCall;
                        e.__gpp(l.command, function (b, d) {
                            var e = {
                                __gppReturn: {
                                    returnValue: b,
                                    success: d,
                                    callId: l.callId
                                }
                            };
                            a.source.postMessage(c ? JSON.stringify(e) : e, '*');
                        }, 'parameter' in l ? l.parameter : null, 'version' in l ? l.version : 1);
                    }
                };
                e.__gpp = e.__gpp_mock_33;
                e.__gpp.queue = [];
                e.__gpp.events = [];
                e.__gpp.lastId = 0;
                e.addEventListener('message', e.__gpp_msgHandler_33, !1);
                e.__gpp_addFrame_33('__gppLocator');
                setTimeout(function () {
                    u.pingData.cmpStatus = 'loading';
                    u.mockEvent('cmpStatus', 'loading');
                    setTimeout(function () {
                        u.pingData.cmpId = 3333;
                        u.pingData.cmpStatus = 'loaded';
                        u.mockEvent('cmpStatus', 'loaded');
                    }, 1000);
                }, 1000);
            }
        }, v = {
            pingData: {
                gppVersion: '1.1',
                cmpStatus: 'stub',
                cmpDisplayStatus: 'hidden',
                signalStatus: 'not ready',
                supportedAPIs: [
                    '2:tcfeuv2',
                    '5:tcfcav1',
                    '6:uspv1'
                ],
                cmpId: 0,
                sectionList: [],
                applicableSections: [-1],
                gppString: '',
                parsedSections: {}
            },
            mockEvent: function (a, b) {
                var c = {
                    eventName: a,
                    listenerId: 0,
                    data: b,
                    pingData: v.pingData
                };
                f.log('mockEvent', a, b, v.pingData);
                for (var d = 0; d < e.__gpp.events.length; d++)
                    'function' === typeof e.__gpp.events[d].callback && (c.listenerId = d, e.__gpp.events[d].callback(c, !0));
            },
            init: function () {
                e.__gpp_addFrame_33 = function (a) {
                    if (!e.frames[a])
                        if (document.body) {
                            var b = document.createElement('iframe');
                            b.style.cssText = 'display:none';
                            b.name = a;
                            document.body.appendChild(b);
                        } else
                            e.setTimeout(e.__gpp_addFrame_33, 10, a);
                };
                e.__gpp_mock_33 = function () {
                    var a = arguments;
                    if (a.length) {
                        var b = a[0], c = 1 < a.length ? a[1] : null, a = 2 < a.length ? a[2] : null;
                        if ('ping' === b)
                            'function' === typeof c && c(v.pingData, !0);
                        else if ('addEventListener' === b)
                            b = ++e.__gpp.lastId, e.__gpp.events.push({
                                id: b,
                                callback: c,
                                parameter: a
                            }), 'function' === typeof c && c({
                                eventName: 'listenerRegistered',
                                listenerId: b,
                                data: !0,
                                pingData: v.pingData
                            }, !0);
                        else if ('removeEventListener' === b) {
                            for (var b = !1, d = 0; d < e.__gpp.events.length; d++)
                                if (e.__gpp.events[d].id == a) {
                                    e.__gpp.events[d].splice(d, 1);
                                    b = !0;
                                    break;
                                }
                            'function' === typeof c && c(b, !0);
                        }
                    }
                };
                e.__gpp_msgHandler_33 = function (a) {
                    var b, c = 'string' === typeof a.data;
                    try {
                        b = c ? JSON.parse(a.data) : a.data;
                    } catch (d) {
                        b = null;
                    }
                    if ('object' === typeof b && null !== b && '__gppCall' in b) {
                        var l = b.__gppCall;
                        e.__gpp(l.command, function (b, d) {
                            var e = {
                                __gppReturn: {
                                    returnValue: b,
                                    success: d,
                                    callId: l.callId
                                }
                            };
                            a.source.postMessage(c ? JSON.stringify(e) : e, '*');
                        }, 'parameter' in l ? l.parameter : null, 'version' in l ? l.version : '1.1');
                    }
                };
                e.__gpp = e.__gpp_mock_33;
                e.__gpp.queue = [];
                e.__gpp.events = [];
                e.__gpp.lastId = 0;
                e.addEventListener('message', e.__gpp_msgHandler_33, !1);
                e.__gpp_addFrame_33('__gppLocator');
                setTimeout(function () {
                    v.mockEvent('signalStatus', 'not ready');
                    setTimeout(function () {
                        v.pingData.cmpStatus = 'loading';
                        v.mockEvent('cmpStatus', 'loading');
                        setTimeout(function () {
                            var a = f.getUrlArgs(), b = a.__tcgppstr ? a.__tcgppstr : 'DBABzw~1YNY~BVQqAAAAAgA', a = (a.__tcgppsid ? a.__tcgppsid : '6,7').split(',').map(function (a) {
                                    return Number(a);
                                });
                            v.pingData.sectionList = a;
                            v.pingData.applicableSections = a;
                            v.pingData.gppString = b;
                            v.pingData.cmpId = 3333;
                            v.pingData.cmpStatus = 'loaded';
                            v.mockEvent('cmpStatus', 'loaded');
                            setTimeout(function () {
                                v.pingData.signalStatus = 'ready';
                                v.mockEvent('signalStatus', 'ready');
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }
        }, Ba = 1, U = 2, ya = 0, ga = 3, Aa = 4, za = 5;
    p.type = 0;
    p.inIframe = inIframe;
    p.inSOIframe = inSOIframe;
    p.inXOIframe = inXOIframe;
    p.init = init;
    if ('undefined' === typeof A)
        var A = {
            afterIpBlockCheck: [],
            afterDynamicConfig: [],
            afterCheckModules: [],
            afterProtectTynt: [],
            afterDynamicConfigAndDocumentLoaded: []
        };
    var B = function (a, b) {
        if ('undefined' !== typeof A && A.hasOwnProperty(a) && A[a].hasOwnProperty('length'))
            for (var c = 0; c < A[a].length; c += 1)
                if ('function' === typeof A[a][c])
                    A[a][c](b);
    };
    Tynt.settings || (Tynt.settings = {
        _error: 0,
        _pending: !1,
        _pubId: null,
        _scUrl: 'https://' + (Tynt.e || '') + 'sc.tynt.com/script/sc/',
        _settings: {},
        _copy: null,
        isReady: function () {
            return 0 === this._error && null != this._copy;
        },
        get: function () {
            return this._settings;
        },
        pubId: function () {
            null == this._pubId && (this._pubId = f.getPubId());
            return this._pubId;
        },
        download: function () {
            var a, b;
            D.adapt(Tynt.cmd);
            this._pending || this.isReady() || (a = this, Tynt.getConfig = function () {
                return a.isReady() ? a._copy : null;
            }, Tynt.sc = function (c) {
                clearTimeout(b);
                a._error = c.fl || 0;
                0 === a._error ? (a._init(c), f.log('Settings downloaded', a._copy), Tynt.cmdFlush()) : f.log('ERROR: Settings download failed: ', a._error);
                a._pending = !1;
            }, this.pubId() && (f.log('Downloading settings'), this._pending = !0, f.injectScript(this._scUrl + this.pubId() + '.js'), b = setTimeout(function () {
                Tynt.sc({ fl: 1 });
            }, 10000)));
        },
        _init: function (a) {
            a = a || {};
            !1 !== a.d ? (Tynt.o && f.extend(a, Tynt.o), this._ovr(a)) : a = Tynt.i || e.tyntVariables || {};
            this._def();
            f.extend(this._settings, a);
            this._val();
            this._copy = 'undefined' !== typeof JSON && 'function' == typeof JSON.parse && 'function' == typeof JSON.stringify ? JSON.parse(f.jsonDecode(this._settings)) : this._settings;
        },
        _ovr: function (a) {
            if (f.isArray(Tynt.overrides))
                for (var b = 0; b < Tynt.overrides.length; b++)
                    'object' == typeof Tynt.overrides[b] && f.extend(a, Tynt.overrides[b]);
        },
        _def: function () {
            this._settings.d = !0;
            this._settings.a = !0;
            this._settings.ad = !0;
            this._settings.aw = 8;
            this._settings.cc = 0;
            this._settings.b = !1;
            this._settings.ap = 'Read more:';
            this._settings.as = '';
            this._settings.st = !1;
            this._settings.su = !0;
            this._settings.w = !1;
            this._settings.f = !1;
            this._settings.ss = '';
        },
        _val: function () {
            this._settings.a || (this._settings.a = !1);
            6 < this._settings.cc && (this._settings.cc = 0);
            8 > this._settings.aw && (this._settings.aw = 8);
            this._settings.su || (this._settings.su = !1);
            this._settings.w && !this._twUser(this._settings.w) && (this._settings.w = !1);
            this._settings.f && !this._fbUser(this._settings.f) && (this._settings.f = !1);
            0 < this._error && (this._settings.a = !1, this._settings.b = !1);
        },
        _twUser: function (a) {
            return /^\w{1,15}$/.test(a || '');
        },
        _fbUser: function (a) {
            return /^[\w.]{2,}$/.test(a || '');
        }
    });
    'undefined' == typeof Tynt.cmd && (Tynt.cmd = []);
    D.prototype.push = function () {
        D.adapt(arguments);
        D.exec(arguments);
    };
    D.exec = function (a) {
        f.log('Executing commands', a);
        try {
            for (var b = 0; b < a.length; ++b)
                if ('function' == typeof a[b])
                    a[b]();
                else
                    'object' == typeof a[b] && 'function' == typeof a[b].fn && a[b].fn();
        } catch (c) {
            f.log('ERROR: Tynt.cmd failed: ', c);
        }
    };
    D.adapt = function (a) {
        var b, c;
        if (f.isArray(a))
            for (b = 0; b < a.length; ++b)
                'object' == typeof a[b] && (c = a[b].publisherId, 'string' != typeof c || 22 != c.length || f.inArray(Tynt, c) || (Tynt.push(c), f.log('Adapted', c)));
    };
    'undefined' == typeof Tynt.cmdFlush && (Tynt.cmdFlush = function () {
        var a = Tynt.cmd;
        if (!a || f.isArray(a))
            Tynt.cmd = new D(), a && 0 < a.length && D.exec(a);
    });
    Tynt.ads || (Tynt.ads = {
        _slots: [],
        display: function (a, b, c, d) {
            'string' == typeof a ? this.addSlot(new Za(a, b, c, d)) : f.log('ERROR: Invalid product');
        },
        getSlot: function (a) {
            return (a = this.getSlots(a)) && 0 < a.length ? a[0] : null;
        },
        getSlots: function (a) {
            for (var b = [], c = 0; c < this._slots.length; ++c)
                this._slots[c].sicWindow === a && b.push(this._slots[c]);
            return 0 < b.length ? b : null;
        },
        addSlot: function (a) {
            var b = null, c = Tynt.settings.get(), d = 'Injecting sic/' + a.product;
            if (c && c.sic)
                if (a.sicWindow = window, 'inview' == a.product && this.ivReady(c, a))
                    this.ivDone(!0), this._slots.push(a), f.log(d, a), f.injectSicScript(), f.callDebX(null, !0);
                else {
                    if ('inpage' == a.product && this.ipReady(c) || 'infeed' == a.product && this.ifReady(c))
                        a.targetId && (b = document.getElementById(a.targetId)), p.inIframe() ? (this._setIframeId(a), this._slots.push(a), f.log(d, a), f.injectSicScript(b)) : (this._slots.push(a), f.log(d + ' into iframe', a), f.injectSicIframe(a, b, 'infeed' == a.product ? { position: 'absolute' } : null));
                }
            else
                f.log('ERROR: settings or .sic undefined', c);
        },
        _setIframeId: function (a) {
            var b = f.iframeTop();
            b && (a.iframeId = f.eleId(b));
        },
        ivDone: function (a) {
            !0 === a && (e._33Across.state.ivDone = !0);
            return e._33Across.state.ivDone;
        },
        ivReady: function (a, b) {
            var c = !1, d;
            !this.ivDone() && f.isArray(a.p) && f.inArray(a.p, 'sic_v1') && a.sic.products && a.sic.products.inview && (d = a.sic.products.inview.install_method || a.sic.install_method, 'TI' == b.distro ? 'On Page' == d && (c = !0) : 'On Page' != d && (c = !0));
            return c;
        },
        ipReady: function (a) {
            return a.sic.products && a.sic.products.siab;
        },
        ifReady: function (a) {
            return a.sic.products && a.sic.products.infeed;
        },
        _events: [],
        on: function (a, b) {
            this._events.push(new xa(a, b, !1));
        },
        once: function (a, b) {
            this._events.push(new xa(a, b, !0));
        },
        off: function (a, b) {
            for (var c = 0; c < this._events.length; ++c)
                this._events[c] && this._events[c].type === a && this._events[c].fn === b && (this._events[c] = null);
        },
        emit: function (a) {
            var b, c;
            for (b = 0; b < this._events.length; ++b)
                this._events[b] && this._events[b].type === a && (c = this._events[b], c.once && (this._events[b] = null), c.fn.apply(c, Array.prototype.slice.call(arguments, 1)));
        },
        _targeting: {},
        setTargeting: function (a, b) {
            this._targeting[a] = b;
        },
        getTargeting: function (a) {
            return this._targeting[a];
        },
        getTargetingKeys: function () {
            return Object.keys(this._targeting);
        }
    });
    T.options = {
        strictMode: !1,
        key: 'source protocol authority userInfo user password host port relative path directory file query anchor'.split(' '),
        q: {
            name: 'queryKey',
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
    p.init();
    var q = g.body, x = g.documentElement, V = e.eval('/*@cc_on!@*/false'), Ca = function (a, b) {
            for (var c = '', d = 0; d < b; d++)
                c += a;
            return c;
        }, E = Ca('a', 50), F = (Tynt.e || '') + 'ic.tynt.com', ab = (Tynt.e || '') + 'cdn.tynt.com', ia = F + '/b/s', Da = (Tynt.e || '') + 'platform.33across.com', t = _t, P = _P, ja = _ja, w = _w, bb = _bb, Ea = _Ea, K = _K, Ga = _Ga, Fa = _Fa, W = _W, X = f.trim((g.title || e.location.hostname).toString()).replace(new RegExp(e.location.hash, 'g'), ''), Ha = function (a) {
            var b = a.trace_type;
            delete a.trace_type;
            var c = a.g;
            delete a.g;
            for (var d = [], e = 'id wc f w h t c'.split(' '), f = 0; f < e.length; f++) {
                var g = e[f], n = a[g];
                n && d.push([
                    g,
                    encodeURIComponent(n).replace(/\'/g, '%27')
                ]);
                delete a[g];
            }
            for (var h in a)
                a.hasOwnProperty(h) && (e = a[h]) && d.push([
                    h,
                    encodeURIComponent(e).replace(/\'/g, '%27')
                ]);
            a = [];
            var f = 2048 - ((p.protocol + F + '/a/t/x#?').length + (3 + c.length) + 5), g = d.length, r = n = 0, k = 0, m, Y, q, t, I = 0;
            for (a[I] = {
                    g: c,
                    tp: null
                }; n < g && 35 > a.length;)
                m = d[n][0], h = d[n][1], q = m.length + 2, Y = f - q - r, 0 < Y ? (e = h.substring(k, k + Y), t = e.slice(-2).indexOf('%'), -1 < t && (e = h.substring(k, k + Y - 2 + t), r += t + 2), r += e.length + q, k += e.length, a[I][m] = e) : r = f, r >= f && (a[++I] = {
                    g: c,
                    p: I
                }, r = 0), k >= h.length && (n++, k = 0);
            a[0].tp = a.length;
            w(F + '/b/t/' + b + '?' + Ea(a[0]));
            for (c = 1; c < a.length; c++)
                w(F + '/b/x/' + b + '?' + Ea(a[c]));
        }, ka = function () {
            var a = [];
            return function (b) {
                for (var c = a.length - 1; 0 <= c; c--)
                    if (a[c] == b)
                        return !1;
                a.unshift(b);
                3 < a.length && a.pop();
                return !0;
            };
        }, cb = ka(), db = ka(), eb = function (a) {
            var b, c = function (a) {
                    e.removeEventListener('blur', c, !1);
                    la(b);
                    return !0;
                };
            return function (a) {
                b = a.target || a.srcElement;
                e.removeEventListener('blur', c, !1);
                'IMG' == b.nodeName && 'A' != b.parentNode.nodeName && (e.addEventListener('blur', c, !1), setTimeout(function () {
                    g.removeEventListener('blur', c, !1);
                }, 10000));
                return !0;
            };
        }(), Ia = function (a) {
            la(a.target || a.srcElement, !0);
        }, Z, Ja = function (a) {
            a = a.target || a.srcElement;
            Z = 'IMG' == a.nodeName ? a : null;
        }, ma = function (a) {
            var b = function (a) {
                    return 'number' == typeof a.pageX ? {
                        x: a.pageX - (x.scrollLeft ? x.scrollLeft : q.scrollLeft),
                        y: a.pageY - (x.scrollTop ? x.scrollTop : q.scrollTop)
                    } : {
                        x: a.clientX,
                        y: a.clientY
                    };
                }, c = function (a) {
                    a = b(a);
                    return 0 >= a.x || 0 >= a.y || a.x >= q.clientWidth || a.y >= q.clientHeight;
                }, d = function (a) {
                    a = b(a);
                    return 0 >= a.x || 0 >= a.y || a.x >= x.clientWidth || a.y >= x.clientHeight;
                }, e = function (a) {
                    return '#document' == a.target.nodeName;
                }, f = function (a) {
                    a = b(a);
                    return 4 >= a.x || 4 >= a.y || a.x >= x.clientWidth - 4 || a.y >= x.clientHeight - 4;
                }, h = function (a) {
                    h = navigator.userAgent.match('MSIE') ? g.compatMode && -1 != g.compatMode.indexOf('CSS') ? d : c : navigator.userAgent.match('Firefox') ? e : f;
                    h(a);
                };
            return function (a) {
                Z && h(a) && (la(Z), Z = null);
                return !0;
            };
        }(), Ka = function () {
            return /tracer=test|tracer=no_tracing|disableTracer=/.test(e.location.href) || /disableTracer=y/.test(g.cookie);
        }, La = function () {
            if (g.referrer) {
                var a = e.location.hostname;
                return T(g.referrer).host === T(a).host;
            }
            return !1;
        };
    Tynt.ci = function () {
        var a;
        return function (b, c) {
            a = c || a;
            var d = ia + [
                '?ci=',
                b,
                '&id=',
                E,
                '&g=',
                a,
                '&r=',
                encodeURIComponent(g.referrer),
                '&ts=',
                Date.now()
            ].join('');
            w(d);
        };
    }();
    Tynt.st = function () {
        var a;
        return function (b, c, d, f) {
            a = d || a;
            b = [
                ia,
                '?',
                encodeURIComponent(b),
                '=',
                encodeURIComponent(c),
                '&id=',
                E,
                '&g=',
                a,
                '&r=',
                encodeURIComponent(g.referrer),
                '&href=',
                encodeURIComponent(e.location.href),
                '&ts=',
                Date.now()
            ];
            c = '';
            if (f) {
                c = [];
                d = '';
                for (var z in f)
                    f.hasOwnProperty(z) && (c.push(d, encodeURIComponent(z), '=', encodeURIComponent(f[z])), d = '&');
                c = '&' + c.join('');
            }
            w(b.join('') + c);
        };
    }();
    var na;
    Tynt.c ? na = function () {
    } : (Tynt.c = !0, Tynt.m = Tynt.m || [], Tynt.n = Tynt.n || [], na = function () {
        var a = !0, b, c = function (b, c) {
                var d = {
                    id: E,
                    wc: W(c),
                    c: c,
                    f: a ? 1 : 0,
                    t: X
                };
                f.extend(d, b);
                a = !1;
                Ha(d);
            };
        e.addEventListener ? (navigator.userAgent.match(/Firefox\/2\b/) || q.addEventListener('copy', Ia, !1), e.addEventListener('mousedown', Ja, !1), e.addEventListener('dragleave', ma, !1), e.addEventListener('dragexit', ma, !1), g.addEventListener('contextmenu', eb, !1)) : (q.attachEvent('oncopy', Ia), g.getElementsByTagName('html')[0].attachEvent('ondragleave', ma), q.attachEvent('onmousedown', Ja));
        -1 !== g.cookie.indexOf('tracertraffic=') && (g.referrer && -1 != g.referrer.indexOf(e.location.host) || P('tracertraffic=0', 'expires=Thu, 01 Jan 1970 00:00:00 GMT'));
        f.callIc();
        var d = [
            15000,
            15000,
            15000,
            15000
        ];
        'function' === typeof Tynt.TIL ? f.callDeb(3, d, !0) : f.callDeb(5, d, !0);
        return function (a, d) {
            if (!g.getElementById('tyntSh')) {
                var h, n, k;
                d && (g.selection && g.selection.createRange ? (n = g.selection.createRange(), k = n.duplicate(), h = n.text) : (n = e.getSelection(), k = 0 < n.rangeCount && n.getRangeAt(0), h = n.toString()));
                var r = a.src;
                if (r && !h && db(r)) {
                    n = {
                        trace_type: 3,
                        g: K(r),
                        w: a.width,
                        h: a.height
                    };
                    for (k = 0; k < Tynt.n.length; k++)
                        Tynt.n[k](n, r);
                    c(n, r);
                } else if (h && f.trim(h).length && 'TEXTAREA' != a.nodeName && 'INPUT' != a.nodeName) {
                    r = cb(h);
                    n = { trace_type: 1 };
                    r && (b = K(h));
                    n.g = b;
                    for (var m = !0, q = 0; q < Tynt.m.length; q++)
                        m = m && Tynt.m[q](n, h, k, r);
                    r && m && c(n, h);
                }
            }
        };
    });
    var aa = function (a) {
            a = a.charCodeAt(0);
            return 3584 <= a && 3711 >= a || 11904 <= a && 12591 >= a || 12688 <= a && 40959 >= a || 63744 <= a && 64255 >= a || 65072 <= a && 65103 >= a || 131072 <= a && 173791 >= a || 194560 <= a && 195103 >= a;
        }, Ma = function (a) {
            a = a.getElementsByTagName('script');
            for (var b = a.length - 1; 0 <= b; b--) {
                var c = a[b];
                c.parentNode.removeChild(c);
            }
        }, M = function (a, b) {
            var c = f.docUrl(), c = c && !1 !== h.c ? c : e.location.href, c = c.replace(/#(i|a)xzz=?(.*)$/g, ''), c = c + '#' + ('ixzz' + a);
            b && (c += '&' + b);
            return c;
        }, oa = function (a) {
            return a.replace(/^\s+|\s+$/g, '');
        }, pa = g.defaultView, qa = V ? !g.compatMode || -1 == g.compatMode.indexOf('CSS') : !1, fb = V ? !('XMLHttpRequest' in e) : !1, ra = function (a) {
            ra = 'undefined' != typeof pa && 'undefined' != typeof pa.getComputedStyle ? function (a) {
                return pa.getComputedStyle(a, '');
            } : function (a) {
                return a.currentStyle;
            };
            return ra(a);
        }, gb = {
            t: 3,
            p: 6,
            w: 7,
            f: 8,
            i: 9,
            l: 10,
            g: 11,
            ssbt: 12,
            ssbf: 13,
            ssbp: 14,
            ssbl: 15,
            ssbg: 16
        }, Na = function (a) {
            var b = new Date(Date.now() + 86400000);
            P('tracertraffic=' + a.toString(), 'expires=' + b.toUTCString());
        }, hb = function () {
            if (Tynt.v)
                return !1;
            Tynt.v = !0;
            var a = e.location.href.match(/ixzz=?([^?&$#]*)/);
            if ((a = (a && 2 == a.length ? a[1] : null) || Tynt.h) && !La()) {
                var b;
                (b = e.location.href.match(/ixzz=?([^?$#]*)/)) ? (b = b[1].match(/&([^?$]*)/), b = Tynt.k ? Tynt.k.charAt(1) : b && b[1] ? b[1] : null) : b = null;
                a = F + '/b/v' + [
                    '?g=',
                    a,
                    /\?trace_owner_view/.test(e.location.href) ? '&o=y' : '',
                    '&id=',
                    E,
                    b ? '&s=' + b : '',
                    '&r=',
                    encodeURIComponent(g.referrer),
                    '&ts=',
                    Date.now()
                ].join('');
                w(a);
                Na(gb[b] || 1);
                return !0;
            }
            return !1;
        }, J = p.protocol + (Tynt.e || '') + 'cdn.tynt.com/images/ss/', ib = p.protocol + 'cdn.tynt.com/close.html', Oa = 'undefined' !== typeof createImageMeme, jb = /Mobile|iP(hone|od|ad)|Android|BlackBerry|Tablet|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/, C = C || '', C = C + [
            '#tyntSh div,#tyntSh span,#tyntSh img,#tyntSh a,div#tyntSh{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1;background:0;text-align:left}#tyntSh img,#tyntSh span{display:inline}#tyntSh div,div#tyntSh{display:block}div#tyntSh{z-index:9999999;position:absolute;height:62px;margin:10px;overflow:visible;background:#FFF;border-radius:5px;text-align:center;box-shadow: 0 2px 6px rgba(0,0,0,0.5)}div#tyntShTr{margin:-11px auto 0 auto;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:11px solid #F1F1F1}img#tyntShTw,img#tyntShP,img#tyntShFb,img#tyntShLi,img#tyntShGp{cursor:pointer;height:28px;width:28px;margin:3px 3px 2px 3px;vertical-align:bottom}div#tyntShPTL,div#tyntShHFL{color:#888;text-decoration:none;margin:0 0 2px 0;background-color:#F1F1F1;padding:2px 4px;border-radius:5px 5px 0 0}div#tyntShHFL{text-align:right;border-radius:0 0 5px 5px;margin:2px 0 0 0}div#tyntShHFL,span#tyntShHFLs,div#tyntShPTL{font:normal 8px Arial}',
            'span#tyntShHFLs{cursor:pointer;' + (qa ? 'text-decoration:underline' : '') + '}',
            'span#tyntShHFLs:hover{color:#555;text-decoration:underline}div#tyntShCB{position:absolute;cursor:pointer;width:14px;height:14px;top:0;right:0;background-position:0 -14px;background-repeat:no-repeat}div#tyntShCB:hover{background-position: 0 0}'
        ].join(''), y = function () {
            var a, b;
            return function (c, d, e) {
                a = d || a;
                b = e || b;
                c = ia + [
                    '?w=',
                    c,
                    '&id=',
                    E,
                    '&g=',
                    a,
                    '&wc=',
                    b,
                    '&r=',
                    encodeURIComponent(g.referrer),
                    '&ts=',
                    Date.now()
                ].join('');
                w(c);
            };
        }(), ba = function () {
            return jb.test(navigator.userAgent || navigator.vendor || e.opera);
        }, N = function (a) {
            return -1 < (h.ss || '').indexOf(a);
        }, Pa = function () {
            return (h.ss || '').replace('p', '').replace('m', '').length;
        }, ca = function (a, b) {
            return b.length > a ? b.slice(0, a - 1) + '\u2026' : b;
        }, kb = function (a, b, c) {
            'undefined' === typeof c && (c = 'w');
            b = M(b, c);
            return b = ca(114, a) + ' ' + b;
        }, m = {
            words: 0,
            _content: '',
            guid: null,
            isBar: function (a) {
                return !!(a || '').toString().match(/ssb/);
            },
            getContentFor: function (a) {
                return m.isBar(a) ? '' : m._content;
            },
            setContent: function (a) {
                m._content = a;
            },
            getGuid: function () {
                return this.guid ? this.guid : K(e.location.toString());
            },
            twitter: function (a, b, c) {
                return t('img', {
                    src: J + 't.png',
                    title: 'tweet this',
                    id: a,
                    onclick: function (a) {
                        e.open(p.protocol + 'twitter.com/home?status=' + encodeURIComponent(kb(m.getContentFor(c), m.getGuid(), c)), 'tweet', 'width=723,height=251');
                        y(b, m.getGuid(), m.words);
                    }
                });
            },
            facebook: function (a, b, c) {
                return t('img', {
                    src: J + 'fb.png',
                    title: 'share on Facebook',
                    id: a,
                    onclick: function (a) {
                        a = [
                            'https://www.facebook.com/dialog/feed?app_id=158472647611546&link=',
                            encodeURIComponent(M(m.getGuid(), c)),
                            '&description=',
                            encodeURIComponent(ca(140, m.getContentFor(c))),
                            '&redirect_uri=',
                            encodeURIComponent(ib)
                        ].join('');
                        e.open(a, 'fbshare', 'width=985,height=450');
                        y(b, m.getGuid(), m.words);
                    }
                });
            },
            linkedin: function (a, b, c) {
                return t('img', {
                    src: J + 'li.png',
                    title: 'share on LinkedIn',
                    id: a,
                    onclick: function (a) {
                        a = [
                            p.protocol + 'www.linkedin.com/shareArticle?mini=true',
                            '&url=',
                            encodeURIComponent(M(m.getGuid(), c)),
                            '&title=',
                            X
                        ];
                        m.getContentFor(c) && (a.push('&summary='), a.push(encodeURIComponent(ca(255, m.getContentFor(c)))));
                        a = a.join('');
                        e.open(a, 'lishare', 'width=520,height=450');
                        y(b, m.getGuid(), m.words);
                    }
                });
            },
            googleplus: function (a, b, c) {
                return t('img', {
                    src: J + 'gp.png',
                    title: 'share on Google+',
                    id: a,
                    onclick: function (a) {
                        a = [
                            'https://plus.google.com/share?url=',
                            encodeURIComponent(M(m.getGuid(), c))
                        ].join('');
                        e.open(a, 'gpshare', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                        y(b, m.getGuid(), m.words);
                    }
                });
            },
            pinterest: function (a, b, c) {
            }
        }, sa = function (a, b, c) {
            var d = a.createElement('style');
            d.id = b;
            d.type = 'text/css';
            b = a.createTextNode(c);
            d.styleSheet ? d.styleSheet.cssText = b.nodeValue : d.appendChild(b);
            a.getElementsByTagName('head')[0].appendChild(d);
        }, Qa = function (a, b, c) {
            var d, f = function (a, b, c) {
                    m.guid = b;
                    m.setContent(a);
                    m.words = W(a);
                    if (!(g.getElementById('tyntSh') || 8 > m.words)) {
                        y(0, m.guid, m.words);
                        var f;
                        if (g.selection && g.selection.createRange) {
                            c = g.selection.createRange();
                            var l = qa ? 'offset' : 'bounding';
                            f = [];
                            f[0] = c[l + 'Left'] + (x.scrollLeft || q.scrollLeft);
                            f[1] = c[l + 'Top'] + (x.scrollTop || q.scrollTop);
                            f[2] = c.boundingHeight;
                        } else {
                            a = t('span', {}, { display: 'inline' });
                            b = c.startContainer;
                            var h = c.endContainer, k = c.endOffset;
                            try {
                                l = g.createRange();
                                l.setStart(h, k);
                                l.setEnd(h, k);
                                l.surroundContents(a);
                                var p, L, v, I, u, w, k = {
                                        top: 0,
                                        left: 0,
                                        bottom: 0
                                    }, G = a && a.ownerDocument;
                                G ? (u = G.documentElement, 'undefined' !== typeof a.getBoundingClientRect && (k = a.getBoundingClientRect()), w = 'scrollTo' in G && G.document ? G : 9 === G.nodeType ? G.defaultView || G.parentWindow : !1, p = k.top, L = k.left, v = k.right - k.left, I = k.bottom - k.top, 'fixed' != ra(a).position && (p += w.pageYOffset || u.scrollTop || 0, L += w.pageXOffset || u.scrollLeft || 0), p += u.clientTop || 0, L += u.clientLeft || 0, f = [
                                    L,
                                    p,
                                    v,
                                    I
                                ]) : f = null;
                                f[2] = a.offsetHeight;
                                a.parentNode.removeChild(a);
                                l.detach();
                                b.parentNode.normalize();
                                h.parentNode.normalize();
                            } catch (A) {
                            }
                            'undefined' != typeof e.getSelection().setBaseAndExtent && e.getSelection().setBaseAndExtent(c.startContainer, c.startOffset, c.endContainer, c.endOffset);
                        }
                        d.style.left = f[0] + 'px';
                        d.style.top = Math.max(f[1] + f[2], 3) + 'px';
                        q.insertBefore(d, q.firstChild);
                        H(q, 'mousedown', O);
                        H(q, 'touchstart', O);
                    }
                };
            (function () {
                g.getElementById('tyntShCSS') || sa(g, 'tyntShCSS', C);
                d = t('div', { id: 'tyntSh' }, { width: Math.max(80, 34 * Pa()) + 'px' });
                qa || d.appendChild(t('div', { id: 'tyntShTr' }));
                var a = t('div', {
                    id: 'tyntShPTL',
                    innerHTML: 'Powered by 33Across'
                });
                d.appendChild(a);
                a = t('div', { id: 'tyntShHFL' });
                a.appendChild(t('span', {
                    id: 'tyntShHFLs',
                    innerHTML: "'",
                    onclick: lb
                }));
                var b = t('div', {
                    id: 'tyntShCB',
                    title: 'close',
                    onclick: mb
                }, { backgroundImage: 'url(' + (J + 'x.png') + ')' });
                N('f') && d.appendChild(m.facebook('tyntShFb', 4, 'f'));
                N('t') && d.appendChild(m.twitter('tyntShTw', 3, 'w'));
                N('l') && d.appendChild(m.linkedin('tyntShLi', 8, 'l'));
                N('g') && d.appendChild(m.googleplus('tyntShGp', 9, 'g'));
                if (Oa) {
                    var c = t('img', {
                        src: J + 'pi.png',
                        title: 'pin it',
                        id: 'tyntShP',
                        onclick: function () {
                            createImageMeme(void 0, void 0);
                        }
                    });
                    Oa && d.appendChild(c);
                }
                ba() || d.appendChild(a);
                d.appendChild(b);
            }());
            f(a, b, c);
            Qa = f;
        }, mb = function (a) {
            O();
            y(2);
        }, O = function (a) {
            var b = g.getElementById('tyntSh'), c = a ? a.target || a.srcElement : { id: '' };
            !b || -1 < c.id.indexOf('tyntSh') || (f.off(q, 'mousedown', O), f.off(q, 'touchstart', O), q.removeChild(b), a && y(1));
        }, lb = function (a) {
            O();
            a = new Date(Date.now() + 315360000000);
            P('TyntSpeedShareHide=true', 'expires=' + a.toUTCString());
            y(5);
        }, da = function () {
            return !fb && -1 == g.cookie.indexOf('TyntSpeedShareHide=true');
        }, nb = function (a, b, c) {
            Pa() && setTimeout(function () {
                da() && Qa(b, a.g, c);
            }, 1);
            return !0;
        };
    if ('undefined' === typeof h)
        var h;
    A.afterDynamicConfigAndDocumentLoaded.push(function (a) {
        if (a && a.ssb) {
            sa(g, 'tyntSbCSS', '.tynt-speedshare-bar img{margin:0 3px;}');
            var b;
            var c = g;
            b = oa('tynt-speedshare-bar');
            if (c.getElementsByClassName)
                b = c.getElementsByClassName(b);
            else if (c.querySelectorAll)
                b = c.querySelectorAll('.' + b);
            else {
                for (var c = c.getElementsByTagName('*'), d = [], e = 0; e < c.length; e++)
                    c[e].className.match(b) && d.push(c[e]);
                b = d;
            }
            d = !1;
            for (e = 0; e < b.length; e++)
                c = b[e], -1 < a.ssb.indexOf('f') && (c.appendChild(m.facebook('tyntSbFb', 16, 'ssbf')), d = !0), -1 < a.ssb.indexOf('t') && (c.appendChild(m.twitter('tyntSbTw', 17, 'ssbt')), d = !0), -1 < a.ssb.indexOf('l') && (c.appendChild(m.linkedin('tyntSbLi', 19, 'ssbl')), d = !0), -1 < a.ssb.indexOf('g') && (c.appendChild(m.googleplus('tyntSbGp', 20, 'ssbg')), d = !0);
            d ? y(14) : y(15);
        }
    });
    var ea = [], Q = [], Ra = [
            {
                x: 970,
                y: 250
            },
            {
                x: 300,
                y: 600
            },
            {
                x: 300,
                y: 1050
            },
            {
                x: 970,
                y: 90
            },
            {
                x: 300,
                y: 250
            },
            {
                x: 970,
                y: 250
            },
            {
                x: 970,
                y: 90
            },
            {
                x: 180,
                y: 150
            },
            {
                x: 160,
                y: 600
            },
            {
                x: 728,
                y: 90
            },
            {
                x: 120,
                y: 60
            },
            {
                x: 88,
                y: 31
            }
        ], Sa = [
            /:\/\/[^\/]*?outbrain\.com/,
            /:\/\/ads\.yldmgrimg\.net/,
            /:\/\/[^\/]*?cdn\.adblade\.com/,
            /:\/\/[^\/]*?googlesyndication\.com/
        ], C = C || '', C = C + [
            'div.tyntShIh,.tyntShIh div,.tyntShIh span{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1;background:0;text-align:left}.tyntShIh img,.tyntShIh span{display:inline}.tyntShIh div,div.tyntShIh{display:block;outline:0}',
            'div.tyntShIh{position:absolute;cursor:default;background:transparent url(' + (J + 'pi.png') + ') no-repeat;width:43px;height:21px;opacity:0;filter:alpha(opacity=0);z-index:9999999;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s}',
            'div.tyntIhHover{opacity:1;filter:alpha(opacity=100);cursor:pointer}'
        ].join(''), ob = function (a) {
            a.getElementById('tyntShCSS') || sa(a, 'tyntShCSS', C);
        }, pb = function (a) {
            return p.protocol + 'pinterest.com/pin/create/button/?url=' + encodeURIComponent(M(K(a.src), 'i')) + '&media=' + a.src + '&description=' + encodeURIComponent(ca(500, oa(a.title || a.alt)));
        }, qb = function (a) {
            if (h && 'undefined' !== typeof h.sspe) {
                0 === Q.length && (Q = h.sspe.split(','));
                if (Q.length !== ea.length)
                    for (var b = 0; b < Q.length; b += 1)
                        ea.push(new RegExp(Q[b]));
                for (b = 0; b < ea.length; b += 1)
                    if (a.getAttribute('src') && ea[b].test(a.getAttribute('src')))
                        return !0;
            }
            return !1;
        }, rb = function (a) {
            var b, c;
            for (b = 0; b < Sa.length; b++)
                if (Sa[b].test(a.src))
                    return !0;
            for (b = 0; b < Ra.length; b++)
                if (c = Ra[b], a.width === c.x && a.height === c.y)
                    return !0;
            return !1;
        }, sb = function () {
            if (!Ka() && da() && N('p')) {
                var a = function (b) {
                    var c = b.document, d = null, l, g = null, k, n, p, m;
                    l = c.createElement('div');
                    l.className = 'tyntShIh';
                    c.body.appendChild(l);
                    H(l, 'click', function () {
                        'tyntShIh tyntIhHover' == l.className && da() && (e.open(pb(g)), y(7));
                    });
                    ob(c);
                    H(c, 'mouseover', function (a) {
                        a || (a = b.event);
                        a = b.event ? a.srcElement : a.target;
                        !('IMG' === a.nodeName && 80 <= a.height && 80 <= a.width && 0 !== a.src.indexOf('data:')) || rb(a) || qb(a) || 'nopin' === a.getAttribute('nopin') || 'nopin' === a.nopin || a === g && l.showing || (null !== g && g !== a && q(), g = a, g.__tyntPinItShow = !0, null !== d && clearTimeout(d), d = setTimeout(function () {
                            if (g.__tyntPinItShow && da()) {
                                var a = g, c = b.document, d = a.getBoundingClientRect(), e = (d.right + d.left + a.width) / 2, f = (d.top + d.bottom + a.height) / 2;
                                a: {
                                    var h = {};
                                    for (h.x = e; h.x > d.left; h.x -= 20)
                                        for (h.y = f; h.y > d.top; h.y -= 20)
                                            if (c.elementFromPoint(h.x, h.y) === a) {
                                                d = h;
                                                break a;
                                            }
                                    h.x = -1;
                                    h.y = -1;
                                    d = h;
                                }
                                for (; d.y <= f && c.elementFromPoint(d.x, d.y) === a;)
                                    d.y++;
                                for (d.y--; d.x <= e && c.elementFromPoint(d.x, d.y) === a;)
                                    d.x++;
                                d.x--;
                                a = b.document.documentElement;
                                d = {
                                    x: d.x + ((b.pageXOffset || a.scrollLeft || 0) + (a.clientLeft || 0)),
                                    y: d.y + ((b.pageYOffset || a.scrollTop || 0) + (a.clientTop || 0))
                                };
                                l.style.left = d.x - 45 + 'px';
                                l.style.top = d.y - 22 + 'px';
                                l.className = 'tyntShIh tyntIhHover';
                                l.showing = !0;
                                g.__tyntPinItRecorded || y(6);
                                g.__tyntPinItRecorded = !0;
                            }
                        }, 'undefined' !== typeof h && 'undefined' !== typeof h.pt && 'i' == h.pt ? 0 : 1000), H(c, 'mousemove', m));
                    });
                    m = function (a) {
                        a = c.elementFromPoint(a.clientX, a.clientY);
                        a != g && a != l && q() && f.off(c, 'mousemove', m);
                    };
                    var q = function () {
                        return l.showing ? (g.__tyntPinItShow = !1, l.showing = !1, l.className = 'tyntShIh', setTimeout(function () {
                            l.style.left = '-100px';
                        }, 600), !0) : !1;
                    };
                    k = c.getElementsByTagName('iframe');
                    for (p = k.length - 1; 0 <= p; p--) {
                        n = k[p];
                        try {
                            n.src && 0 !== n.src.indexOf(e.location.protocol + '//' + e.location.hostname) || 'nopin' === n.getAttribute('nopin') || 'nopin' === n.nopin || a(n.contentWindow);
                        } catch (t) {
                            e.console && Tynt.debug && console.log('Bad iframe access', t, n);
                        }
                    }
                };
                a(e);
            }
        }, Ta = {
            sic_v1: function () {
                Tynt.ads.display('', '', 'inview', 'TI');
            },
            track_selections: function () {
                var a = ka();
                H(g, 'mouseup', function (b) {
                    b = '';
                    g.selection && g.selection.createRange ? (selection = g.selection.createRange(), b = selection.text) : b = e.getSelection().toString();
                    b = f.trim(b);
                    b.length && a(b) && (b = {
                        id: E,
                        g: K(b),
                        wc: W(b),
                        c: b.slice(0, 2000),
                        t: X,
                        trace_type: 2
                    }, Ha(b));
                });
            },
            track_attribution_views: function () {
                trackAttributionView = !0;
            }
        };
    A.afterDynamicConfig.push(function () {
        var a, b, c = h.p;
        h.apollo && (f.log('Injecting Apollo'), f.injectApolloScript());
        if (c)
            for (a = 0; a < c.length; a++)
                if ((b = c[a]) && 'function' === typeof Ta[b])
                    Ta[b]();
                else
                    f.log('ERROR: Unknown module: "' + b + '"');
        'function' === typeof B && B('afterCheckModules');
    });
    var tb = Da + '/ipb.js', ta = function () {
            return -1 !== g.cookie.indexOf('ty_attributionBlockedByIp=t') ? !0 : !1;
        }, Ua, ub = function () {
            Ua = setTimeout(function () {
                B('afterIpBlockCheck', h);
            }, 3000);
            bb(tb);
        };
    Tynt.ipb = function (a) {
        clearTimeout(Ua);
        var b = !1;
        if ('[object Array]' === Object.prototype.toString.apply(h.ipb)) {
            for (var c = 0; c < h.ipb.length; c++)
                if (a === h.ipb[c]) {
                    b = !0;
                    break;
                }
            a = b;
            b = new Date();
            b.setHours(b.getHours() + 1);
            b = 'expires=' + b.toGMTString();
            P('ty_attributionBlockedByIp=' + (!0 === a ? 't' : 'f'), b);
        }
        B('afterIpBlockCheck', h);
    };
    var Va = (Tynt.e || '') + 'ec.tynt.com', vb = ';Attribution;Attribution Share Alike;Attribution No Derivatives;Attribution Non-Commercial;Attribution Non-Commercial Share Alike;Attribution Non-Commercial No Derivatives'.split(';'), wb = ' creativecommons.org/licenses/by/3.0 creativecommons.org/licenses/by-sa/3.0 creativecommons.org/licenses/by-nd/3.0 creativecommons.org/licenses/by-nc/3.0 creativecommons.org/licenses/by-nc-sa/3.0 creativecommons.org/licenses/by-nc-nd/3.0'.split(' '), fa = null, R = !1, xb = _xb, yb = _yb, Wa = _Wa, zb = _zb, Ab = _Ab, Cb = _Cb, Db = _Db, Fb = _Fb, Eb = _Eb, Gb = _Gb, Bb = function () {
            return g.selection && g.selection.createRange ? function () {
                var a = g.selection.createRange(), b = a.duplicate();
                b.collapse(!0);
                return (b = b.parentElement()) && f.trim(a.text) == f.trim(b.innerText) ? b : null;
            } : function () {
                var a = e.getSelection().getRangeAt(0), b = 3 == a.startContainer.nodeType ? a.startContainer.parentNode : a.startContainer;
                return b && f.trim(a.toString()) == f.trim(b.textContent) ? b : null;
            };
        }();
    Tynt.cmd.push(function () {
        h = Tynt.settings.get();
        Gb();
    });
    var Xa = function () {
            var a = g.title.indexOf('#ixzz');
            -1 < a && (g.title = g.title.substring(0, a));
            a = g.title.indexOf('#axzz');
            -1 < a && (g.title = g.title.substring(0, a));
        }, S = function (a) {
            if (!a)
                return {};
            for (var b = {}, c = a.substring(a.indexOf('?') + 1).split('&'), d = 0; d < c.length; d++) {
                var e = c[d].split('=');
                0 === e[0].indexOf('amp;') && (e[0] = e[0].substring(4));
                b[e[0]] = e[1];
            }
            a = a.split('/');
            a.pop();
            b.scriptPathUri = a.join('/');
            return b;
        }(function () {
            for (var a = g.getElementsByTagName('script'), b = 0; b < a.length; b++)
                if (/\/tracer.*\?/i.test(a[b].src))
                    return a[b].src;
            return null;
        }()), Hb = S.user || f.getPubId();
    S.user && 22 == S.user.length && !Tynt[S.user] && Tynt.push(S.user);
    /tracer=test/.test(e.location.href) && w(Da + '/script/verify/' + Hb);
    (function () {
        if (/disableTracer=/.test(e.location.href)) {
            var a = e.location.href.match(/disableTracer=([^?$]*)/)[1], b = new Date();
            b.setDate(a && 'on' == a ? b.getDate() + 365 : b.getDate() - 2);
            P('disableTracer=' + (a && 'on' == a ? 'y' : 'n'), 'expires=' + b.toUTCString());
            b = t('div', { id: 'TyntLocalOptOut' }, {
                zIndex: '10000',
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '80%',
                height: '80%',
                backgroundColor: 'white',
                color: 'black',
                textAlign: 'center',
                fontSize: '32px',
                paddingTop: '10%',
                border: '1px solid gray'
            });
            b.innerHTML = 'Tynt Insight has been turned ' + (a && 'on' == a ? 'off' : 'on') + ' in this browser.<br>You may close this window.';
            q.insertBefore(b, q.firstChild);
        }
    }());
    if (!Ka()) {
        V && (Xa(), g.attachEvent('onpropertychange', Xa));
        var la = na();
        hb();
        Tynt.settings.download();
    }
    if ('undefined' === typeof Ya)
        var Ya = 10;
    new Date().getDate() === Ya && function () {
        var a = g.createElement('script'), b = g.getElementsByTagName('script')[0];
        a.async = 'async';
        a.type = 'text/javascript';
        a.src = p.protocol + ab + '/cb.js';
        b.parentNode.insertBefore(a, b);
    }();
    var ua = null, va = 0, wa = function () {
            'object' == typeof g.body.oncopy && null !== g.body.oncopy ? (g.body.oncopy = null, y(13)) : setTimeout(wa, 2000);
        }, Ib = function () {
            'undefined' === typeof stlib || 'undefined' === typeof stlib.hash || 'undefined' === typeof stlib.hash.doNotCopy || stlib.hash.doNotCopy || (wa(), setTimeout(function () {
                clearInterval(ua);
            }, 2000));
            va += 1;
            5 <= va && clearInterval(ua);
        };
    A.afterDynamicConfigAndDocumentLoaded.push(function () {
        if ('undefined' === typeof stlib || 'undefined' === typeof stlib.hash || 'undefined' === typeof stlib.hash.doNotCopy || stlib.hash.doNotCopy) {
            for (var a = !1, b = g.getElementsByTagName('script'), c = 0; c < b.length; c++)
                if (b[c].getAttribute('src') && /sharethis/.test(b[c].src)) {
                    a = !0;
                    break;
                }
            a && (ua = setInterval(Ib, 2000));
        } else
            wa();
        'function' === typeof B && B('afterProtectTynt');
    });
} else
    setTimeout(function () {
        Tynt.TICFL();
    }, 50);