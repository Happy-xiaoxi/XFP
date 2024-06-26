/* 2023-12-01 10:34:42 joya.js @issue to huangzhihua@jd.com Thanks */

import {getNavigatorPlatform} from './getNavigatorPlatform.js';
import {getDeviceMemory} from './getDeviceMemory.js';
import {rB} from './rB.js';
import {getHeadless} from './getHeadless.js';
import {getLocation} from './getLocation.js';
import {getUserAgent} from './getUserAgent.js';
import {getCanvas} from './getCanvas.js';
import {getPluginName} from './getPluginName.js';
import {getPluginNum} from './getPluginNum.js';
import {getScreenResolution} from './getScreenResolution.js';
import {privateLogJOYAJS} from './privateLogJOYAJS.js';
import {log} from './log.js';
import {logJSON} from './logJSON.js';
import {expLogJSON} from './expLogJSON.js';
import {expLogPost} from './expLogPost.js';
import {nlog} from './nlog.js';
import {isMeta} from './isMeta.js';
import {getCookie} from './getCookie.js';
import {getStorage} from './getStorage.js';
import {setStorage} from './setStorage.js';
import {_str_find} from './_str_find.js';
import {getFpb} from './getFpb.js';
import {getDateFormat} from './getDateFormat.js';

import { _convertFunc1 } from './_convertFunc1.js'
window.fingerprint = {},
  fingerprint.config = {
    fpb_send_data:
      'body={"appname": "jdwebm_hf","jdkey": "","whwswswws": "","businness": "","body": {}}',
    api: { canvas_spendtime: 0 },
  },
  fingerprint.broswer = {
    getNavigatorPlatform:getNavigatorPlatform,
    getDeviceMemory:getDeviceMemory,
    rB:rB,
    getHeadless:getHeadless,
    getLocation:getLocation,
    getUserAgent:getUserAgent,
    getCanvas:getCanvas,
    getPluginName:getPluginName,
    getPluginNum:getPluginNum,
    getScreenResolution:getScreenResolution
  },
  fingerprint.util = {
    G: "",
    getCookie:getCookie,
    getStorage:getStorage,
    setStorage:setStorage,
    _str_find:_str_find,
    getFpb:getFpb,
    getDateFormat:getDateFormat,
    MD5: {
      chrsz: 8,
      G: "",
      hex_md5: function (t) {
        return this.binl2hex(
          this.core_md5(this.str2binl(t), t.length * this.chrsz)
        );
      },
      core_md5: function (t, e) {
        (t[e >> 5] |= 128 << e % 32), (t[14 + (((e + 64) >>> 9) << 4)] = e);
        for (
          var r = 1732584193,
            n = -271733879,
            i = -1732584194,
            o = 271733878,
            a = 0;
          a < t.length;
          a += 16
        ) {
          var s = r,
            c = n,
            d = i,
            u = o;
          (r = this.md5_ff(r, n, i, o, t[a + 0], 7, -680876936)),
            (o = this.md5_ff(o, r, n, i, t[a + 1], 12, -389564586)),
            (i = this.md5_ff(i, o, r, n, t[a + 2], 17, 606105819)),
            (n = this.md5_ff(n, i, o, r, t[a + 3], 22, -1044525330)),
            (r = this.md5_ff(r, n, i, o, t[a + 4], 7, -176418897)),
            (o = this.md5_ff(o, r, n, i, t[a + 5], 12, 1200080426)),
            (i = this.md5_ff(i, o, r, n, t[a + 6], 17, -1473231341)),
            (n = this.md5_ff(n, i, o, r, t[a + 7], 22, -45705983)),
            (r = this.md5_ff(r, n, i, o, t[a + 8], 7, 1770035416)),
            (o = this.md5_ff(o, r, n, i, t[a + 9], 12, -1958414417)),
            (i = this.md5_ff(i, o, r, n, t[a + 10], 17, -42063)),
            (n = this.md5_ff(n, i, o, r, t[a + 11], 22, -1990404162)),
            (r = this.md5_ff(r, n, i, o, t[a + 12], 7, 1804603682)),
            (o = this.md5_ff(o, r, n, i, t[a + 13], 12, -40341101)),
            (i = this.md5_ff(i, o, r, n, t[a + 14], 17, -1502002290)),
            (n = this.md5_ff(n, i, o, r, t[a + 15], 22, 1236535329)),
            (r = this.md5_gg(r, n, i, o, t[a + 1], 5, -165796510)),
            (o = this.md5_gg(o, r, n, i, t[a + 6], 9, -1069501632)),
            (i = this.md5_gg(i, o, r, n, t[a + 11], 14, 643717713)),
            (n = this.md5_gg(n, i, o, r, t[a + 0], 20, -373897302)),
            (r = this.md5_gg(r, n, i, o, t[a + 5], 5, -701558691)),
            (o = this.md5_gg(o, r, n, i, t[a + 10], 9, 38016083)),
            (i = this.md5_gg(i, o, r, n, t[a + 15], 14, -660478335)),
            (n = this.md5_gg(n, i, o, r, t[a + 4], 20, -405537848)),
            (r = this.md5_gg(r, n, i, o, t[a + 9], 5, 568446438)),
            (o = this.md5_gg(o, r, n, i, t[a + 14], 9, -1019803690)),
            (i = this.md5_gg(i, o, r, n, t[a + 3], 14, -187363961)),
            (n = this.md5_gg(n, i, o, r, t[a + 8], 20, 1163531501)),
            (r = this.md5_gg(r, n, i, o, t[a + 13], 5, -1444681467)),
            (o = this.md5_gg(o, r, n, i, t[a + 2], 9, -51403784)),
            (i = this.md5_gg(i, o, r, n, t[a + 7], 14, 1735328473)),
            (n = this.md5_gg(n, i, o, r, t[a + 12], 20, -1926607734)),
            (r = this.md5_hh(r, n, i, o, t[a + 5], 4, -378558)),
            (o = this.md5_hh(o, r, n, i, t[a + 8], 11, -2022574463)),
            (i = this.md5_hh(i, o, r, n, t[a + 11], 16, 1839030562)),
            (n = this.md5_hh(n, i, o, r, t[a + 14], 23, -35309556)),
            (r = this.md5_hh(r, n, i, o, t[a + 1], 4, -1530992060)),
            (o = this.md5_hh(o, r, n, i, t[a + 4], 11, 1272893353)),
            (i = this.md5_hh(i, o, r, n, t[a + 7], 16, -155497632)),
            (n = this.md5_hh(n, i, o, r, t[a + 10], 23, -1094730640)),
            (r = this.md5_hh(r, n, i, o, t[a + 13], 4, 681279174)),
            (o = this.md5_hh(o, r, n, i, t[a + 0], 11, -358537222)),
            (i = this.md5_hh(i, o, r, n, t[a + 3], 16, -722521979)),
            (n = this.md5_hh(n, i, o, r, t[a + 6], 23, 76029189)),
            (r = this.md5_hh(r, n, i, o, t[a + 9], 4, -640364487)),
            (o = this.md5_hh(o, r, n, i, t[a + 12], 11, -421815835)),
            (i = this.md5_hh(i, o, r, n, t[a + 15], 16, 530742520)),
            (n = this.md5_hh(n, i, o, r, t[a + 2], 23, -995338651)),
            (r = this.md5_ii(r, n, i, o, t[a + 0], 6, -198630844)),
            (o = this.md5_ii(o, r, n, i, t[a + 7], 10, 1126891415)),
            (i = this.md5_ii(i, o, r, n, t[a + 14], 15, -1416354905)),
            (n = this.md5_ii(n, i, o, r, t[a + 5], 21, -57434055)),
            (r = this.md5_ii(r, n, i, o, t[a + 12], 6, 1700485571)),
            (o = this.md5_ii(o, r, n, i, t[a + 3], 10, -1894986606)),
            (i = this.md5_ii(i, o, r, n, t[a + 10], 15, -1051523)),
            (n = this.md5_ii(n, i, o, r, t[a + 1], 21, -2054922799)),
            (r = this.md5_ii(r, n, i, o, t[a + 8], 6, 1873313359)),
            (o = this.md5_ii(o, r, n, i, t[a + 15], 10, -30611744)),
            (i = this.md5_ii(i, o, r, n, t[a + 6], 15, -1560198380)),
            (n = this.md5_ii(n, i, o, r, t[a + 13], 21, 1309151649)),
            (r = this.md5_ii(r, n, i, o, t[a + 4], 6, -145523070)),
            (o = this.md5_ii(o, r, n, i, t[a + 11], 10, -1120210379)),
            (i = this.md5_ii(i, o, r, n, t[a + 2], 15, 718787259)),
            (n = this.md5_ii(n, i, o, r, t[a + 9], 21, -343485551)),
            (r = this.safe_add(r, s)),
            (n = this.safe_add(n, c)),
            (i = this.safe_add(i, d)),
            (o = this.safe_add(o, u));
        }
        return Array(r, n, i, o);
      },
      md5_cmn: function (t, e, r, n, i, o) {
        return this.safe_add(
          this.bit_rol(
            this.safe_add(this.safe_add(e, t), this.safe_add(n, o)),
            i
          ),
          r
        );
      },
      md5_ff: function (t, e, r, n, i, o, a) {
        return this.md5_cmn((e & r) | (~e & n), t, e, i, o, a);
      },
      md5_gg: function (t, e, r, n, i, o, a) {
        return this.md5_cmn((e & n) | (r & ~n), t, e, i, o, a);
      },
      md5_hh: function (t, e, r, n, i, o, a) {
        return this.md5_cmn(e ^ r ^ n, t, e, i, o, a);
      },
      md5_ii: function (t, e, r, n, i, o, a) {
        return this.md5_cmn(r ^ (e | ~n), t, e, i, o, a);
      },
      safe_add: function (t, e) {
        var r = (65535 & t) + (65535 & e);
        return (((t >> 16) + (e >> 16) + (r >> 16)) << 16) | (65535 & r);
      },
      bit_rol: function (t, e) {
        return (t << e) | (t >>> (32 - e));
      },
      str2binl: function (t) {
        for (
          var e = Array(), r = (1 << this.chrsz) - 1, n = 0;
          n < t.length * this.chrsz;
          n += this.chrsz
        )
          e[n >> 5] |= (t.charCodeAt(n / this.chrsz) & r) << n % 32;
        return e;
      },
      binl2hex: function (t) {
        for (var e = "0123456789abcdef", r = "", n = 0; n < 4 * t.length; n++)
          r +=
            e.charAt((t[n >> 2] >> ((n % 4) * 8 + 4)) & 15) +
            e.charAt((t[n >> 2] >> ((n % 4) * 8)) & 15);
        return r;
      },
    },
    Base64: {
      _keyStr:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      encode: function (t) {
        var e,
          r,
          n,
          i,
          o,
          a,
          s,
          c = "",
          d = 0;
        for (t = this._utf8_encode(t); d < t.length; )
          (i = (e = t.charCodeAt(d++)) >> 2),
            (o = ((3 & e) << 4) | ((r = t.charCodeAt(d++)) >> 4)),
            (a = ((15 & r) << 2) | ((n = t.charCodeAt(d++)) >> 6)),
            (s = 63 & n),
            isNaN(r) ? (a = s = 64) : isNaN(n) && (s = 64),
            (c =
              c +
              this._keyStr.charAt(i) +
              this._keyStr.charAt(o) +
              this._keyStr.charAt(a) +
              this._keyStr.charAt(s));
        return c;
      },
      _utf8_encode: function (t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", r = 0; r < t.length; r++) {
          var n = t.charCodeAt(r);
          n < 128
            ? (e += String.fromCharCode(n))
            : n > 127 && n < 2048
            ? ((e += String.fromCharCode((n >> 6) | 192)),
              (e += String.fromCharCode((63 & n) | 128)))
            : ((e += String.fromCharCode((n >> 12) | 224)),
              (e += String.fromCharCode(((n >> 6) & 63) | 128)),
              (e += String.fromCharCode((63 & n) | 128)));
        }
        return e;
      },
    },
  },
  function getFingerprint() {
    var t = {};
    !(function () {
      try {
        (t.b = fingerprint.util.getCookie("shshshfpa")),
          (t.c = fingerprint.util.getFpb("shshshfpb")),
          (t.d = fingerprint.broswer.getNavigatorPlatform()),
          (t.f = fingerprint.broswer.getDeviceMemory()),
          (t.g = fingerprint.broswer.getHeadless()),
          (t.h = ""),
          (t.i = fingerprint.config.api.canvas_spendtime),
          (t.j = fingerprint.util.getDateFormat(
            new Date(),
            "yyyy-MM-dd hh:mm:ss"
          )),
          (t.k = fingerprint.broswer.getLocation()),
          (t.l = fingerprint.broswer.getUserAgent()),
          (t.m =
            fingerprint.util.getCookie("pin") ||
            fingerprint.util.getCookie("pt_pin")),
          (t.n = fingerprint.broswer.getPluginName()),
          (t.o = fingerprint.broswer.getPluginNum()),
          (t.p = fingerprint.broswer.getScreenResolution());
      } catch (e) {
        return "error setData:" + e;
      }
    })();
    try {
      return "v001" + fingerprint.util.Base64.encode(JSON.stringify(t));
    } catch (e) {
      return console.log(e), "error encodeData:" + e;
    }
  };

