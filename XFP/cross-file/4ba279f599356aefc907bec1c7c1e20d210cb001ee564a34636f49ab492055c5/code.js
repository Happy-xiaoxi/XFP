import {fesc} from './fesc.js';
import {wdhex} from './wdhex.js';
import {wdHash} from './wdHash.js';
import {wdGenCID} from './wdGenCID.js';
import {getCookie} from './getCookie.js';
import {wdFlash} from './wdFlash.js';
import {send_ref} from './send_ref.js';
import {send_bc} from './send_bc.js';
import {wd_tracker} from './wd_tracker.js';
import {wd_reptracker} from './wd_reptracker.js';
import {getmetaContents} from './getmetaContents.js';
import {setup_metadata} from './setup_metadata.js';
import {_wd_write_ref} from './_wd_write_ref.js';
import {_wd_paramtracker} from './_wd_paramtracker.js';
import {_wd_write_perf} from './_wd_write_perf.js';
import {_wd_track_perf} from './_wd_track_perf.js';
import {_wd_setup_perf} from './_wd_setup_perf.js';
import {_wd_track_inner_page} from './_wd_track_inner_page.js';
import {_wd_track_user} from './_wd_track_user.js';
import {_wd_track_external} from './_wd_track_external.js';
import {_wd_ruid} from './_wd_ruid.js';
import {setup_cookie} from './setup_cookie.js';
import {write_ref} from './write_ref.js';
import {write_bc} from './write_bc.js';
import {getGeneralInfo} from './getGeneralInfo.js';
import {getLocalInfo} from './getLocalInfo.js';
import {getCookieInfo} from './getCookieInfo.js';
import {g} from './g.js';
import {s} from './s.js';
import {O} from './O.js';
import {y} from './y.js';
import {v} from './v.js';
import {j} from './j.js';
import {C} from './C.js';
import {D} from './D.js';
import {h} from './h.js';
import {L} from './L.js';
import {I} from './I.js';
import {R} from './R.js';
import {T} from './T.js';
import {x} from './x.js';

var _wdVersion = _wdVersion || {};
(_wdVersion.WD = _wdVersion.WD || "0"), (_wdVersion.CN = "1");
var _wdTimeOut = 1800,
  _wdRUTimeout = 30,
  _wdPerfTimeOut = 60,
  _wdED = "expires=Fri, 1 Jan 2038 00:00:00 GMT;",
  _wdCK = "0",
  _wdJE = "0",
  _wdHP = "0",
  _wdFl = 0,
  _wdTZ = 0,
  _wdLG = "",
  _wdCT = "",
  _wdFS = 0,
  _wdErr = "1",
  _wdGidT = 0,
  _wdDT = document.title == "" ? location.href : document.title,
  _wdCS,
  _wdSL = window.location.href,
  _wdHost = window.location.host,
  _wdRDM = "",
  _wdRP = document.referrer,
  _wdUA = navigator.appName + " " + navigator.appVersion,
  _wdRUA = navigator.userAgent,
  _wdWS = window.screen,
  _wdBV = navigator.appVersion.substring(0, 1),
  _wdNN = _wdUA.indexOf("Netscape") != -1,
  _wdMC = _wdUA.indexOf("Mac") != -1,
  _wdIE = _wdUA.indexOf("MSIE") != -1,
  _wdOP = _wdRUA.indexOf("Opera") != -1,
  _wdIEV = 0,
  _wdCID,
  _wdBCID = "0",
  _wdLS = 0,
  _wdTO = "1",
  _wdSID = "",
  _wdDU = 10,
  curtime = new Date(),
  Aimg;
String.prototype.trim = (function () {
  var e = /^\s+|\s+$/g;
  return function () {
    return this.replace(e, "");
  };
})();
var _webdigObj = _webdigObj || {};
(_webdigObj.getMeta = function (e) {
  var t = document.getElementsByTagName("meta");
  if (t) {
    for (var w = 0; w < t.length; w++)
      if (t[w].name == e) return t[w].content.trim();
  }
  return "";
});
var _wdLP = location.protocol.indexOf("https") > -1 ? "https:" : "http:";
var _wdCA = _wdLP + _wecl;
function println(e) {}
function _wdEC() {}
window.onerror = _wdEC;

(function () {
  if (window._wd_common_loaded) return;
  window._wd_common_loaded = new Date();
  function e(n) {
    switch (n[0]) {
      case "wd_paramtracker":
        _wd_paramtracker(n[1], n[2]);
        break;
      case "wd_track_inner_page":
        var o = Array.prototype.slice.call(n, 1);
        _wd_track_inner_page.apply(null, o);
        break;
      case "wd_track_user":
        var o = Array.prototype.slice.call(n, 1);
        _wd_track_user.apply(null, o);
        break;
      case "wd_track_perf":
        var o = Array.prototype.slice.call(n, 1);
        _wd_track_perf.apply(null, o);
        break;
      default:
    }
  }
  if (typeof _wd_o != "undefined") {
    let n = function () {
      window[_wd_o].q = window[_wd_o].q || [];
      for (var o = window[_wd_o].q, _ = 0; _ < o.length; _++) e(o[_]);
      o.push = function (f) {
        e(f);
      };
    };
    var A = n;
    window[_wd_o].e
      ? window.addEventListener
        ? document.addEventListener("_wd_load_event", n)
        : window[_wd_o].e.attachEvent("onpropertychange", function (o) {
            o.propertyName == "_wd_load_event" && n();
          })
      : n();
  }
  var t = new Array(),
    w = 30,
    u = 0;
  window.screen &&
    typeof window.screen.width == "number" &&
    (u = window.screen.width);

  var m = -1;

  v.prototype.toString = function () {
    return "X: " + this.x + ", Y:" + this.y + ", W:" + this.w;
  };

  h(), R();
})();
