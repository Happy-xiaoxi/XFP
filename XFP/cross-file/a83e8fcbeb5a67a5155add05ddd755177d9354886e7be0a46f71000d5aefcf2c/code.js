import { _stdTimezoneOffset } from "./_stdTimezoneOffset.js";
import { _canDST } from "./_canDST.js";
import { _dst } from './_dst.js';
import { _FPExtra } from "./_FPExtra.js";
import { _Get } from "./_Get.js";
import { _IM } from "./_IM.js";
import { _WB } from "./_WB.js";
import { _ObjectMerge } from "./_ObjectMerge.js";
import { _hRT } from "./_hRT.js";
import { _CLC } from "./_CLC.js";
import { _Cookie } from "./_Cookie.js";
import { _NG } from "./_NG.js";
import { _CI } from "./_CI.js";
import {extend} from './extend.js';
import {log} from './log.js';
import {get} from './get.js';
import {customEntropyFunction} from './customEntropyFunction.js';
import {initWebRTC} from './initWebRTC.js';
import {getWebRTC} from './getWebRTC.js';
import {userAgentKey} from './userAgentKey.js';
import {getUserAgent} from './getUserAgent.js';
import {languageKey} from './languageKey.js';
import {colorDepthKey} from './colorDepthKey.js';
import {pixelRatioKey} from './pixelRatioKey.js';
import {getPixelRatio} from './getPixelRatio.js';
import {screenResolutionKey} from './screenResolutionKey.js';
import {getScreenResolution} from './getScreenResolution.js';
import {availableScreenResolutionKey} from './availableScreenResolutionKey.js';
import {getAvailableScreenResolution} from './getAvailableScreenResolution.js';
import {timezoneOffsetKey} from './timezoneOffsetKey.js';
import {sessionStorageKey} from './sessionStorageKey.js';
import {localStorageKey} from './localStorageKey.js';
import {indexedDbKey} from './indexedDbKey.js';
import {addBehaviorKey} from './addBehaviorKey.js';
import {openDatabaseKey} from './openDatabaseKey.js';
import {cpuClassKey} from './cpuClassKey.js';
import {platformKey} from './platformKey.js';
import {doNotTrackKey} from './doNotTrackKey.js';
import {canvasKey} from './canvasKey.js';
import {webglKey} from './webglKey.js';
import {adBlockKey} from './adBlockKey.js';
import {hasLiedLanguagesKey} from './hasLiedLanguagesKey.js';
import {hasLiedResolutionKey} from './hasLiedResolutionKey.js';
import {hasLiedOsKey} from './hasLiedOsKey.js';
import {hasLiedBrowserKey} from './hasLiedBrowserKey.js';
import {fontsKey} from './fontsKey.js';
import {flashFontsKey} from './flashFontsKey.js';
import {jsFontsKey} from './jsFontsKey.js';
import {audioKey} from './audioKey.js';

import {getAudioKey} from './getAudioKey.js';
import {touchSupportKey} from './touchSupportKey.js';
import {hardwareConcurrencyKey} from './hardwareConcurrencyKey.js';
import {hasSessionStorage} from './hasSessionStorage.js';
import {hasLocalStorage} from './hasLocalStorage.js';
import {hasIndexedDB} from './hasIndexedDB.js';
import {getHardwareConcurrency} from './getHardwareConcurrency.js';
import {getNavigatorCpuClass} from './getNavigatorCpuClass.js';
import {getNavigatorPlatform} from './getNavigatorPlatform.js';
import {getDoNotTrack} from './getDoNotTrack.js';
import {getTouchSupport} from './getTouchSupport.js';
import {getCanvasFp} from './getCanvasFp.js';
import {getWebglFp} from './getWebglFp.js';
import {getAdBlock} from './getAdBlock.js';
import {getHasLiedLanguages} from './getHasLiedLanguages.js';
import {getHasLiedResolution} from './getHasLiedResolution.js';
import {getHasLiedOs} from './getHasLiedOs.js';
import {getHasLiedBrowser} from './getHasLiedBrowser.js';
import {isCanvasSupported} from './isCanvasSupported.js';
import {isWebGlSupported} from './isWebGlSupported.js';
// import {isIE} from './isIE.js';
import {hasSwfObjectLoaded} from './hasSwfObjectLoaded.js';
import {hasMinFlashInstalled} from './hasMinFlashInstalled.js';
import {addFlashDivNode} from './addFlashDivNode.js';
import {loadSwfAndDetectFonts} from './loadSwfAndDetectFonts.js';
import {getWebglCanvas} from './getWebglCanvas.js';
import {each} from './each.js';
import {map} from './map.js';
import {x64Add} from './x64Add.js';
import {x64Multiply} from './x64Multiply.js';
import {x64Rotl} from './x64Rotl.js';
import {x64LeftShift} from './x64LeftShift.js';
import {x64Xor} from './x64Xor.js';
import {x64Fmix} from './x64Fmix.js';
import {x64hash128} from './x64hash128.js';

