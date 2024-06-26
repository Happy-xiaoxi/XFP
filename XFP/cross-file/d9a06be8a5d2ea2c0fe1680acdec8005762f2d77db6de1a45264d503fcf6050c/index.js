
import {XMLGetNodes} from './XMLGetNodes.js'
import {XMLGetNode} from './XMLGetNode.js'
import {XMLGetNamedAttr} from './XMLGetNamedAttr.js'
import {XMLGetNodesLength} from './XMLGetNodesLength.js'
import {XMLCheckStatus} from './XMLCheckStatus.js'
import {GetPostDataValue} from './GetPostDataValue.js'
import {CXMLRequest} from './CXMLRequest.js'
import {CXMLGETRequest} from './CXMLGETRequest.js'
import {waitClinet} from './waitClinet.js'
import {sceneClinet} from './sceneClinet.js'
import {robotClinet} from './robotClinet.js'
import {RobotTimeOut} from './RobotTimeOut.js'
import {customEntropyFunction} from './customEntropyFunction.js'
import {userAgentKey} from './userAgentKey.js'
import {getUserAgent} from './getUserAgent.js'
import {languageKey} from './languageKey.js'
import {colorDepthKey} from './colorDepthKey.js'
import {deviceMemoryKey} from './deviceMemoryKey.js'
import {getDeviceMemory} from './getDeviceMemory.js'
import {pixelRatioKey} from './pixelRatioKey.js'
import {getPixelRatio} from './getPixelRatio.js'
import {screenResolutionKey} from './screenResolutionKey.js'
import {getScreenResolution} from './getScreenResolution.js'
import {availableScreenResolutionKey} from './availableScreenResolutionKey.js'
import {getAvailableScreenResolution} from './getAvailableScreenResolution.js'
import {timezoneOffsetKey} from './timezoneOffsetKey.js'
import {sessionStorageKey} from './sessionStorageKey.js'
import {localStorageKey} from './localStorageKey.js'
import {indexedDbKey} from './indexedDbKey.js'
import {addBehaviorKey} from './addBehaviorKey.js'
import {openDatabaseKey} from './openDatabaseKey.js'
import {cpuClassKey} from './cpuClassKey.js'
import {platformKey} from './platformKey.js'
import {doNotTrackKey} from './doNotTrackKey.js'
import {canvasKey} from './canvasKey.js'
import {webglKey} from './webglKey.js'
import {webglVendorAndRendererKey} from './webglVendorAndRendererKey.js'
import {adBlockKey} from './adBlockKey.js'
import {hasLiedLanguagesKey} from './hasLiedLanguagesKey.js'
import {hasLiedResolutionKey} from './hasLiedResolutionKey.js'
import {hasLiedOsKey} from './hasLiedOsKey.js'
import {hasLiedBrowserKey} from './hasLiedBrowserKey.js'
import {fontsKey} from './fontsKey.js'
import {flashFontsKey} from './flashFontsKey.js'
import {jsFontsKey} from './jsFontsKey.js'
import {pluginsKey} from './pluginsKey.js'
import {getRegularPlugins} from './getRegularPlugins.js'
import {getIEPlugins} from './getIEPlugins.js'
import {pluginsShouldBeSorted} from './pluginsShouldBeSorted.js'
import {touchSupportKey} from './touchSupportKey.js'
import {hardwareConcurrencyKey} from './hardwareConcurrencyKey.js'
import {hasSessionStorage} from './hasSessionStorage.js'
import {hasLocalStorage} from './hasLocalStorage.js'
import {hasIndexedDB} from './hasIndexedDB.js'
import {getHardwareConcurrency} from './getHardwareConcurrency.js'
import {getNavigatorCpuClass} from './getNavigatorCpuClass.js'
import {getNavigatorPlatform} from './getNavigatorPlatform.js'
import {getDoNotTrack} from './getDoNotTrack.js'
import {getTouchSupport} from './getTouchSupport.js'
import {getCanvasFp} from './getCanvasFp.js'
import {getWebglFp} from './getWebglFp.js'
import {getWebglVendorAndRenderer} from './getWebglVendorAndRenderer.js'
import {getAdBlock} from './getAdBlock.js'
import {getHasLiedLanguages} from './getHasLiedLanguages.js'
import {getHasLiedResolution} from './getHasLiedResolution.js'
import {getHasLiedOs} from './getHasLiedOs.js'
import {getHasLiedBrowser} from './getHasLiedBrowser.js'
import {isCanvasSupported} from './isCanvasSupported.js'
import {isWebGlSupported} from './isWebGlSupported.js'
import {isIE} from './isIE.js'
import {hasSwfObjectLoaded} from './hasSwfObjectLoaded.js'
import {hasMinFlashInstalled} from './hasMinFlashInstalled.js'
import {addFlashDivNode} from './addFlashDivNode.js'
import {loadSwfAndDetectFonts} from './loadSwfAndDetectFonts.js'
import {getWebglCanvas} from './getWebglCanvas.js'
import {each} from './each.js'
import {map} from './map.js'
import {x64Add} from './x64Add.js'
import {x64Multiply} from './x64Multiply.js'
import {x64Rotl} from './x64Rotl.js'
import {x64LeftShift} from './x64LeftShift.js'
import {x64Xor} from './x64Xor.js'
import {x64Fmix} from './x64Fmix.js'
import {x64hash128} from './x64hash128.js'
import {_convertFunc} from './_convertFunc.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
String.prototype.IsTelephone = function () {
    myReg = /^[0-9]{7,}$|^[0-9]{3,}-[0-9]{7,}$|^[0-9]{3,4}-[0-9]{3,}-[0-9]{4,}$/;
    if (myReg.test(this))
        return true;
    return false;
};
String.prototype.IsEmail = function () {
    var myReg = /[\u4e00-\u9fa5]/;
    if (!myReg.test(this)) {
        myReg = /^[_a-zA-Z0-9][-._a-zA-Z0-9]*@[-._a-zA-Z0-9]+\.[-._a-zA-Z0-9]+(\.[-._a-zA-Z])*$/;
        if (myReg.test(this))
            return true;
    } else {
        myReg = /^[_a-zA-Z0-9\u4e00-\u9fa5][-_.a-zA-Z0-9\u4e00-\u9fa5]*@[-._a-zA-Z0-9\u4e00-\u9fa5]+(\.[-._0-9a-zA-Z\u4e00-\u9fa5]+)*$/;
        if (myReg.test(this))
            return true;
    }
    return false;
};
var code_key = '';
var language = navigator.language;
if (language == 'cn') {
    var codeLang = {
        0: 's',
        1: 's',
        2: 's',
        3: 's'
    };
} else if (language == 'tw') {
    var codeLang = {
        0: 's',
        1: 's',
        2: 's',
        3: 's'
    };
} else {
    var codeLang = {
        0: 'Validation failed.Click again.',
        1: 'Validation failed.Click again.',
        2: 'Click ',
        3: 'Refresh'
    };
}
(function () {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../css/code.css';
    document.getElementsByTagName('head').item(0).appendChild(link);
});
const CONST_TYPE_MODE_WITHOUT_MSG = 0;
const CONST_TYPE_MODE_WITH_MSG = 1;
const CONST_LNK_TYPE_ALWAYS_NEW = 0;
const CONST_LNK_TYPE_KEEP_EXIST = 1;
!function (t) {
    var d = {};
    function e(i) {
        if (d[i])
            return d[i].exports;
        var a = d[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(a.exports, a, a.exports, e), a.l = !0, a.exports;
    }
    e.m = t, e.c = d, e.d = function (t, d, i) {
        e.o(t, d) || Object.defineProperty(t, d, {
            enumerable: !0,
            get: i
        });
    }, e.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 });
    }, e.t = function (t, d) {
        if (1 & d && (t = e(t)), 8 & d)
            return t;
        if (4 & d && 'object' == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (e.r(i), Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: t
            }), 2 & d && 'string' != typeof t)
            for (var a in t)
                e.d(i, a, function (d) {
                    return t[d];
                }.bind(null, a));
        return i;
    }, e.n = function (t) {
        var d = t && t.__esModule ? function () {
            return t.default;
        } : function () {
            return t;
        };
        return e.d(d, 'a', d), d;
    }, e.o = function (t, d) {
        return Object.prototype.hasOwnProperty.call(t, d);
    }, e.p = '', e(e.s = 0);
}([function (t, d) {
        window.CXMLClientKh = function (t, d, e) {
            this.m_cmdAddr = '', this.m_srvAddr = t, this.m_debug = e, this.m_addNo = 1, this.m_gid = 0, this.m_vid = 0, this.m_tid = 0, this.first_tid = 0, this.m_link = 0, this.m_dwid = 0, this.m_kfid = 0, this.m_kfName = '', this.m_workerid = 0, this.m_from = '', this.m_kfPage = '', this.m_lnkParam = '', this.m_tfrom = '', this.m_search_engine = '', this.m_keyword = '', this.m_counter = 0, this.m_lastGetTime = 0, this.m_lastGetTag = 0, this.m_khnumber = 1, this.m_shutdown = !1;
            var i, a = '', s = '';
            this.m_cmdAddr = i == d ? '/sendmsg.jsp' : d, void 0 === CXMLClientKh._initialized && ((d = CXMLClientKh.prototype).GetGid = function () {
                return this.m_gid;
            }, d.GetTid = function () {
                return this.m_tid;
            }, d.GetFirstTid = function () {
                return '' == this.first_tid ? this.m_tid : this.first_tid;
            }, d.GetVid = function () {
                return this.m_vid;
            }, d.GetKfid = function () {
                return this.m_kfid;
            }, d.GetKfname = function () {
                return this.m_kfName;
            }, d.GetWorkerid = function () {
                return this.m_workerid;
            }, d.GetKhnumber = function () {
                return this.m_khnumber;
            }, d.ShutDown = function (t) {
                (this.m_shutdown = t) ? (this.m_lastGetTime = 0, m_lastSessionTime = 0, window.clearInterval(this.timerID)) : (this.m_lastGetTime = new Date().getTime(), m_lastSessionTime = new Date().getTime());
            }, d.Timeout = function () {
                0 < this.m_lastGetTime && 20000 < new Date().getTime() - this.m_lastGetTime && this.GetCmd(!0);
            }, d.SetKhInfo = function (t, d, e, i, a, s, n, m) {
                this.m_gid = t, this.m_from = d, m_talkPage = e, m_talktitle = i, this.m_lnkParam = a, this.m_tfrom = s, this.m_search_engine = n, this.m_keyword = m, this.land_page = arguments[8] || '';
            }, d.CreateRequest = function () {
                return this.m_shutdown ? null : new CXMLRequest(++this.m_counter, this);
            }, d.RequestHandler = function (t) {
                var d = t.GetXmlHttp();
                if (200 == d.status) {
                    this.m_debug && this.OnDebug(d.responseText);
                    var e = XMLGetNodes(d.responseXML, 'Response'), i = XMLGetNodesLength(e);
                    if (0 < i) {
                        for (var n = [], m = 0; m < i; m++)
                            if (n[m] = XMLGetNode(e, m), 'GET' == XMLGetNamedAttr(n[m], 'cmd') && '' != (a = XMLGetNamedAttr(n[m], 'timestamp')) && s == a)
                                return this.GetCmd(), void (n = null);
                        for (m = 0; m < i; m++)
                            try {
                                this.RspProc(t.GetTag(), n[m]);
                            } catch (t) {
                                this.OnErr(t.name, t.message);
                            }
                    } else
                        this.m_addNo++, this.OnErr(0, 'Parse rsp error!');
                } else {
                    var o = t.GetPostData();
                    switch (GetPostDataValue(o, 1)) {
                    case 'LNK':
                        this.OnLnkFail();
                        break;
                    case 'QST':
                        var r = GetPostDataValue(o, 6);
                        this.OnQstFail(r);
                        break;
                    case 'FIL':
                        this.OnFilFail();
                    }
                }
            }, d.RspProc = function (t, d) {
                var e, a, s, n, m, o = this;
                if (null != d)
                    try {
                        switch (e = XMLGetNamedAttr(d, 'cmd')) {
                        case 'LNK':
                            a = XMLGetNamedAttr(d, 'ecode'), this.m_kfid = XMLGetNamedAttr(d, 'kfid'), this.m_kfName = XMLGetNamedAttr(d, 'kfname'), this.m_tid = XMLGetNamedAttr(d, 'khtmpid'), this.first_tid = XMLGetNamedAttr(d, 'firstkhtempid'), this.m_gid = XMLGetNamedAttr(d, 'khid'), this.m_workerid = XMLGetNamedAttr(d, 'workerid'), this.m_khnumber = XMLGetNamedAttr(d, 'khnumber');
                            var r = XMLGetNamedAttr(d, 'robotid');
                            if (origin_time = XMLGetNamedAttr(d, 'time') ? XMLGetNamedAttr(d, 'time') : 0, 0 == a || 6 == a) {
                                var _ = new Date();
                                _.setTime(_.getTime() + 5184000000), document.cookie = 'lastKfid6d_' + company_id + '=' + escape(this.m_kfid) + ';expires=' + _.toGMTString();
                                try {
                                    window.clearInterval(this.timerID);
                                } catch (t) {
                                }
                                this.timerID = window.setInterval(function () {
                                    o.Timeout();
                                }, 2000);
                            } else
                                3 != a && 2 != a && this.ShutDown(!0);
                            this.OnLinkOpen(a, XMLGetNamedAttr(d, 'emsg'), r);
                            break;
                        case 'ADDN':
                            this.m_addNo++;
                            break;
                        case 'GET':
                            var h = XMLGetNamedAttr(d, 'lost');
                            code_key = XMLGetNamedAttr(d, 'code_key'), 'true' === h && this.getLostMsg(), t == this.m_lastGetTag && this.GetCmd();
                            break;
                        case 'ULN':
                            this.OnLinkClose(XMLGetNamedAttr(d, 'robid'), XMLGetNamedAttr(d, 'arg'), XMLGetNamedAttr(d, 'style'), XMLGetNamedAttr(d, 'workerid'), XMLGetNamedAttr(d, 'islink'), XMLGetNamedAttr(d, 'iscswh'), XMLGetNamedAttr(d, 'islink_companyId'), XMLGetNamedAttr(d, 'sid'), XMLGetNamedAttr(d, 'companyId'), XMLGetNamedAttr(d, 'arg_code'), XMLGetNamedAttr(d, 'kf_sign'), XMLGetNamedAttr(d, 'msg_end'));
                            break;
                        case 'FLN':
                            this.OnTimeOverClose(XMLGetNamedAttr(d, 'link'), XMLGetNamedAttr(d, 'msg_end'));
                            break;
                        case 'QST':
                            var A = XMLGetNamedAttr(d, 'msgid'), c = XMLGetNamedAttr(d, 'new_type');
                            ('undefined' == typeof max_msgid || max_msgid < A) && (max_msgid = A), this.OnRecvTalkMsg(XMLGetNamedAttr(d, 'msg'), XMLGetNamedAttr(d, 'font'), XMLGetNamedAttr(d, 'size'), XMLGetNamedAttr(d, 'color'), XMLGetNamedAttr(d, 'from'), XMLGetNamedAttr(d, 'jid6d'), XMLGetNamedAttr(d, 'sid'), A, c);
                            break;
                        case 'CINFO':
                            this.OnRecvCinfoMsg(XMLGetNamedAttr(d, 'logo'), XMLGetNamedAttr(d, 'title'), XMLGetNamedAttr(d, 'content'), XMLGetNamedAttr(d, 'curl'), XMLGetNamedAttr(d, 'msgType'));
                            break;
                        case 'GHQST':
                        case 'RLQST':
                            var D, u = XMLGetNodes(d, 'Data'), f = XMLGetNode(u, 0), P = XMLGetNodes(f, 'row');
                            this.OnRecvReceiveMsg(P), void 0 !== P.length && 0 < P.length && void 0 !== (D = P[P.length - 1]).msgid && ('undefined' == typeof max_msgid || max_msgid < D.msgid) && (max_msgid = D.msgid);
                            break;
                        case 'ANSWER':
                            this.OnRecvQst(XMLGetNamedAttr(d, 'fk_msgid'));
                            break;
                        case 'TYP':
                            '' == (s = XMLGetNamedAttr(d, 'msg')) ? this.OnTyping() : this.OnSetupTyping(s);
                            break;
                        case 'FIL':
                            this.OnRecvFile(XMLGetNamedAttr(d, 'filename'), XMLGetNamedAttr(d, 'sid'), XMLGetNamedAttr(d, 'jid6d'), XMLGetNamedAttr(d, 'type'), XMLGetNamedAttr(d, 'file_cancel_id'), XMLGetNamedAttr(d, 'size'));
                            break;
                        case 'REQST':
                            this.OnRecvReqst(XMLGetNamedAttr(d, 'file_cancel_id'), XMLGetNamedAttr(d, 'msg'));
                            break;
                        case 'REMSG':
                            this.OnRecvRemsg(XMLGetNamedAttr(d, 'msgid'));
                            break;
                        case 'WAT':
                            if (this.m_tid = XMLGetNamedAttr(d, 'khtmpid'), this.OnWaitCount(XMLGetNamedAttr(d, 'count')), this.m_gid == i || 0 == this.m_gid) {
                                this.m_gid = this.m_tid;
                                try {
                                    0 < this.m_gid && (n = new Date(), (m = new Date()).setTime(n.getTime() + 946080000000), document.cookie = 'guest_id=' + escape(this.m_gid) + '; expires=' + m.toGMTString() + ';domain=' + base_host);
                                } catch (t) {
                                }
                            }
                            break;
                        case 'RLK':
                            this.OnRecvRlk();
                            break;
                        case 'VOT':
                            this.OnRecvVote(XMLGetNamedAttr(d, 'sid'), XMLGetNamedAttr(d, 'state'));
                            break;
                        case 'OK':
                            break;
                        case 'XLNK':
                            var l = XMLGetNamedAttr(d, 'kfid'), g = XMLGetNamedAttr(d, 'khid'), k = XMLGetNamedAttr(d, 'companyid');
                            this.OnRecvXLNK(l, g, k);
                            break;
                        case 'GRL':
                            this.sendGrl();
                            break;
                        case 'GUESTMENU':
                            this.OnRecvGuestmenu(XMLGetNamedAttr(d, 'title'), XMLGetNamedAttr(d, 'ids'), XMLGetNamedAttr(d, 'mustids'), XMLGetNamedAttr(d, 'msgid'), XMLGetNamedAttr(d, 'button'));
                            break;
                        case 'TRANSLATE':
                            this.OnTranslate(XMLGetNamedAttr(d, 'trans_msg'), XMLGetNamedAttr(d, 'msg_id'));
                            break;
                        case 'BCPKW':
                            this.OnBCPKW(XMLGetNamedAttr(d, 'guest_id'), XMLGetNamedAttr(d, 'kw'));
                            break;
                        default:
                            this.OnErr(0, 'unknown rsp:' + e);
                        }
                    } catch (t) {
                        return void this.OnErr(t.name, t.message);
                    }
            }, d.OnLogin = function (t) {
            }, d.OnLinkOpen = function (t, d) {
            }, d.OnLinkClose = function (t, d, e, i) {
            }, d.OnTimeOverClose = function (t) {
            }, d.OnRecvTalkMsg = function (t, d, e, i, a, s, n) {
            }, d.OnRecvCinfoMsg = function (t, d, e, i, a) {
            }, d.OnRecvReceiveMsg = function (t) {
            }, d.OnTyping = function () {
            }, d.OnSetupTyping = function (t) {
            }, d.OnRecvFile = function (t, d, e, i) {
            }, d.OnErr = function (t, d) {
            }, d.OnDebug = function (t) {
            }, d.OnWaitCount = function (t) {
            }, d.OnRecvRlk = function () {
            }, d.OnLnkFail = function () {
            }, d.OnQstFail = function (t) {
            }, d.OnFilFail = function () {
            }, d.OnRecvVote = function (t, d) {
            }, d.OnRecvQst = function (t) {
            }, d.OnRecvGuestmenu = function (t, d, e, i, a) {
            }, d.OnTranslate = function (t, d) {
            }, d.OnBCPKW = function (t, d) {
            }, d.OpenLink = function (t, d, e, a, s, n, m, o, r) {
                this.ShutDown(!1);
                var _ = this.CreateRequest();
                if (null != _) {
                    _.SetURL(this.m_srvAddr + this.m_cmdAddr), this.m_lastGetTime = new Date().getTime();
                    var h = this.getCookie('lastKfid6d_' + company_id);
                    h == i && (h = 0);
                    var A = 0, c = 0;
                    try {
                        for (var D, u, f, P = location.search, l = P.split('&'), g = 0; g < l.length; g++)
                            -1 != l[g].indexOf('switch_workerid') && (d = l[g].split('=')[1]), -1 != l[g].indexOf('islink_companyId') && (D = (D = l[g].split('='))[1]), -1 != l[g].indexOf('iscswh_id6d') && (u = (u = l[g].split('='))[1]), -1 != l[g].indexOf('iscswh_companyId') && (f = (f = l[g].split('='))[1]);
                        -1 != P.indexOf('islink=1') && (A = 1), -1 != P.indexOf('iscswh=1') && (c = 1);
                    } catch (t) {
                    }
                    return P = 0, 1 != isoldkf && 1 != this.getCookie('isoldkf_' + company_id + '_' + myid) || (P = 1), _.AddPostData('cmd', 'LNK'), _.AddPostData('sid', ''), _.AddPostData('lastKfid6d', h), _.AddPostData('did', '11'), _.AddPostData('khid', this.m_gid), _.AddPostData('dwid', t), _.AddPostData('type', e), _.AddPostData('kf_list', d), _.AddPostData('from', this.m_from), _.AddPostData('talkpage', m_talkPage), _.AddPostData('talktitle', m_talktitle), _.AddPostData('lnkparam', this.m_lnkParam), _.AddPostData('lnkfire', lnk_fire), _.AddPostData('tfrom', this.m_tfrom), _.AddPostData('style', style), _.AddPostData('ucust_id', encodeURIComponent(ucust_id)), _.AddPostData('u_stat_id', u_stat_id), _.AddPostData('stat_id', uid), _.AddPostData('firewall', firewall_uuid), _.AddPostData('style_id', style_id), _.AddPostData('remote_port', remote_port), _.AddPostData('search_engine', encodeURIComponent(this.m_search_engine)), _.AddPostData('keyword', this.m_keyword), _.AddPostData('land_page', this.land_page), _.AddPostData('open_time', open_time), _.AddPostData('encrypt_code', encrypt_code), _.AddPostData('isold', P), _.AddPostData('islink', A), _.AddPostData('iscswh', c), is_group != i && _.AddPostData('is_group', is_group), a != i && _.AddPostData('autotips', a), s != i && _.AddPostData('khname', s), n != i && _.AddPostData('dwname', n), m != i && _.AddPostData('khinfo', m), o != i && _.AddPostData('khcontact', o), r != i && _.AddPostData('question', r), '' !== channel && _.AddPostData('channel', encodeURIComponent(channel)), '' !== code_key && _.AddPostData('code_key', code_key), '' !== verify_key && _.AddPostData('verify_key', verify_key), '' !== lnk_overflow && _.AddPostData('lnk_overflow', lnk_overflow), D != i && _.AddPostData('islink_companyId', D), u != i && _.AddPostData('iscswh_id6d', u), f != i && _.AddPostData('iscswh_companyId', f), is_sceneToTalk && _.AddPostData('isscene', 1), _.AddPostData('time', this.m_lastGetTime), information_switch && !information_state && (_.AddPostData('from', ''), _.AddPostData('talkpage', ''), _.AddPostData('talktitle', ''), _.AddPostData('keyword', ''), _.AddPostData('land_page', ''), _.AddPostData('channel', ''), _.AddPostData('grys_status', '0')), _.SendReq(), this.m_lastGetTag = _.GetTag(), this.m_dwid = t, _.GetTag();
                }
            }, d.GetCmd = function (t) {
                var d = this.CreateRequest();
                if (null != d)
                    return d.SetURL(this.m_srvAddr + this.m_cmdAddr), t ? (this.m_addNo++, d.AddPostData('did', '11'), this.OnDebug('Reconnect')) : d.AddPostData('did', '0'), this.m_lastGetTime = new Date().getTime(), d.AddPostData('first_khtempid', this.first_tid), d.AddPostData('gid', this.m_gid), d.AddPostData('dwid', this.m_dwid), d.AddPostData('cmd', 'GET'), d.AddPostData('sid', this.m_tid), d.AddPostData('msg', this.m_addNo), d.AddPostData('time', this.m_lastGetTime), '' != a && (s = a, d.AddPostData('timestamp', a)), '' !== code_key && d.AddPostData('code_key', code_key), '' !== verify_key && d.AddPostData('verify_key', verify_key), d.AddPostData('style_id', style_id), d.AddPostData('version', commond_version), d.SendReq(), this.m_lastGetTag = d.GetTag(), d.GetTag();
            }, d.TerminateLink = function () {
                var t = this.CreateRequest();
                if (null != t)
                    return t.SetURL(this.m_srvAddr + this.m_cmdAddr), t.AddPostData('cmd', 'ULN'), t.AddPostData('sid', this.m_tid), t.AddPostData('did', this.m_kfid), t.AddPostData('time', new Date().getTime()), t.SendReq(), this.OnLinkClose('', '', ''), t.GetTag();
            }, d.QuitWait = function () {
                var t = this.CreateRequest();
                if (null != t)
                    return t.SetURL(this.m_srvAddr + this.m_cmdAddr), t.AddPostData('cmd', 'WAT'), t.AddPostData('sid', this.m_tid), t.AddPostData('did', 11), t.AddPostData('dwid', this.m_dwid), t.AddPostData('time', new Date().getTime()), t.SendReq(), t.GetTag();
            }, d.RegSuccess = function (t) {
                var d = this.CreateRequest();
                if (null != d)
                    return d.SetURL(this.m_srvAddr + this.m_cmdAddr), d.AddPostData('cmd', 'REG'), d.AddPostData('sid', this.m_tid), d.AddPostData('did', this.m_kfid), d.AddPostData('dwid', this.m_dwid), d.AddPostData('khid', t), d.AddPostData('time', new Date().getTime()), d.SendReq(), d.GetTag();
            }, d.SendTalkMsg = function (t, d, e, a, s) {
                var n, m = this.CreateRequest();
                if (null != m) {
                    m.SetURL(this.m_srvAddr + this.m_cmdAddr), m.AddPostData('cmd', 'QST'), m.AddPostData('sid', this.m_tid), m.AddPostData('first_khtempid', this.first_tid), m.AddPostData('did', this.m_kfid), m.AddPostData('dwid', this.m_dwid);
                    try {
                        t = t.replace(/(%5BMOBILE%5D)(\d+?)(%5B%2FMOBILE%5D)/gi, function (t) {
                            return '%5BMOBILE%5D' + encryptCode(t.match(/(%5BMOBILE%5D)(\d+?)(%5B%2FMOBILE%5D)/im)[2]) + '%5B%2FMOBILE%5D';
                        });
                    } catch (d) {
                        /%5BMOBILE%5D/.test(t) && ('72012964' != company_id && '72034819' != company_id && '70801702' != company_id && '72221204' != company_id && '72246200' != company_id || (n = {
                            from: 'fk',
                            type: 'catch',
                            company_id: this.m_dwid,
                            info: d,
                            guest_id: this.m_gid,
                            msg_id: this.fk_msgid,
                            time: new Date().getTime()
                        }, $.ajax({
                            url: this.m_srvAddr + '/tmp_debug.php',
                            type: 'POST',
                            data: n,
                            dataType: 'JSON',
                            success: function (t) {
                            },
                            error: function (t) {
                            }
                        })));
                    }
                    return m.AddPostData('msg', t), m.AddPostData('gid', this.m_gid), m.AddPostData('stat_id', uid), m.AddPostData('time', new Date().getTime() + 1), '' !== code_key && m.AddPostData('code_key', code_key), '' !== verify_key && m.AddPostData('verify_key', verify_key), m.AddPostData('style_id', style_id), m.AddPostData('code', d), e != i && m.AddPostData('fk_msgid', e), a != i && '' != a && m.AddPostData('msg_type', a), s != i && '' != s && m.AddPostData('msgid', s), 'undefined' != typeof max_msgid ? m.AddPostData('max_msgid', max_msgid) : m.AddPostData('max_msgid', 0), /%5BMOBILE%5D/.test(t) && ('72012964' != company_id && '72034819' != company_id && '70801702' != company_id && '72221204' != company_id && '72246200' != company_id || (n = {
                        from: 'fk',
                        type: 'before_qst',
                        company_id: this.m_dwid,
                        guest_id: this.m_gid,
                        msg_id: this.fk_msgid,
                        time: new Date().getTime()
                    }, this.logdebug(), $.ajax({
                        url: this.m_srvAddr + '/tmp_debug.php',
                        type: 'POST',
                        data: n,
                        dataType: 'JSON',
                        success: function (t) {
                        },
                        error: function (t) {
                        }
                    }))), m.SendReq(), m.GetTag();
                }
            }, d.logdebug = function () {
                var t = this.CreateRequest();
                if (null != t)
                    return t.SetURL(this.m_srvAddr + this.m_cmdAddr), t.AddPostData('cmd', 'DBG'), t.AddPostData('sid', this.m_tid), t.AddPostData('did', this.m_kfid), t.AddPostData('dwid', this.m_dwid), t.AddPostData('time', new Date().getTime() + 10), t.AddPostData('first_khtempid', this.first_tid), t.SendReq(), t.GetTag();
            }, d.SendCinfoMsg = function (t, d, e, i) {
                var a = this.CreateRequest();
                if (null != a)
                    return a.SetURL(this.m_srvAddr + this.m_cmdAddr), a.AddPostData('cmd', 'CINFO'), a.AddPostData('sid', this.m_tid), a.AddPostData('first_khtempid', this.first_tid), a.AddPostData('did', this.m_kfid), a.AddPostData('dwid', this.m_dwid), a.AddPostData('logo', t), a.AddPostData('title', d), a.AddPostData('content', e), a.AddPostData('curl', i), a.AddPostData('gid', this.m_gid), a.AddPostData('time', new Date().getTime() + 1), a.SendReq(), a.GetTag();
            }, d.SendConnPrompt = function (t) {
                var d = this.CreateRequest();
                if (null != d)
                    return d.SetURL(this.m_srvAddr + this.m_cmdAddr), d.AddPostData('cmd', 'HINT'), d.AddPostData('did', this.m_tid), d.AddPostData('dwid', this.m_dwid), d.AddPostData('msg', t), d.AddPostData('guest_id', this.m_gid), d.AddPostData('id6d', this.m_kfid), d.AddPostData('sid', this.first_tid), d.AddPostData('time', new Date().getTime() + 1), d.SendReq(), d.GetTag();
            }, d.SendCallBackPhone = function (t, d, e) {
                var i = this.CreateRequest();
                if (null != i)
                    return i.SetURL(this.m_srvAddr + this.m_cmdAddr), i.AddPostData('cmd', 'CBP'), i.AddPostData('code', t), i.AddPostData('phone', d), i.AddPostData('call_id', e), i.AddPostData('sid', this.first_tid), i.AddPostData('did', this.m_kfid), i.AddPostData('dwid', this.m_dwid), i.AddPostData('time', new Date().getTime() + 1), i.SendReq(), i.GetTag();
            }, d.SendReceiveMsg = function () {
                var t = this.CreateRequest();
                if (null != t)
                    return t.SetURL(this.m_srvAddr + this.m_cmdAddr), t.AddPostData('cmd', 'GHQST'), t.AddPostData('sid', this.m_tid), t.AddPostData('did', this.m_kfid), t.AddPostData('dwid', this.m_dwid), t.AddPostData('time', new Date().getTime()), t.AddPostData('first_khtempid', this.first_tid), t.SendReq(), t.GetTag();
            }, d.SendAttachMsg = function (t) {
                var d = this.CreateRequest();
                if (null != d)
                    return d.SetURL(this.m_srvAddr + this.m_cmdAddr), d.AddPostData('cmd', 'TIP'), d.AddPostData('sid', this.m_tid), d.AddPostData('did', this.m_kfid), d.AddPostData('dwid', this.m_dwid), d.AddPostData('msg', t), d.AddPostData('time', new Date().getTime()), d.SendReq(), d.GetTag();
            }, d.SendTyping = function (t) {
                var d = this.CreateRequest();
                if (null != d)
                    return t = 200 < (t = decodeURI(t)).length ? t.substring(0, 199) + '...' : t, d.SetURL(this.m_srvAddr + this.m_cmdAddr), d.AddPostData('cmd', 'TYP'), d.AddPostData('first_khtempid', this.first_tid), d.AddPostData('sid', this.m_tid), d.AddPostData('did', this.m_kfid), d.AddPostData('msg', encodeURIComponent(t)), d.AddPostData('khid', this.m_gid), d.AddPostData('dwid', this.m_dwid), d.AddPostData('time', new Date().getTime()), d.SendReq(), d.GetTag();
            }, d.SendFile = function (t, d, e) {
                var i = this.CreateRequest();
                if (null != i)
                    return i.SetURL(this.m_srvAddr + this.m_cmdAddr), i.AddPostData('cmd', 'FIL'), i.AddPostData('sid', this.m_tid), i.AddPostData('did', this.m_kfid), i.AddPostData('dwid', this.m_dwid), i.AddPostData('msg', t), i.AddPostData('type', d), i.AddPostData('size', e), i.AddPostData('time', new Date().getTime()), i.SendReq(), i.GetTag();
            }, d.SendVote = function (t, d) {
                var e = this.CreateRequest();
                if (null != e)
                    return e.SetURL(this.m_srvAddr + this.m_cmdAddr), e.AddPostData('cmd', 'VOT'), e.AddPostData('first_khtempid', this.first_tid), e.AddPostData('sid', this.m_tid), e.AddPostData('did', this.m_kfid), e.AddPostData('dwid', this.m_dwid), e.AddPostData('gid', this.m_gid), e.AddPostData('state', t), e.AddPostData('notes', d), e.AddPostData('time', new Date().getTime()), e.SendReq(), e.GetTag();
            }, d.getCookie = function (t) {
                for (var d = document.cookie.split('; '), e = 0; e < d.length; e++) {
                    var i = d[e].split('=');
                    if (i[0] == t)
                        return unescape(i[1]);
                }
            }, d.sendGrl = function () {
                var t = this.CreateRequest();
                if (null != t)
                    return t.SetURL(this.m_srvAddr + this.m_cmdAddr), t.AddPostData('cmd', 'GRL'), t.AddPostData('first_khtempid', this.first_tid), t.AddPostData('gid', this.m_gid), t.AddPostData('sid', this.m_tid), t.AddPostData('dwid', this.m_dwid), t.AddPostData('did', this.m_kfid), t.AddPostData('stat_id', uid), t.AddPostData('time', new Date().getTime()), '' !== code_key && t.AddPostData('code_key', code_key), '' !== verify_key && t.AddPostData('verify_key', verify_key), 'undefined' != typeof max_msgid ? t.AddPostData('max_msgid', max_msgid) : t.AddPostData('max_msgid', 0), t.AddPostData('style_id', style_id), t.SendReq(), this.m_lastGetTag = t.GetTag(), t.GetTag();
            }, d.getLostMsg = function () {
                var t = this.CreateRequest();
                if (null !== t)
                    return t.SetURL(this.m_srvAddr + this.m_cmdAddr), t.AddPostData('cmd', 'OQST'), t.AddPostData('sid', this.m_tid), t.AddPostData('time', new Date().getTime()), t.SendReq(), t.GetTag();
            }, d.SendGstm = function (t) {
                var d = this.CreateRequest();
                if (null != d)
                    return d.SetURL(this.m_srvAddr + this.m_cmdAddr), d.AddPostData('cmd', 'GSTM'), d.AddPostData('sid', this.m_tid), d.AddPostData('did', this.m_kfid), d.AddPostData('msg', t), d.AddPostData('guest_id', this.m_gid), d.AddPostData('dwid', this.m_dwid), d.AddPostData('time', new Date().getTime()), d.SendReq(), d.GetTag();
            }, d.SendGidc = function (t) {
                var d = this.CreateRequest();
                if (null != d)
                    return d.SetURL(this.m_srvAddr + this.m_cmdAddr), d.AddPostData('cmd', 'GIDC'), d.AddPostData('last_guest_id', t), d.AddPostData('guest_id', this.m_gid), d.AddPostData('dwid', this.m_dwid), d.AddPostData('time', new Date().getTime()), d.SendReq(), d.GetTag();
            }, d.SendGRYSSQ = function () {
                var t = this.CreateRequest();
                if (null != t) {
                    try {
                        t.SetURL(this.m_srvAddr + this.m_cmdAddr), t.AddPostData('cmd', 'GRYSSQ'), t.AddPostData('khid', this.m_gid), t.AddPostData('dwid', this.m_dwid), t.AddPostData('frompage', this.m_from), t.AddPostData('talkpage', m_talkPage), t.AddPostData('landpage', this.land_page), t.AddPostData('channel', encodeURIComponent(channel)), t.AddPostData('search', encodeURIComponent(this.m_search_engine)), t.AddPostData('keyword', this.m_keyword), t.AddPostData('talktitle', m_talktitle), t.AddPostData('first_tempid', this.first_tid), t.AddPostData('stat_id', uid), t.AddPostData('time', new Date().getTime());
                    } catch (t) {
                    }
                    return t.SendReq(), t.GetTag();
                }
            }, d.SendSJCS = function (t) {
                var d = this.CreateRequest();
                if (null != d) {
                    try {
                        d.SetURL(this.m_srvAddr + this.m_cmdAddr), d.AddPostData('cmd', 'SJCS'), d.AddPostData('guest_id', t.guest_id), d.AddPostData('phone', t.mobile), d.AddPostData('user_com_id', t.company_id), d.AddPostData('id6d', t.id6d);
                    } catch (t) {
                    }
                    return d.SendReq(), d.GetTag();
                }
            }, d.SendDELQUE = function () {
                var t = this.CreateRequest();
                if (null != t) {
                    try {
                        t.SetURL(this.m_srvAddr + this.m_cmdAddr), t.AddPostData('cmd', 'DELQUE'), t.AddPostData('companyId', this.m_dwid), t.AddPostData('guestId', this.m_gid), t.AddPostData('firstkhtempid', this.first_tid), t.AddPostData('time', new Date().getTime());
                    } catch (t) {
                    }
                    return t.SendReq(), t.GetTag();
                }
            }, CXMLClientKh._initialized = !0);
        };
    }]);