!(function () {
  function f(t) {
    return t < 10 ? "0" + t : t;
  }
  var cx, escapable, gap, indent, meta;
  function quote(t) {
    return (
      (escapable.lastIndex = 0),
      escapable.test(t)
        ? '"' +
          t.replace(escapable, function (t) {
            var e = meta[t];
            return "string" == typeof e
              ? e
              : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
          }) +
          '"'
        : '"' + t + '"'
    );
  }
  function str(t, e) {
    var r,
      n,
      i,
      o,
      a,
      s = gap,
      c = e[t];
    switch (
      (c &&
        "object" == typeof c &&
        "function" == typeof c.toJSON &&
        (c = c.toJSON(t)),
      typeof c)
    ) {
      case "string":
        return quote(c);
      case "number":
        return isFinite(c) ? String(c) : "null";
      case "boolean":
      case "null":
        return String(c);
      case "object":
        if (!c) return "null";
        if (
          ((gap += indent),
          (a = []),
          "[object Array]" === Object.prototype.toString.apply(c))
        ) {
          for (o = c.length, r = 0; r < o; r += 1) a[r] = str(r, c) || "null";
          return (
            (i =
              0 === a.length
                ? "[]"
                : gap
                ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]"
                : "[" + a.join(",") + "]"),
            (gap = s),
            i
          );
        }
        for (n in c)
          Object.prototype.hasOwnProperty.call(c, n) &&
            (i = str(n, c)) &&
            a.push(quote(n) + (gap ? ": " : ":") + i);
        return (
          (i =
            0 === a.length
              ? "{}"
              : gap
              ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}"
              : "{" + a.join(",") + "}"),
          (gap = s),
          i
        );
    }
  }
  "object" != typeof JSON && (JSON = {}),
    "function" != typeof Date.prototype.toJSON &&
      ((Date.prototype.toJSON = function () {
        return isFinite(this.valueOf())
          ? this.getUTCFullYear() +
              "-" +
              f(this.getUTCMonth() + 1) +
              "-" +
              f(this.getUTCDate()) +
              "T" +
              f(this.getUTCHours()) +
              ":" +
              f(this.getUTCMinutes()) +
              ":" +
              f(this.getUTCSeconds()) +
              "Z"
          : null;
      }),
      (String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON =
          function () {
            return this.valueOf();
          })),
    "function" != typeof JSON.stringify &&
      ((escapable =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
      (meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      }),
      (JSON.stringify = function (t, e) {
        var r;
        if (((gap = ""), (indent = ""), "number" == typeof e))
          for (r = 0; r < e; r += 1) indent += " ";
        else "string" == typeof e && (indent = e);
        return str("", { "": t });
      })),
    "function" != typeof JSON.parse &&
      ((cx =
        /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
      (JSON.parse = function (text) {
        if (
          ((text = String(text)),
          (cx.lastIndex = 0),
          cx.test(text) &&
            (text = text.replace(cx, function (t) {
              return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
            })),
          /^[\],:{}\s]*$/.test(
            text
              .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
              .replace(
                /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]"
              )
              .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
          ))
        )
          return eval("(" + text + ")");
        throw new SyntaxError("JSON.parse");
      }));
})(),
_convertFunc1();

  (function () {
    document.getElementsByClassName ||
      (document.getElementsByClassName = function (t) {
        for (
          var e = document.getElementsByTagName("*"), r = [], n = 0;
          n < e.length;
          n++
        )
          for (
            var i = e[n], o = i.className.split(" "), a = 0;
            a < o.length;
            a++
          )
            if (o[a] == t) {
              r.push(i);
              break;
            }
        return r;
      });
    var t = function (t) {
        try {
          var e = t.target || t.srcElement;
          if (((s = !1), (a = e) && a.tagName && (s = !0), s)) {
            var r =
              (function (t, e, r) {
                for (
                  var n = "", i = "", o = "", a = "", s = [];
                  t && 1 == t.nodeType;
                  t = t.parentNode
                ) {
                  if ("" !== t.id) {
                    n = "//*[@id='" + t.id + "']" + n;
                    break;
                  }
                  if (((i = ""), (o = ""), (a = ""), (s = []), t.parentNode))
                    for (
                      var c = t.parentNode.childNodes,
                        d = 0,
                        u = 0,
                        g = c.length;
                      d < g;
                      d++
                    ) {
                      var l = c[d];
                      t.tagName === l.tagName && u++,
                        t == l &&
                          ((i = u > 1 ? "[" + u + "]" : ""),
                          e &&
                            t.className &&
                            ((o = "class='" + t.className + "'"), s.push(o)),
                          r &&
                            0 === t.children.length &&
                            (a = t.innerText
                              .replace(/(^\s*)|(\s*$)/g, "")
                              .replace(/"/g, "'")) &&
                            ((a = "innertext='" + a + "'"), s.push(a)));
                    }
                  s.length > 0 && (s = "<" + s.join(",") + ">"),
                    (n = "/" + t.tagName.toLowerCase() + i + s + n);
                }
                return n;
              })(e, !0, !0) || "-";
            (n = "__FULL__"),
              (i = "__COLLECT__"),
              (o = JSON.stringify({
                _xpath_: encodeURIComponent(r),
                _realURL_: encodeURIComponent(
                  window.location.href.replace(/"/g, "'")
                ),
              })),
              JA &&
                JA.tracker.ngloader("other.000000", { t1: n, t2: i, p0: o });
          }
        } catch (c) {
          privateLogJOYAJS("ERROR", "AT_xpathReport", encodeURIComponent(c));
        }
        var n, i, o, a, s;
      },
      r = function (t) {
        var e = document.createElement("script");
        (e.type = "application/javascript"),
          (e.src = t),
          (e.charset = "UTF-8"),
          document.getElementsByTagName("head")[0].appendChild(e);
      },
      n = function (t) {
        var e = document.createElement("link");
        (e.type = "text/css"),
          (e.rel = "stylesheet"),
          (e.href = t),
          document.getElementsByTagName("head")[0].appendChild(e);
      },
      i = function (t, e) {
        return t && t.getAttribute
          ? "class" == e
            ? t.className ||
              t.getAttribute("className") ||
              t.getAttribute("class")
            : t.getAttribute(e)
          : "";
      };
    var o,
      a,
      s,
      c,
      d = [
        "JA2017_111813",
        "JA2020_1222916",
        "JA2022_12340042",
        "JA2018_1231063",
        "JA2017_112683",
        "JA2018_113988",
        "JA2022_1224145",
      ],
      u = JA && JA.tracker.getConfig(),
      g = (function () {
        for (var t = u && u.account, e = 0; e < d.length; e++)
          if (t === d[e]) return !0;
        return !1;
      })();
    if (u && u.account)
      try {
        (o = "https://stream-outside.jd.com/checkWhiteList?code=" + u.account),
          (a = ""),
          (s = function (t) {
            t && t.header && "0" === t.header.code && (g = t.body);
          }),
          (c = window.XMLHttpRequest
            ? new window.XMLHttpRequest()
            : new ActiveXObject("Microsoft.XMLHTTP")).open("GET", o, !0),
          c.setRequestHeader("Content-Type", "text/plain"),
          (c.timeout = 1e4),
          (c.onreadystatechange = function () {
            4 === c.readyState &&
              200 == c.status &&
              (s && s(JSON.parse(c.responseText)), (c = null));
          }),
          c.send(JSON.stringify(a));
      } catch (e) {}
    var l,
      f,
      h,
      p,
      m =
        ((l = "typepar"),
        (h = f || document.location.href),
        (p = new RegExp("(?:^|&|[?]|[/])" + l + "=([^&]*)").exec(h))
          ? decodeURIComponent(p[1])
          : null);
    if (!m || ("query" !== m && "apply" !== m))
      document.onclick = function (e) {
        if ((e = e || event).clientX || e.clientY || e.pageX || e.pageY) {
          try {
            g && t(e);
          } catch (e) {
            privateLogJOYAJS("ERROR", "AT_Document_Onclick");
          }
          var r,
            n,
            o = document;
          r = n = e.srcElement || e.target;
          for (
            var a = i(n, "clstag"), s = i(n, "href"), c = "";
            !a && (n = n.parentNode) && "BODY" != n.nodeName;

          )
            (a = i(n, "clstag")), s || ((s = i(n, "href")), (r = n));
          if (a) {
            var d = a.split("|"),
              u = d[1],
              l = d[2],
              f = d[3];
            "keycount" === u &&
              ((c = l + "|" + f),
              s ? privateLogJOYAJS(l, f, "Q", s) : privateLogJOYAJS(l, f, "Q"),
              s &&
                /^(http:\/\/|https:\/\/|\/\/).*/.test(s) &&
                "_blank" !== i(r, "target") &&
                !isMeta(e) &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                setTimeout(function () {
                  window.location.href = s;
                }, 200)));
          }
          var h = this.location.hostname.toLowerCase();
          if (
            /(sale|mall|jmall|pop).(jd|360buy).(com|hk)/.test(h) ||
            window.ja_heat_map
          ) {
            var p = 0,
              m = 0,
              v =
                window.screen.width >= 1210 &&
                ("item.jd.com" == h ||
                  "item.jd.hk" == h ||
                  "item.jdworldwide.com" == h)
                  ? 1210
                  : 990,
              _ =
                o.body.clientWidth > v
                  ? Math.round((o.body.clientWidth - v) / 2)
                  : 0;
            e.pageX || e.pageY
              ? ((p = e.pageX), (m = e.pageY))
              : ((p = e.clientX + o.body.scrollLeft - o.body.clientLeft),
                (m = e.clientY + o.body.scrollTop - o.body.clientTop)),
              privateLogJOYAJS(
                "d",
                "c",
                c || "-",
                p + "x" + m,
                o.body.scrollWidth + "x" + o.body.scrollHeight,
                _
              );
          }
        }
      };
    else
      try {
        n("//magicforest.jd.com/x.css"), r("//magicforest.jd.com/tol.min.js");
      } catch (e) {
        privateLogJOYAJS("ERROR", "AT_loadCSS_OR_loadJS");
      }
    var v = [];
    function _(t) {
      for (
        var e = document.querySelectorAll('[exptag*="keycount"]'), r = 0;
        r < e.length;
        r++
      ) {
        "_eflag" !== i(e[r], "__exptag_flag__") && t.observe(e[r]);
      }
    }
    function w() {
      try {
        var t =
          ((r = u.exp_threshold || 0.35),
          (n = new IntersectionObserver(
            function (t) {
              for (var e = 0; e < t.length; e++) {
                var r = t[e],
                  o = r.target;
                if (r.isIntersecting && o && !i(o, "__exptag_flag__")) {
                  var a = i(o, "exptag");
                  if (a) {
                    var s = a.split("|"),
                      c = s[1],
                      d = s[2],
                      g = s[3],
                      l = s[4];
                    "keycount" === c &&
                      (u.exp_auto_send + "" != "false"
                        ? expLogJSON(d, g, l)
                        : ((r.t1 = d), (r.t2 = g), (r.obj = l), v.push(r)));
                  }
                  n.unobserve(o), o.setAttribute("__exptag_flag__", "_eflag");
                }
              }
            },
            { threshold: r }
          )));
        if ("MutationObserver" in window) {
          new MutationObserver(function (e) {
            _(t);
          }).observe(document, { childList: !0, subtree: !0 });
        }
        _(t);
      } catch (e) {}
      var r, n;
    }
    (JA.tracker.takeExpRecords = function () {
      var t = v.slice();
      return (v = []), t;
    }),
      u.auto_exposure + "" == "true" &&
        (!1 in window
          ? JA.util.loadJs(
              "https://wl.jd.com/plugin-intersection-observer.js",
              function () {
                w();
              }
            )
          : w()),
      document.location.href.indexOf("__clsData=") > -1 &&
        (n("//magicforest.jd.com/cls.css"), r("//magicforest.jd.com/cls.js"));
  })();