function eHawkTalon(e, t, n, i) {
  var a =
    "object" == typeof i
      ? i
      : "object" == typeof n
      ? n
      : "object" == typeof t
      ? t
      : "object" == typeof e
      ? e
      : {};
  !(function (e) {
    /in/.test(document.readyState) ? setTimeout(e(), 2900) : e();
  })(function () {
    new EHTalon(e, n, t, a).Get();
  });
}
(Date.prototype.stdTimezoneOffset = _stdTimezoneOffset ),
  (Date.prototype.dst = _dst ),
  (Date.prototype.canDST = _canDST);

var EHTalon = function (e, t, n, a) {
  (this.obj = this),
    (this.obj.defaults = {
      cookie: { SameSite: "", Secure: !1, Path: void 0, Domain: void 0 },
      bind: { OutClass: void 0, OutId: "talon" },
    }),
    void 0 !== e &&
      "function" == typeof e.oncomplete &&
      (this.obj.oncomplete = e.oncomplete),
    "object" == typeof a &&
      (this.obj.defaults = EHTalon.ObjectMerge(this.obj.defaults, a)),
    (this.version = "5.8"),
    (this.dd = !!t),
    (this.cn = "6bdfac53cbfb648b7ebe7a1fe1b93f4d"),
    (this.c = null),
    (this.d = new Date()),
    (this.hL = !1),
    (this.f3 = 0),
    (this.f3r = ""),
    (this.fobj = !1),
    (this.ua2 = n);
  var o = EHTalon.WB();
  (this.CC = function (
    e,
    t,
    n,
    i,
    a,
    o,
    r,
    s,
    l,
    u,
    h,
    c,
    d,
    g,
    f,
    p,
    m,
    T,
    S
  ) {
    chk = this.CH(
      this.obj.version.toString() +
        "|" +
        t.toString() +
        "|" +
        n +
        "|" +
        i +
        "|" +
        a +
        "|" +
        g +
        "|" +
        o +
        "|" +
        r +
        "|" +
        s +
        "|" +
        l +
        "|" +
        u +
        "|" +
        h +
        "|" +
        f +
        "|" +
        p +
        "|" +
        m +
        "|" +
        T +
        "|" +
        c
    );
    var v = this.obj.dd ? ', "99": "' + d + '"' : "";
    return (
      '{"version": "' +
      this.obj.version.toString() +
      '", "status": ' +
      t +
      ', "timestamp": "' +
      n +
      '", "a": ' +
      i +
      ', "b": "' +
      a +
      '", "c": ' +
      chk +
      ', "d": "' +
      g +
      '","e": "' +
      o +
      '", "0": ' +
      r +
      ',  "3": "' +
      u +
      '", "4": "' +
      h +
      '", "7": "' +
      f +
      '","8":"' +
      p +
      '","6":"' +
      m +
      '", "9":"' +
      T +
      '","2":' +
      S +
      ', "5": "' +
      c +
      '"' +
      v +
      "}"
    );
  }),
    (this.CH = function (e) {
      for (var t = 305419896, n = 0, i = e.length; n < i; n++)
        t += e.charCodeAt(n) * (n + 1);
      return (t &= 2147483647);
    }),
    (this.L = function (e) {
      return e
        ? void 0 !== navigator.languages && void 0 !== navigator.languages[1]
          ? navigator.languages[1].substr(0, 2)
          : void 0 !== navigator.userLanguage
          ? navigator.userLanguage.substr(0, 2)
          : null
        : void 0 !== navigator.language
        ? navigator.language
        : navigator.browserLanguage;
    }),
    (this.TZ = function () {
      return (
        '{"dst": ' +
        this.d.dst() +
        ', "tzo": ' +
        this.d.getTimezoneOffset() +
        ', "stzo": ' +
        this.d.stdTimezoneOffset() +
        "}"
      );
    }),
    (this.RS = function () {
      return Math.floor(4294967295 * Math.random() + 1);
    }),
    (this.TC = function () {
      var e,
        t,
        n = this.TZ(),
        a = this.L(!1),
        r = this.L(!0);
      if (
        (null === r && (r = a),
        this.CI(),
        null == this.obj.c || "" === this.obj.c
          ? ((e = ""), (t |= 1), (this.obj.c = this.CS(this.RS(), this.obj.f3)))
          : ((void 0 !== this.obj.c.a && "" != this.obj.c.a) ||
              (this.obj.c = this.CS(this.RS(), 0)),
            (e = this.obj.c.b),
            (t = 0)),
        (this.obj.c = this.CS(this.obj.c.a, this.obj.f3, this.obj.c.e)),
        (e_hawkTalonStr = this.CC(
          3,
          0,
          this.d.toUTCString(),
          n,
          a,
          EHTalon.CLC(navigator.userAgent),
          t,
          this.obj.f3,
          this.obj.f3,
          this.obj.c.b,
          e,
          this.obj.c.c,
          this.obj.f3r,
          r,
          0,
          o,
          EHTalon.hRT() ? 1 : 0,
          EHTalon.IM() ? 1 : 0,
          this.obj.c.a
        )),
        void 0 !== this.obj.defaults.bind.OutId &&
          "" !== this.obj.defaults.bind.OutId &&
          (document.getElementById(this.obj.defaults.bind.OutId).value =
            e_hawkTalonStr),
        void 0 !== this.obj.defaults.bind.OutClass &&
          "" !== this.obj.defaults.bind.OutClass)
      ) {
        var s = document.getElementsByClassName(
          this.obj.defaults.bind.OutClass
        );
        for (i = 0; i < s.length; i++) s[i].value = e_hawkTalonStr;
      }
      "function" == typeof this.obj.oncomplete &&
        this.obj.oncomplete(e_hawkTalonStr);
    }),
    this.HLHas();
};
(EHTalon.prototype.FPExtra = _FPExtra ),
  (EHTalon.FPLA = function () {
    "use strict";
    var e = null,
      t = null,
      n = null;
    try {
      return (
        (e = window.performance.timing),
        (t = e.responseStart - e.requestStart),
        (n = e.responseEnd - e.fetchStart),
        t + "|" + n
      );
    } catch (e) {
      return "Unknown";
    }
  }),
  (EHTalon.prototype.Get = _Get ),
  (EHTalon.IM = _IM ),
  (EHTalon.WB = _WB),
  (EHTalon.hRT = _hRT),
  (EHTalon.CLC = _CLC ),
  (EHTalon.hash = function (e) {
    return new Fingerprint().x64hash128(e, 32);
  }),
  (EHTalon.ObjectMerge = _ObjectMerge),
  (EHTalon.prototype.NG = _NG ),
  (EHTalon.prototype.Cookie = _Cookie ),
  (EHTalon.prototype.CI = _CI ),
  (EHTalon.prototype.CG = function () {
    var e = this.obj.docCookies.getItem(this.obj.cn);
    !this.obj.hL ||
      ("" !== e && null !== e) ||
      (e = window.localStorage.getItem(this.obj.cn));
    try {
      return JSON.parse(e);
    } catch (e) {
      return null;
    }
  }),
  (EHTalon.prototype.CS = function (e, t, n) {
    var i = new Date().getTime(),
      a = {
        v: this.obj.version,
        a: e,
        b: void 0 === t ? "" : t,
        c: i,
        d: EHTalon.hash(i.toString()),
        e: void 0 === n ? "" : n,
      },
      o = JSON.stringify(a),
      r = new Date();
    return (
      r.setFullYear(r.getFullYear() + 10),
      this.obj.docCookies.removeItem(this.obj.cn),
      this.obj.docCookies.setItem(
        this.obj.cn,
        o,
        r.toString(),
        this.obj.defaults.cookie.Path,
        this.obj.defaults.cookie.Domain,
        this.obj.defaults.cookie.Secure,
        this.obj.defaults.cookie.SameSite
      ),
      this.obj.hL &&
        (window.localStorage.removeItem(this.obj.cn),
        window.localStorage.setItem(this.obj.cn, o)),
      a
    );
  }),
  (EHTalon.prototype.docCookies = {
    getItem: function (e) {
      return e
        ? decodeURIComponent(
            document.cookie.replace(
              new RegExp(
                "(?:(?:^|.*;)\\s*" +
                  encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") +
                  "\\s*\\=\\s*([^;]*).*$)|^.*$"
              ),
              "$1"
            )
          ) || null
        : null;
    },
    setItem: function (e, t, n, i, a, o, r) {
      if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
      var s = "";
      if (n)
        switch (n.constructor) {
          default:
          case Number:
            s =
              n === 1 / 0
                ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT"
                : "; max-age=" + n;
            break;
          case String:
            s = "; expires=" + n;
            break;
          case Date:
            s = "; expires=" + n.toUTCString();
        }
      return (
        (document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          s +
          (a ? "; domain=" + a : "") +
          (i ? "; path=" + i : "") +
          ("" !== r ? "; SameSite=" + r : "") +
          (o ? "; secure" : "")),
        !0
      );
    },
    removeItem: function (e, t, n) {
      return (
        !!this.hasItem(e) &&
        ((document.cookie =
          encodeURIComponent(e) +
          "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
          (n ? "; domain=" + n : "") +
          (t ? "; path=" + t : "")),
        !0)
      );
    },
    hasItem: function (e) {
      return (
        !!e &&
        new RegExp(
          "(?:^|;\\s*)" +
            encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\="
        ).test(document.cookie)
      );
    },
    keys: function () {
      for (
        var e = document.cookie
            .replace(
              /((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,
              ""
            )
            .split(/\s*(?:\=[^;]*)?;\s*/),
          t = e.length,
          n = 0;
        n < t;
        n++
      )
        e[n] = decodeURIComponent(e[n]);
      return e;
    },
  }),
  (EHTalon.prototype.HLHas = function () {
    try {
      window.localStorage.setItem("eloctest", "eloctest"),
        window.localStorage.removeItem("eloctest"),
        (this.obj.hL = !0);
    } catch (e) {
      this.obj.hL = !1;
    }
  });
var Fingerprint = function (e) {
  var t = {
    swfContainerId: "fingerprintjs2",
    swfPath: "flash/compiled/FontList.swf",
    detectScreenOrientation: !0,
    sortPluginsFor: [/palemoon/i],
    userDefinedFonts: [],
  };
  (this.options = this.extend(e, t)),
    (this.nativeForEach = Array.prototype.forEach),
    (this.nativeMap = Array.prototype.map);
};
Fingerprint.prototype = {
  extend:extend,
  log:log,
  get:get,
  customEntropyFunction:customEntropyFunction,
  initWebRTC:initWebRTC,
  getWebRTC:getWebRTC,
  userAgentKey:userAgentKey,
  getUserAgent:getUserAgent,
  languageKey:languageKey,
  colorDepthKey:colorDepthKey,
  // makeFrame:makeFrame,
  pixelRatioKey:pixelRatioKey,
  getPixelRatio:getPixelRatio,
  screenResolutionKey:screenResolutionKey,
  getScreenResolution:getScreenResolution,
  availableScreenResolutionKey:availableScreenResolutionKey,
  getAvailableScreenResolution:getAvailableScreenResolution,
  timezoneOffsetKey:timezoneOffsetKey,
  sessionStorageKey:sessionStorageKey,
  localStorageKey:localStorageKey,
  indexedDbKey:indexedDbKey,
  addBehaviorKey:addBehaviorKey,
  openDatabaseKey:openDatabaseKey,
  cpuClassKey:cpuClassKey,
  platformKey:platformKey,
  doNotTrackKey:doNotTrackKey,
  canvasKey:canvasKey,
  webglKey:webglKey,
  hasLiedLanguagesKey:hasLiedLanguagesKey,
  hasLiedResolutionKey:hasLiedResolutionKey,
  hasLiedOsKey:hasLiedOsKey,
  hasLiedBrowserKey:hasLiedBrowserKey,
  fontsKey:fontsKey,
  flashFontsKey:flashFontsKey,
  jsFontsKey:jsFontsKey,
  audioKey:audioKey,
  getAudioKey:getAudioKey,
  hardwareConcurrencyKey:hardwareConcurrencyKey,
  hasSessionStorage:hasSessionStorage,
  hasLocalStorage:hasLocalStorage,
  hasIndexedDB:hasIndexedDB,
  getHardwareConcurrency:getHardwareConcurrency,
  getNavigatorCpuClass:getNavigatorCpuClass,
  getNavigatorPlatform:getNavigatorPlatform,
  getDoNotTrack:getDoNotTrack,
  // getTouchSupport:getTouchSupport,
  getCanvasFp:getCanvasFp,
  getWebglFp:getWebglFp,
  // getAdBlock:getAdBlock,
  getHasLiedLanguages:getHasLiedLanguages,
  getHasLiedResolution:getHasLiedResolution,
  getHasLiedOs:getHasLiedOs,
  getHasLiedBrowser:getHasLiedBrowser,
  isCanvasSupported:isCanvasSupported,
  isWebGlSupported:isWebGlSupported,
  // isIE:isIE,
  hasSwfObjectLoaded:hasSwfObjectLoaded,
  hasMinFlashInstalled:hasMinFlashInstalled,
  addFlashDivNode:addFlashDivNode,
  loadSwfAndDetectFonts:loadSwfAndDetectFonts,
  getWebglCanvas:getWebglCanvas,
  each:each,
  map:map,
  x64Add:x64Add,
  x64Multiply:x64Multiply,
  x64Rotl:x64Rotl,
  x64LeftShift:x64LeftShift,
  x64Xor:x64Xor,
  x64Fmix:x64Fmix,
  x64hash128:x64hash128,
};
export { Fingerprint }