var wait_client = new waitClinet();
var scene_client = new sceneClinet();
var robot_client = new robotClinet();
var robotTimeOut = new RobotTimeOut();
var imfocus = 1;
var lnkover = 0;
var obj_name = '';
var m_joinNames = [];
var sendtyptime = 0;
var settyptime = 0;
var typtime = 8;
var sendtyp_type = 0;
var typcontent = '';
var m_typTimer = 0;
var m_autoTimer = 0;
var m_leftTime = 0;
var m_noTalkTimer = 0;
var m_kfNoTalkTimer = 0;
var m_ImKfNoTalkTimer = 0;
var m_refreshTimer = 0;
var isSendLNK = false;
var sendlnktimes = 0;
var m_qstResTimer = 0;
var g_comm = null;
var m_busyCnt = 0;
var m_clickLink = false;
var sendLNKTimes = 0;
var CONST_NOTALK_TIP = 0;
var CONST_NOTALK_OVER = 180;
var noTalkNum = 0;
var noTalkOver = 0;
var CONST_KF_NOTALK_TIP = 0;
var kfNoTalkNum = 0;
var ImKfNoTalkNum = 0;
var m_startInitial = false;
var closemark = 'beidong';
var m_requestVote = false;
var talk_type = 0;
var origin_type = 0;
var origin_time = 0;
var isoldkf = 0;
var khnumber = 1;
var m_checkCodeType = 0;
var prompt_guide_timer = 0;
var isset_prompt_cookie = 0;
var is_show_prompt = false;
var prompt_guide_show_time = 0;
var msg_wait_arr = new Array();
var custom_auto_update = {
    qq: 0,
    wechat: 0
};
var custom_wechat_update = 0;
var web_msg_talk_id = [];
var is_sceneToTalk = false;
var task_robot_obj = new Object();
var robot_nlp_obj = new Object();
var is_robotToTalk = false;
var robotTipsTime = 0;
var m_robid = '';
var zsk_name = '';
var zsk_prompt = '';
var zsk_un_prompt = '';
var zsk_zsktb_url = '';
var zsk_zdzrg = '';
var zsk_unret_times = '';
var zsk_admit_rule = '';
var zsk_kw_trans = '';
var zsk_api_robot_id = '';
var zsk_api_name = '';
var zsk_vars = [];
var zsk_feedback = '';
var zsk_lwswitch = '';
var zsk_hots = '';
var robot_cannot_answer_times = 0;
var robot_unshow_msg = 0;
var m_isShowInertactMenu = false;
var lwordSuccessTimer = 0;
var is_wechat = false;
var is_mobile = false;
var answer_timeout;
var notalk_timeout;
var notalk_nowtime = 0;
var notalk_overtime = -1;
var robot_runkf_fail_msg = '';
(function () {
    jQuery.extend({
        createUploadIframe: function (id, uri) {
            var frameId = 'jUploadFrame' + id;
            var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="position:absolute; top:-9999px; left:-9999px"';
            if (window.ActiveXObject) {
                if (typeof uri == 'boolean') {
                    iframeHtml += ' src="' + 'javascript:false' + '"';
                } else if (typeof uri == 'string') {
                    iframeHtml += ' src="' + uri + '"';
                }
            }
            iframeHtml += ' />';
            jQuery(iframeHtml).appendTo(document.body);
            return jQuery('#' + frameId).get(0);
        },
        createUploadForm: function (id, fileElementId, data) {
            var formId = 'jUploadForm' + id;
            var fileId = 'jUploadFile' + id;
            var form = jQuery('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
            if (data) {
                for (var i in data) {
                    jQuery('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form);
                }
            }
            var oldElement = jQuery('#' + fileElementId);
            var newElement = jQuery(oldElement).clone();
            jQuery(oldElement).attr('id', fileId);
            jQuery(oldElement).before(newElement);
            jQuery(oldElement).appendTo(form);
            jQuery(form).css('position', 'absolute');
            jQuery(form).css('top', '-1200px');
            jQuery(form).css('left', '-1200px');
            jQuery(form).appendTo('body');
            return form;
        },
        ajaxFileUpload: function (s) {
            s = jQuery.extend({}, jQuery.ajaxSettings, s);
            var id = new Date().getTime();
            var form = jQuery.createUploadForm(id, s.fileElementId, typeof s.data == 'undefined' ? false : s.data);
            var io = jQuery.createUploadIframe(id, s.secureuri);
            var frameId = 'jUploadFrame' + id;
            var formId = 'jUploadForm' + id;
            if (s.global && !jQuery.active++) {
                jQuery.event.trigger('ajaxStart');
            }
            var requestDone = false;
            var xml = {};
            if (s.global)
                jQuery.event.trigger('ajaxSend', [
                    xml,
                    s
                ]);
            var uploadCallback = function (isTimeout) {
                var io = document.getElementById(frameId);
                try {
                    if (io.contentWindow) {
                        xml.responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML : null;
                        xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument : io.contentWindow.document;
                    } else if (io.contentDocument) {
                        xml.responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML : null;
                        xml.responseXML = io.contentDocument.document.XMLDocument ? io.contentDocument.document.XMLDocument : io.contentDocument.document;
                    }
                    if (xml.responseText.indexOf('<div id="myKfCapturteCustomEvent" style="display: none;"></div>') != -1) {
                        xml.responseText = xml.responseText.replace('<div id="myKfCapturteCustomEvent" style="display: none;"></div>', '');
                    }
                } catch (e) {
                    jQuery.handleError(s, xml, null, e);
                }
                if (xml || isTimeout == 'timeout') {
                    requestDone = true;
                    var status;
                    try {
                        status = isTimeout != 'timeout' ? 'success' : 'error';
                        if (status != 'error') {
                            var data = jQuery.uploadHttpData(xml, s.dataType);
                            if (s.success)
                                s.success(data, status);
                            if (s.global)
                                jQuery.event.trigger('ajaxSuccess', [
                                    xml,
                                    s
                                ]);
                        } else
                            jQuery.handleError(s, xml, status);
                    } catch (e) {
                        status = 'error';
                        jQuery.handleError(s, xml, status, e);
                    }
                    if (s.global)
                        jQuery.event.trigger('ajaxComplete', [
                            xml,
                            s
                        ]);
                    if (s.global && !--jQuery.active)
                        jQuery.event.trigger('ajaxStop');
                    if (s.complete)
                        s.complete(xml, status);
                    jQuery(io).unbind();
                    setTimeout(function () {
                        try {
                            jQuery(io).remove();
                            jQuery(form).remove();
                        } catch (e) {
                            jQuery.handleError(s, xml, null, e);
                        }
                    }, 100);
                    xml = null;
                }
            };
            if (s.timeout > 0) {
                setTimeout(function () {
                    if (!requestDone)
                        uploadCallback('timeout');
                }, s.timeout);
            }
            try {
                var form = jQuery('#' + formId);
                jQuery(form).attr('action', s.url);
                jQuery(form).attr('method', 'POST');
                jQuery(form).attr('target', frameId);
                if (form.encoding) {
                    jQuery(form).attr('encoding', 'multipart/form-data');
                } else {
                    jQuery(form).attr('enctype', 'multipart/form-data');
                }
                jQuery(form).submit();
            } catch (e) {
                jQuery.handleError(s, xml, null, e);
            }
            jQuery('#' + frameId).load(uploadCallback);
            return {
                abort: function () {
                }
            };
        },
        uploadHttpData: function (r, type) {
            var data = !type;
            data = type == 'xml' || data ? r.responseXML : r.responseText;
            if (type == 'script')
                jQuery.globalEval(data);
            if (type == 'json')
                eval('data = ' + data);
            if (type == 'html')
                jQuery('<div>').html(data).evalScripts();
            return data;
        },
        handleError: function (s, xhr, status, e) {
            if (s.error) {
                s.error.call(s.context || s, xhr, status, e);
            }
            if (s.global) {
                (s.context ? jQuery(s.context) : jQuery.event).trigger('ajaxError', [
                    xhr,
                    s,
                    e
                ]);
            }
        }
    });
});
(function (name, context, definition) {
    'use strict';
    if (typeof window.define === 'function' && window.define.amd) {
        window.define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else if (context.exports) {
        context.exports = definition();
    } else {
        context[name] = definition();
    }
}('Fingerprint2', this, function () {
    'use strict';
    var Fingerprint2 = function (options) {
        if (!(this instanceof Fingerprint2)) {
            return new Fingerprint2(options);
        }
        var defaultOptions = {
            swfContainerId: 'fingerprintjs2',
            swfPath: 'flash/compiled/FontList.swf',
            detectScreenOrientation: true,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: [],
            excludeDoNotTrack: true,
            excludePixelRatio: true
        };
        this.options = this.extend(options, defaultOptions);
        this.nativeForEach = Array.prototype.forEach;
        this.nativeMap = Array.prototype.map;
    };
    Fingerprint2.prototype = {
        extend: function (source, target) {
            if (source == null) {
                return target;
            }
            for (var k in source) {
                if (source[k] != null && target[k] !== source[k]) {
                    target[k] = source[k];
                }
            }
            return target;
        },
        get: function (done) {
            var that = this;
            var keys = {
                data: [],
                addPreprocessedComponent: function (pair) {
                    var componentValue = pair.value;
                    if (typeof that.options.preprocessor === 'function') {
                        componentValue = that.options.preprocessor(pair.key, componentValue);
                    }
                    keys.data.push({
                        key: pair.key,
                        value: componentValue
                    });
                }
            };
            keys = this.userAgentKey(keys);
            keys = this.languageKey(keys);
            keys = this.colorDepthKey(keys);
            keys = this.deviceMemoryKey(keys);
            keys = this.pixelRatioKey(keys);
            keys = this.hardwareConcurrencyKey(keys);
            keys = this.screenResolutionKey(keys);
            keys = this.availableScreenResolutionKey(keys);
            keys = this.timezoneOffsetKey(keys);
            keys = this.sessionStorageKey(keys);
            keys = this.localStorageKey(keys);
            keys = this.indexedDbKey(keys);
            keys = this.addBehaviorKey(keys);
            keys = this.openDatabaseKey(keys);
            keys = this.cpuClassKey(keys);
            keys = this.platformKey(keys);
            keys = this.doNotTrackKey(keys);
            keys = this.pluginsKey(keys);
            keys = this.canvasKey(keys);
            keys = this.webglKey(keys);
            keys = this.webglVendorAndRendererKey(keys);
            keys = this.adBlockKey(keys);
            keys = this.hasLiedLanguagesKey(keys);
            keys = this.hasLiedResolutionKey(keys);
            keys = this.hasLiedOsKey(keys);
            keys = this.hasLiedBrowserKey(keys);
            keys = this.touchSupportKey(keys);
            keys = this.customEntropyFunction(keys);
            this.fontsKey(keys, function (newKeys) {
                var values = [];
                that.each(newKeys.data, function (pair) {
                    var value = pair.value;
                    if (value && typeof value.join === 'function') {
                        value = value.join(';');
                    }
                    values.push(value);
                });
                var murmur = that.x64hash128(values.join('~~~'), 31);
                return done(murmur, newKeys.data);
            });
        },
        customEntropyFunction: customEntropyFunction,
        userAgentKey: userAgentKey,
        getUserAgent: getUserAgent,
        languageKey: languageKey,
        colorDepthKey: colorDepthKey,
        deviceMemoryKey: deviceMemoryKey,
        getDeviceMemory: getDeviceMemory,
        pixelRatioKey: pixelRatioKey,
        getPixelRatio: getPixelRatio,
        screenResolutionKey: screenResolutionKey,
        getScreenResolution: getScreenResolution,
        availableScreenResolutionKey: availableScreenResolutionKey,
        getAvailableScreenResolution: getAvailableScreenResolution,
        timezoneOffsetKey: timezoneOffsetKey,
        sessionStorageKey: sessionStorageKey,
        localStorageKey: localStorageKey,
        indexedDbKey: indexedDbKey,
        addBehaviorKey: addBehaviorKey,
        openDatabaseKey: openDatabaseKey,
        cpuClassKey: cpuClassKey,
        platformKey: platformKey,
        doNotTrackKey: doNotTrackKey,
        canvasKey: canvasKey,
        webglKey: webglKey,
        webglVendorAndRendererKey: webglVendorAndRendererKey,
        adBlockKey: adBlockKey,
        hasLiedLanguagesKey: hasLiedLanguagesKey,
        hasLiedResolutionKey: hasLiedResolutionKey,
        hasLiedOsKey: hasLiedOsKey,
        hasLiedBrowserKey: hasLiedBrowserKey,
        fontsKey: fontsKey,
        flashFontsKey: flashFontsKey,
        jsFontsKey: jsFontsKey,
        pluginsKey: pluginsKey,
        getRegularPlugins: getRegularPlugins,
        getIEPlugins: getIEPlugins,
        pluginsShouldBeSorted: pluginsShouldBeSorted,
        touchSupportKey: touchSupportKey,
        hardwareConcurrencyKey: hardwareConcurrencyKey,
        hasSessionStorage: hasSessionStorage,
        hasLocalStorage: hasLocalStorage,
        hasIndexedDB: hasIndexedDB,
        getHardwareConcurrency: getHardwareConcurrency,
        getNavigatorCpuClass: getNavigatorCpuClass,
        getNavigatorPlatform: getNavigatorPlatform,
        getDoNotTrack: getDoNotTrack,
        getTouchSupport: getTouchSupport,
        getCanvasFp: getCanvasFp,
        getWebglFp: getWebglFp,
        getWebglVendorAndRenderer: getWebglVendorAndRenderer,
        getAdBlock: getAdBlock,
        getHasLiedLanguages: getHasLiedLanguages,
        getHasLiedResolution: getHasLiedResolution,
        getHasLiedOs: getHasLiedOs,
        getHasLiedBrowser: getHasLiedBrowser,
        isCanvasSupported: isCanvasSupported,
        isWebGlSupported: isWebGlSupported,
        isIE: isIE,
        hasSwfObjectLoaded: hasSwfObjectLoaded,
        hasMinFlashInstalled: hasMinFlashInstalled,
        addFlashDivNode: addFlashDivNode,
        loadSwfAndDetectFonts: loadSwfAndDetectFonts,
        getWebglCanvas: getWebglCanvas,
        each: each,
        map: map,
        x64Add: x64Add,
        x64Multiply: x64Multiply,
        x64Rotl: x64Rotl,
        x64LeftShift: x64LeftShift,
        x64Xor: x64Xor,
        x64Fmix: x64Fmix,
        x64hash128: x64hash128
    };
    Fingerprint2.VERSION = '1.8.0';
    return Fingerprint2;
}));
var _convertList = [function (e, t) {
        window.cryptKeyCode = '0s1netinqnyl651l', window.encryptCode = function (e) {
            e += '';
            var t = {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Iso10126
                }, r = CryptoJS.enc.Utf8.parse(window.cryptKeyCode);
            return CryptoJS.AES.encrypt(e, r, t).toString().replace(/\//g, '_').replace(/\+/g, '-');
        };
    }];
;
_convertFunc(_convertList);