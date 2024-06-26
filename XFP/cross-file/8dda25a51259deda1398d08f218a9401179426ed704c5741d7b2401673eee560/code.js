/* 2023-12-06 10:33:39 wl.js @issue to huangzhihua@jd.com Thanks */
import {setCookieMills} from './setCookieMills.js';
import {getCookie} from './getCookie.js';
import {deleteCookie} from './deleteCookie.js';
import {seClick} from './seClick.js';
import {appendJSONCookie} from './appendJSONCookie.js';
import {reBook} from './reBook.js';
import {fe} from './fe.js';
import {reClick2012} from './reClick2012.js';
import {reClickCube} from './reClickCube.js';
import {mark} from './mark.js';
import {isMeta} from './isMeta.js';
import {HashMap} from './HashMap.js';
import {getNavigatorPlatform} from './getNavigatorPlatform.js';
import {getDeviceMemory} from './getDeviceMemory.js';
import {getCanvas} from './getCanvas.js';
import {getPluginNum} from './getPluginNum.js';
import {getScreenResolution} from './getScreenResolution.js';
import {getPluginName} from './getPluginName.js';
// import {getCookie} from './getCookie.js';
import {getStorage} from './getStorage.js';
import {setStorage} from './setStorage.js';
import {getFpb} from './getFpb.js';
import {getDateFormat} from './getDateFormat.js';
import {hex_md5} from './hex_md5.js';
import {core_md5} from './core_md5.js';
import {getHistory} from './getHistory.js';
import {privateLogWLJS} from './privateLogWLJS.js';
import {log} from './log.js';
import {logJSON} from './logJSON.js';
import {expLogJSON} from './expLogJSON.js';
import {RecommendTrans} from './RecommendTrans.js';
import {simpleMold} from './simpleMold.js';
import {complexMold} from './complexMold.js';
import {loginfo} from './loginfo.js';
import {isChecked} from './isChecked.js';
import {funLoad} from './funLoad.js';
import {Clublog} from './Clublog.js';

try {
  window.fingerprint = {},
    fingerprint.config = {
      fpb_send_data:
        'body={"appname": "jdwebm_hf","jdkey": "","whwswswws": "","businness": "","body": {}}',
      api: { canvas_spendtime: 0 },
    },
    fingerprint.broswer = {
      getNavigatorPlatform: getNavigatorPlatform,
      getDeviceMemory: getDeviceMemory,
      rB: function () {
        var e = [],
          t = [
            "__webdriver_evaluate",
            "__selenium_evaluate",
            "__webdriver_script_function",
            "__webdriver_script_func",
            "__webdriver_script_fn",
            "__fxdriver_evaluate",
            "__driver_unwrapped",
            "__webdriver_unwrapped",
            "__driver_evaluate",
            "__selenium_unwrapped",
            "__fxdriver_unwrapped",
          ],
          r = [
            "_phantom",
            "__nightmare",
            "_selenium",
            "callPhantom",
            "callSelenium",
            "_Selenium_IDE_Recorder",
          ];
        for (var n in r) {
          var i = r[n];
          window[i] && e.push({ key: "window", value: i });
        }
        for (var o in t)
          (r = t[o]),
            window.document[r] && e.push({ key: "window_document", value: r });
        for (var a in window.document)
          a.match(/\$[a-z]dc_/) &&
            window.document[a].cache_ &&
            e.push({ key: "document", value: a });
        return (
          window.external &&
            JSON.stringify(window.external) &&
            -1 != JSON.stringify(window.external).indexOf("Sequentum") &&
            e.push({ key: "window_external", value: 1 }),
          window.document.documentElement.getAttribute("selenium") &&
            e.push({ key: "document_selenium", value: 1 }),
          window.document.documentElement.getAttribute("webdriver") &&
            e.push({ key: "document_webdriver", value: 1 }),
          window.document.documentElement.getAttribute("driver") &&
            e.push({ key: "document_driver", value: 1 }),
          e
        );
      },
      getHeadless: function () {
        return this.rB().length > 0
          ? 1
          : navigator.userAgent.toLocaleLowerCase().indexOf("headless") > -1
          ? 1
          : 0;
      },
      getLocation: function () {
        return fingerprint.util.MD5.hex_md5(location.href.split("?")[0]);
      },
      getUserAgent: function () {
        return fingerprint.util.MD5.hex_md5(navigator.userAgent);
      },
      getCanvas: getCanvas,
      getPluginName: getPluginName,
      getPluginNum: getPluginNum,
      getScreenResolution: getScreenResolution,
    },
    (fingerprint.util = {
      G: "",
      getCookie: getCookie,
      getStorage: getStorage,
      setStorage: setStorage,
      _str_find: function (e, t) {
        if ("string" == typeof e) {
          var r = t + "=",
            n = e.indexOf(r);
          if (-1 !== n) {
            var i = e.indexOf("&", n);
            return -1 !== i
              ? e.substring(n + r.length, i)
              : e.substring(n + r.length);
          }
        }
      },
      getFpb: getFpb,
      getDateFormat: getDateFormat,
      MD5: {
        chrsz: 8,
        G: "",
        hex_md5: hex_md5,
        core_md5: core_md5,
        md5_cmn: function (e, t, r, n, i, o) {
          return this.safe_add(
            this.bit_rol(
              this.safe_add(this.safe_add(t, e), this.safe_add(n, o)),
              i
            ),
            r
          );
        },
        md5_ff: function (e, t, r, n, i, o, a) {
          return this.md5_cmn((t & r) | (~t & n), e, t, i, o, a);
        },
        md5_gg: function (e, t, r, n, i, o, a) {
          return this.md5_cmn((t & n) | (r & ~n), e, t, i, o, a);
        },
        md5_hh: function (e, t, r, n, i, o, a) {
          return this.md5_cmn(t ^ r ^ n, e, t, i, o, a);
        },
        md5_ii: function (e, t, r, n, i, o, a) {
          return this.md5_cmn(r ^ (t | ~n), e, t, i, o, a);
        },
        safe_add: function (e, t) {
          var r = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
        },
        bit_rol: function (e, t) {
          return (e << t) | (e >>> (32 - t));
        },
        str2binl: function (e) {
          for (
            var t = Array(), r = (1 << this.chrsz) - 1, n = 0;
            n < e.length * this.chrsz;
            n += this.chrsz
          )
            t[n >> 5] |= (e.charCodeAt(n / this.chrsz) & r) << n % 32;
          return t;
        },
        binl2hex: function (e) {
          for (var t = "0123456789abcdef", r = "", n = 0; n < 4 * e.length; n++)
            r +=
              t.charAt((e[n >> 2] >> ((n % 4) * 8 + 4)) & 15) +
              t.charAt((e[n >> 2] >> ((n % 4) * 8)) & 15);
          return r;
        },
      },
      Base64: {
        _keyStr:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (e) {
          var t,
            r,
            n,
            i,
            o,
            a,
            s,
            d = "",
            c = 0;
          for (e = this._utf8_encode(e); c < e.length; )
            (i = (t = e.charCodeAt(c++)) >> 2),
              (o = ((3 & t) << 4) | ((r = e.charCodeAt(c++)) >> 4)),
              (a = ((15 & r) << 2) | ((n = e.charCodeAt(c++)) >> 6)),
              (s = 63 & n),
              isNaN(r) ? (a = s = 64) : isNaN(n) && (s = 64),
              (d =
                d +
                this._keyStr.charAt(i) +
                this._keyStr.charAt(o) +
                this._keyStr.charAt(a) +
                this._keyStr.charAt(s));
          return d;
        },
        _utf8_encode: function (e) {
          e = e.replace(/\r\n/g, "\n");
          for (var t = "", r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r);
            n < 128
              ? (t += String.fromCharCode(n))
              : n > 127 && n < 2048
              ? ((t += String.fromCharCode((n >> 6) | 192)),
                (t += String.fromCharCode((63 & n) | 128)))
              : ((t += String.fromCharCode((n >> 12) | 224)),
                (t += String.fromCharCode(((n >> 6) & 63) | 128)),
                (t += String.fromCharCode((63 & n) | 128)));
          }
          return t;
        },
      },
    }),
    (getFingerprint = function () {
      var e = {};
      !(function () {
        try {
          (e.b = fingerprint.util.getCookie("shshshfpa")),
            (e.c = fingerprint.util.getFpb("shshshfpb")),
            (e.d = fingerprint.broswer.getNavigatorPlatform()),
            (e.f = fingerprint.broswer.getDeviceMemory()),
            (e.g = fingerprint.broswer.getHeadless()),
            (e.h = ""),
            (e.i = fingerprint.config.api.canvas_spendtime),
            (e.j = fingerprint.util.getDateFormat(
              new Date(),
              "yyyy-MM-dd hh:mm:ss"
            )),
            (e.k = fingerprint.broswer.getLocation()),
            (e.l = fingerprint.broswer.getUserAgent()),
            (e.m =
              fingerprint.util.getCookie("pin") ||
              fingerprint.util.getCookie("pt_pin")),
            (e.n = fingerprint.broswer.getPluginName()),
            (e.o = fingerprint.broswer.getPluginNum()),
            (e.p = fingerprint.broswer.getScreenResolution());
        } catch (t) {
          return "error setData:" + t;
        }
      })();
      try {
        return "v001" + fingerprint.util.Base64.encode(JSON.stringify(e));
      } catch (t) {
        return console.log(t), "error encodeData:" + t;
      }
    });
} catch (e) {
  function getFingerprint() {
    return console.log(e), "error :" + e;
  };
}

// !(function ($) {
//   var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
//     meta = {
//       "\b": "\\b",
//       "\t": "\\t",
//       "\n": "\\n",
//       "\f": "\\f",
//       "\r": "\\r",
//       '"': '\\"',
//       "\\": "\\\\",
//     };
//   ($.toJSON =
//     "object" == typeof JSON && JSON.stringify
//       ? JSON.stringify
//       : function (e) {
//           if (null === e) return "null";
//           var t = typeof e;
//           if ("undefined" === t) return undefined;
//           if ("number" === t || "boolean" === t) return "" + e;
//           if ("string" === t) return $.quoteString(e);
//           if ("object" === t) {
//             if ("function" == typeof e.toJSON) return $.toJSON(e.toJSON());
//             if (e.constructor === Date) {
//               var r = e.getUTCMonth() + 1,
//                 n = e.getUTCDate(),
//                 i = e.getUTCFullYear(),
//                 o = e.getUTCHours(),
//                 a = e.getUTCMinutes(),
//                 s = e.getUTCSeconds(),
//                 d = e.getUTCMilliseconds();
//               return (
//                 r < 10 && (r = "0" + r),
//                 n < 10 && (n = "0" + n),
//                 o < 10 && (o = "0" + o),
//                 a < 10 && (a = "0" + a),
//                 s < 10 && (s = "0" + s),
//                 d < 100 && (d = "0" + d),
//                 d < 10 && (d = "0" + d),
//                 '"' +
//                   i +
//                   "-" +
//                   r +
//                   "-" +
//                   n +
//                   "T" +
//                   o +
//                   ":" +
//                   a +
//                   ":" +
//                   s +
//                   "." +
//                   d +
//                   'Z"'
//               );
//             }
//             if (e.constructor === Array) {
//               for (var c = [], u = 0; u < e.length; u++)
//                 c.push($.toJSON(e[u]) || "null");
//               return "[" + c.join(",") + "]";
//             }
//             var l,
//               g,
//               h = [];
//             for (var f in e) {
//               if ("number" === (t = typeof f)) l = '"' + f + '"';
//               else {
//                 if ("string" !== t) continue;
//                 l = $.quoteString(f);
//               }
//               "function" !== (t = typeof e[f]) &&
//                 "undefined" !== t &&
//                 ((g = $.toJSON(e[f])), h.push(l + ":" + g));
//             }
//             return "{" + h.join(",") + "}";
//           }
//         }),
//     ($.evalJSON =
//       "object" == typeof JSON && JSON.parse
//         ? JSON.parse
//         : function (src) {
//             return eval("(" + src + ")");
//           }),
//     ($.secureEvalJSON =
//       "object" == typeof JSON && JSON.parse
//         ? JSON.parse
//         : function (src) {
//             var filtered = src
//               .replace(/\\["\\\/bfnrtu]/g, "@")
//               .replace(
//                 /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
//                 "]"
//               )
//               .replace(/(?:^|:|,)(?:\s*\[)+/g, "");
//             if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + src + ")");
//             throw new SyntaxError("Error parsing JSON, source is not valid.");
//           }),
//     ($.quoteString = function (e) {
//       return e.match(escapeable)
//         ? '"' +
//             e.replace(escapeable, function (e) {
//               var t = meta[e];
//               return "string" == typeof t
//                 ? t
//                 : ((t = e.charCodeAt()),
//                   "\\u00" +
//                     Math.floor(t / 16).toString(16) +
//                     (t % 16).toString(16));
//             }) +
//             '"'
//         : '"' + e + '"';
//     });
// })(jQuery || $),
_convertFunc1() 
  function _convertFunc1() {
    var t,
      r = function (e) {
        for (var t = "", r = ""; e && 1 == e.nodeType; e = e.parentNode) {
          if (((r = ""), e.parentNode))
            for (
              var n = e.parentNode.childNodes, i = 0, o = 0, a = n.length;
              i < a;
              i++
            ) {
              var s = n[i];
              e.tagName === s.tagName && o++,
                e == s && (r = o > 1 ? "[" + o + "]" : "");
            }
          t = "/" + e.tagName.toLowerCase() + r + t;
        }
        return t;
      },
      n = function (e) {
        for (var t = "", r = ""; e && 1 == e.nodeType; e = e.parentNode) {
          if ("" !== e.id) {
            t = '//*[@id="' + e.id + '"]' + t;
            break;
          }
          if (((r = ""), e.parentNode))
            for (
              var n = e.parentNode.childNodes, i = 0, o = 0, a = n.length;
              i < a;
              i++
            ) {
              var s = n[i];
              e.tagName === s.tagName && o++,
                e == s && (r = o > 1 ? "[" + o + "]" : "");
            }
          t = "/" + e.tagName.toLowerCase() + r + t;
        }
        return t;
      },
      i = function (e) {
        var t = !0;
        return e.children.length > 0 && (t = !1), t;
      },
      o = function (e) {
        var t = !1;
        if (e && e.tagName) {
          var r = e.tagName.toLowerCase();
          t =
            !(
              "html" === r ||
              "body" === r ||
              (e.id && "tol_selected_xelemts_area" === e.id) ||
              (e.parentElement &&
                e.parentElement.id &&
                "tol_selected_xelemts_area" === e.parentElement.id)
            ) &&
            (!!(function (e) {
              a = $(e).attr("clstag");
              for (; !a && (e = e.parentNode) && "BODY" != e.nodeName; )
                a = $(e).attr("clstag");
              return !!a;
            })(e) ||
              "a" === r ||
              i(e));
        }
        return t;
      },
      a = "";
    function s(e) {
      var t = 0;
      return (
        e && e.length > 500 && (t = e.indexOf("?")) && (e = e.substring(0, t)),
        e
      );
    }
    document.getElementsByClassName ||
      (document.getElementsByClassName = function (e) {
        for (
          var t = document.getElementsByTagName("*"), r = [], n = 0;
          n < t.length;
          n++
        )
          for (
            var i = t[n], o = i.className.split(" "), a = 0;
            a < o.length;
            a++
          )
            if (o[a] == e) {
              r.push(i);
              break;
            }
        return r;
      });
    var d = function (e) {
        var r,
          n,
          i = {};
        return (
          (i.scrollWidth = document.body.scrollWidth),
          (i.scrollHeight = document.body.scrollHeight),
          (i.offsetLeft = (function () {
            if (!t) {
              var e =
                window.location.hostname.indexOf("jd.com") >= 0
                  ? document.getElementsByClassName("w")
                  : "";
              t =
                e && e.length > 0
                  ? e[e.length - 1].offsetWidth
                  : window.screen.width >= 1210
                  ? 1210
                  : 990;
            }
            return document.body.clientWidth > t
              ? Math.round((document.body.clientWidth - t) / 2)
              : 0;
          })()),
          (i.x = parseInt(
            (r = e).pageX
              ? r.pageX
              : r.clientX
              ? r.clientX +
                (document.documentElement.scrollLeft
                  ? document.documentElement.scrollLeft
                  : document.body.scrollLeft)
              : -1
          )),
          (i.y = parseInt(
            (n = e).pageY
              ? n.pageY
              : n.clientY
              ? n.clientY +
                (document.documentElement.scrollTop
                  ? document.documentElement.scrollTop
                  : document.body.scrollTop)
              : -1
          )),
          i.offsetLeft > 0 && (i.x = parseInt(i.x - i.offsetLeft)),
          i
        );
      },
      c = function (e) {
        try {
          var t = e.target || e.srcElement;
          if (o(t)) {
            for (
              var c = d(e),
                u = t,
                l = t.tagName.toLowerCase(),
                g = n(t) || "-",
                h = t.parentNode ? n(t.parentNode) : "-",
                f = t.parentNode ? r(t.parentNode) + "/" : "-",
                p = r(t) || "-",
                m = (p && p.split("/").length, u.tagName.toLowerCase());
              "a" != m && (u = u.parentNode) && "BODY" != u.nodeName;

            )
              m = u.tagName.toLowerCase();
            if (a) {
              var v = a.split("|");
              v[2], v[3];
            }
            var w = u && u.href ? s(u.href) : "-",
              _ = t.innerText.substring(0.2) || "-",
              b = t.src ? s(t.src) : "-";
            "a" !== l || i(t) || (_ = "-"),
              encodeURIComponent(g),
              encodeURIComponent(h),
              encodeURIComponent(f),
              c.x,
              c.y,
              c.scrollWidth,
              c.scrollHeight,
              c.offsetLeft,
              encodeURIComponent(w),
              encodeURIComponent(_),
              encodeURIComponent(b);
          }
        } catch (j) {
          privateLogWLJS("ERROR", "AT_xpathReport", encodeURIComponent(j));
        }
      },
      u = function (e) {
        var t = document.createElement("script");
        (t.type = "application/javascript"),
          (t.src = e),
          (t.charset = "UTF-8"),
          document.getElementsByTagName("head")[0].appendChild(t);
      },
      l = function (e) {
        var t = document.createElement("link");
        (t.type = "text/css"),
          (t.rel = "stylesheet"),
          (t.href = e),
          document.getElementsByTagName("head")[0].appendChild(t);
      };
    var g,
      h,
      f,
      p,
      m =
        ((g = "typepar"),
        (f = h || document.location.href),
        (p = new RegExp("(?:^|&|[?]|[/])" + g + "=([^&]*)").exec(f))
          ? decodeURIComponent(p[1])
          : null);
    if (!m || ("query" !== m && "apply" !== m))
      document.onclick = function (e) {
        if (
          ((e = e || event).clientX || e.clientY || e.pageX || e.pageY) &&
          (e.offsetX || e.offsetY)
        ) {
          try {
            c(e);
          } catch (e) {
            privateLogWLJS("ERROR", "AT_Document_Onclick");
          }
          for (
            var t = document,
              r = window,
              n = (tag = e.srcElement || e.target),
              i = $(tag).attr("clstag"),
              o = $(tag).attr("href"),
              a = "";
            !i && ((tag = tag.parentNode), tag && "BODY" != tag.nodeName);

          )
            (i = $(tag).attr("clstag")),
              o || ((o = $(tag).attr("href")), (n = tag));
          if (i) {
            var s = i.split("|"),
              d = s[1],
              u = s[2],
              l = s[3];
            if ("keycount" === d && JA) {
              var g = JA.util.Nt();
              o
                ? JA.tracker.ngloader("other.000000", {
                    t1: u,
                    t2: l,
                    p0: JA.util.join(["Q", o]),
                    cb: g.jdcb,
                  })
                : JA.tracker.ngloader("other.000000", {
                    t1: u,
                    t2: l,
                    p0: JA.util.join(["Q"]),
                    cb: g.jdcb,
                  }),
                (a = u + "|" + l),
                o &&
                  /^(http:\/\/|https:\/\/|\/\/).*/.test(o) &&
                  "_blank" !== $(n).attr("target") &&
                  !isMeta(e) &&
                  (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                  setTimeout(function () {
                    var e = t.createElement("a");
                    (e.href = o),
                      (e.target = "_self"),
                      t.body.appendChild(e),
                      "undefined" != typeof e.click
                        ? e.click()
                        : (r.location.href = o),
                      t.body.removeChild(e);
                  }, 200));
            }
          }
          var h = this.location.hostname.toLowerCase();
          if (
            /(sale|mall|jmall|pop).(jd|360buy).(com|hk)/.test(h) ||
            r.ja_heat_map
          ) {
            var f = 0,
              p = 0,
              m = r.screen.width >= 1210 && "item.jd.com" == h ? 1210 : 990,
              v =
                t.body.clientWidth > m
                  ? Math.round((t.body.clientWidth - m) / 2)
                  : 0;
            e.pageX || e.pageY
              ? ((f = e.pageX), (p = e.pageY))
              : ((f = e.clientX + t.body.scrollLeft - t.body.clientLeft),
                (p = e.clientY + t.body.scrollTop - t.body.clientTop)),
              privateLogWLJS(
                "d",
                "c",
                a || "-",
                f + "x" + p,
                t.body.scrollWidth + "x" + t.body.scrollHeight,
                v
              );
          }
        }
      };
    else
      try {
        l("//magicforest.jd.com/x.css"), u("//magicforest.jd.com/tol.min.js");
      } catch (e) {
        privateLogWLJS("ERROR", "AT_loadCSS_OR_loadJS");
      }
    document.location.href.indexOf("__clsData=") > -1 &&
      (l("//magicforest.jd.com/cls.css"), u("//magicforest.jd.com/cls.js"));
  }
  (HashMap.prototype.Set = function (e, t) {
    this.values[e] = t;
  }),
  (HashMap.prototype.Get = function (e) {
    return this.values[e];
  }),
  (HashMap.prototype.Contains = function (e) {
    return this.values.hasOwnProperty(e);
  }),
  (HashMap.prototype.Remove = function (e) {
    delete this.values[e];
  });
var SucInfoMethod = {
  Init: function () {
    (this.orderDetailMap = new HashMap()), (this.rSM = new HashMap());
    for (
      var e = SucInfo_OrderDetail.toString().split(","), t = 0;
      t < e.length;
      t++
    ) {
      var r = e[t].split(":");
      this.orderDetailMap.Set(r[0], r[1]), (this.sku = r[0]);
    }
  },
  GetSkuNum: function (e) {
    return this.orderDetailMap.Get(e);
  },
  Contains: function (e) {
    return this.orderDetailMap.Contains(e);
  },
  GetDefaultSku: function () {
    return this.sku;
  },
  ARS: function (e) {
    this.rSM.Set(e, 0);
  },
  RSContains: function (e) {
    return this.rSM.Contains(e) ? 1 : 0;
  },
};
// lll
// sddd 

!(function () {
  function HashMap() {
    this.values = new Object();
  }
  function SortedHashMap(e, t) {
    (this.IComparer = e),
      (this.IGetKey = t),
      (this.a = new Array()),
      (this.h = new HashMap());
  }
  function ThirdType(e, t, r) {
    (this.t = e),
      (this.v = 5),
      (this.s = 0),
      arguments.length > 1 && (this.s = t),
      arguments.length > 2 && (this.v = r);
  }
  (HashMap.prototype.Set = function (e, t) {
    this.values[e] = t;
  }),
    (HashMap.prototype.Get = function (e) {
      return this.values[e];
    }),
    (HashMap.prototype.Contains = function (e) {
      return this.values.hasOwnProperty(e);
    }),
    (HashMap.prototype.Remove = function (e) {
      delete this.values[e];
    }),
    (SortedHashMap.prototype.Add = function (e, t) {
      this.ContainsKey(e) && this.Remove(e),
        this.a.push(t),
        this.a.sort(this.IComparer);
      for (var r = 0; r < this.a.length; r++) {
        e = this.IGetKey(this.a[r]);
        this.h.Set(e, r);
      }
    }),
    (SortedHashMap.prototype.Insert = function (e, t) {
      for (var r = 0, n = this.a.length; r < n; r++)
        if (this.a[r].s === e.s) {
          this.a.splice(r, 1);
          break;
        }
      this.a.length >= t && this.a.splice(t - 1, 1), this.a.unshift(e);
    }),
    (SortedHashMap.prototype.Get = function (e) {
      return this.a[this.h.Get(e)];
    }),
    (SortedHashMap.prototype.Count = function () {
      return this.a.length;
    }),
    (SortedHashMap.prototype.Remove = function (e) {
      if (this.h.Contains(e)) {
        var t = this.h.Get(e);
        this.a.splice(t, 1), this.h.Remove(e);
      }
    }),
    (SortedHashMap.prototype.ContainsKey = function (e) {
      return this.h.Contains(e);
    }),
    (SortedHashMap.prototype.Clear = function () {
      (this.a = new Array()), (this.h = new HashMap());
    }),
    (SortedHashMap.prototype.GetJson = function () {
      return $.toJSON(this.a);
    }),
    (ThirdType.prototype.Increase = function () {
      this.v = this.v + 2;
    }),
    (ThirdType.prototype.Decrease = function () {
      this.v = this.v - 1;
    }),
    (ThirdType.prototype.SetSku = function (e) {
      this.s = e;
    }),
    (Ttracker = {
      IComparer: function (e, t) {
        return t.v - e.v;
      },
      IGetKey: function (e) {
        return e.t;
      },
      isbook: function (e) {
        return e > 1e7 && e < 2e7;
      },
      trace: function () {
        if (
          "object" == typeof pageConfig &&
          "object" == typeof pageConfig.product
        ) {
          var e =
            pageConfig.product.cat instanceof Array &&
            pageConfig.product.cat[2];
          if (e) {
            var t = $("#name").attr("PshowSkuid") || pageConfig.product.skuid;
            this.view(e, t), this.viewtypewid();
          }
        }
      },
      viewtypewid: function () {
        Ttracker.util.Vv("typewid") &&
          Ttracker.util.Wv("typewid", "", -63072e6);
      },
      viewhisotry: function (t, s, cname) {
        var nview = { t: t, s: s },
          bookmap = new SortedHashMap(this.IComparer, this.IGetKey),
          bview = Ttracker.util.Vv(cname);
        if (bview)
          try {
            if (bview.indexOf(".") > 0)
              for (
                var viewarray = bview.split("|"), j = viewarray.length - 1;
                j >= 0;
                j--
              ) {
                var book = viewarray[j].split(".");
                bookmap.Insert({ t: Number(book[0]), s: Number(book[1]) }, 8);
              }
            else {
              var bviews = eval("(" + bview + ")");
              if (bviews.length > 0 && bviews[0].d != undefined)
                Ttracker.util.Wv(cname, "", -63072e6);
              else
                for (var i = bviews.length - 1; i >= 0; i--)
                  bookmap.Insert(bviews[i], 8);
            }
          } catch (e) {
            Ttracker.util.Wv(cname, "", -63072e6);
          }
        bookmap.Insert(nview, 8);
        for (var cvalue = "", k = 0, klen = bookmap.a.length; k < klen; k++)
          cvalue +=
            bookmap.a[k].t + "." + bookmap.a[k].s + (k == klen - 1 ? "" : "|");
        cvalue && Ttracker.util.Wv(cname, cvalue, 63072e6);
      },
      viewrate: function (t, s, cname) {
        var ntw = { t: t, s: s, v: 5 },
          sitesortmap = new SortedHashMap(this.IComparer, this.IGetKey),
          vrate = Ttracker.util.Vv(cname);
        if (vrate)
          try {
            if (vrate.indexOf(".") > 0)
              for (
                var ratearray = vrate.split("|"), j = ratearray.length - 1;
                j >= 0;
                j--
              ) {
                var tw = ratearray[j].split("."),
                  tv = Number(tw[2] || 0),
                  tid = Number(tw[0]);
                (tv = t === tid ? tv : tv - 1),
                  sitesortmap.Add(
                    Number(tw[0]),
                    { t: Number(tw[0]), s: Number(tw[1]), v: tv },
                    8
                  );
              }
            else {
              var vrates = eval("(" + vrate + ")");
              if (vrates.length > 0 && vrates[0].d != undefined)
                Ttracker.util.Wv(cname, "", -63072e6);
              else
                for (var i = 0; i < vrates.length; i++) {
                  var rate = vrates[i];
                  rate.t != t && (rate.v -= 1), sitesortmap.Add(rate.t, rate);
                }
            }
          } catch (e) {
            Ttracker.util.Wv(cname, "", -63072e6);
          }
        if (sitesortmap.ContainsKey(t)) {
          var curtt = sitesortmap.Get(t);
          (curtt.s = s || curtt.s), (curtt.v += 2);
        } else sitesortmap.Add(t, ntw);
        if (sitesortmap.Count() > 8) {
          var del = sitesortmap.a[sitesortmap.Count() - 1];
          sitesortmap.Remove(del.t);
        }
        for (var cvalue = "", k = 0, klen = sitesortmap.a.length; k < klen; k++)
          cvalue +=
            sitesortmap.a[k].t +
            "." +
            sitesortmap.a[k].s +
            "." +
            sitesortmap.a[k].v +
            (k == klen - 1 ? "" : "|");
        cvalue && Ttracker.util.Wv(cname, cvalue, 63072e6);
      },
      view: function (e, t) {},
    }),
    (Ttracker.util = {
      Wv: function (e, t, r) {
        var n =
          window.location.hostname.indexOf("360buy") >= 0
            ? ".360buy.com"
            : ".jd.com";
        (e = e + "=" + t + "; path=/; "),
          r &&
            (e +=
              "expires=" +
              new Date(new Date().getTime() + r).toGMTString() +
              "; "),
          (e += "domain=" + n + ";"),
          (document.cookie = e);
      },
      Vv: function (e) {
        for (
          var t = [],
            r = document.cookie.split(";"),
            n = ((e = RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$")), 0);
          n < r.length;
          n++
        ) {
          var i = r[n].match(e);
          i && t.push(i[1]);
        }
        return t[0];
      },
    }),
    Ttracker.trace();
})(),
  (function () {
    var t = window,
      r = document,
      n = encodeURIComponent,
      o = decodeURIComponent,
      a = "length",
      s = "indexOf",
      d = "toLowerCase",
      c = {};
    c.util = {
      join: function (e) {
        if (e instanceof Array) {
          for (var t = "", r = 0, n = e.length; r < n; r++)
            t += e[r] + (r == n - 1 ? "" : "|||");
          return t;
        }
        return e;
      },
      getParameter: function (e, t) {
        var r = new RegExp("(?:^|&|[?]|[/])" + t + "=([^&]*)").exec(e);
        return r ? n(r[1]) : "";
      },
      Wv: function (e, t, n, i) {
        (e = e + "=" + t + "; path=/; "),
          i &&
            (e +=
              "expires=" +
              new Date(new Date().getTime() + i).toGMTString() +
              "; "),
          n && (e += "domain=" + n + ";"),
          (r.cookie = e);
      },
      Vv: function (e) {
        for (
          var t = [],
            n = r.cookie.split(";"),
            i = RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$"),
            o = 0;
          o < n[a];
          o++
        ) {
          var s = n[o].match(i);
          s && t.push(s[1]);
        }
        return t;
      },
    };
    var u = 0;
    function l(e) {
      return (e ? "_" : "") + u++;
    }
    var g = l(),
      h = l(),
      f = l(),
      p = l(),
      m = l(),
      v = l(),
      w = l(),
      _ = l(),
      b = l(),
      j = l(),
      y = l(),
      k = l(),
      S = l(),
      C = l(),
      x = l(),
      N = l(),
      O = l(),
      R = l(),
      M = l(),
      T = l(),
      I = l(),
      J = l(),
      A = l(),
      L = l(),
      D = l(),
      W = l(),
      E = l(),
      H = l(),
      P = l(),
      G = l(),
      U = l(),
      V = l(),
      B = l(),
      q = l(),
      z = l(),
      Y = l(),
      F = l(),
      X = l(),
      K = [
        "i.easou.com:q",
        "m.baidu.com:word",
        "m.sm.cn:q",
        "m.so.com:q",
        "wap.sogou.com:keyword",
        "m.sogou.com:keyword",
        "wap.sogo.com:keyword",
        "m.sogo.com:keyword",
        "page.roboo.com:q",
        "ask.com:q",
        "baidu:word",
        "baidu:wd",
        "bing:q",
        "easou:q",
        "google:q",
        "roboo:word",
        "roboo:q",
        "sm.cn:q",
        "so.com:q",
        "sogou:keyword",
        "sogou:query",
        "sogo.com:keyword",
        "sogo.com:query",
        "yahoo:p",
        "yandex:text",
        "yicha:key",
      ],
      Q = function () {
        return new Date().getTime() + "" + parseInt(2147483647 * Math.random());
      },
      Z = function () {
        return ne(r.location.hostname);
      },
      ee = function () {
        var e = {},
          n = t.navigator,
          i = t.screen;
        return (
          (e.D = i ? i.width + "x" + i.height : "-"),
          (e.C = i ? i.colorDepth + "-bit" : "-"),
          (e.language = ((n && (n.language || n.browserLanguage)) || "-")[d]()),
          (e.javaEnabled = n && n.javaEnabled() ? 1 : 0),
          (e.characterSet = r.characterSet || r.charset || "-"),
          e
        );
      },
      te = function () {
        var e, t, r, n;
        if (
          ((r = "ShockwaveFlash"),
          (e = (e = window.navigator) ? e.plugins : void 0) && e[a] > 0)
        )
          for (t = 0; t < e[a] && !n; t++)
            (r = e[t]),
              r.name[s]("Shockwave Flash") > -1 &&
                (n = r.description.split("Shockwave Flash ")[1]);
        else {
          r = r + "." + r;
          try {
            n = (t = new ActiveXObject(r + ".7")).GetVariable("$version");
          } catch (u) {}
          if (!n)
            try {
              (t = new ActiveXObject(r + ".6")),
                (n = "WIN 6,0,21,0"),
                (t.AllowScriptAccess = "always"),
                (n = t.GetVariable("$version"));
            } catch (i) {}
          if (!n)
            try {
              n = (t = new ActiveXObject(r)).GetVariable("$version");
            } catch (l) {}
          n &&
            (n =
              (n = n.split(" ")[1].split(","))[0] + "." + n[1] + " r" + n[2]);
        }
        var o = c.util.Vv("_r2");
        e = n ? n + (o[a] > 0 ? "_" + o[0] : "") : "-";
        var d = c.util.Vv("limgs");
        return (e += d[a] > 0 ? "_" + d[0] : "");
      },
      re = function (e) {
        return void 0 == e || "-" == e || "" == e;
      },
      ne = function (e) {
        var t,
          r = 1,
          n = 0;
        if (!re(e))
          for (r = 0, t = e[a] - 1; t >= 0; t--)
            (n = e.charCodeAt(t)),
              (r = ((r << 6) & 268435455) + n + (n << 14)),
              (n = 266338304 & r),
              (r = 0 != n ? r ^ (n >> 21) : r);
        return r;
      },
      ie = function () {
        var e = { name: "other", version: "0" },
          t = navigator.userAgent.toLowerCase();
        browserRegExp = {
          se360: /360se/,
          se360_2x: /qihu/,
          ie: /msie[ ]([\w.]+)/,
          firefox: /firefox[|\/]([\w.]+)/,
          chrome: /chrome[|\/]([\w.]+)/,
          safari: /version[|\/]([\w.]+)(\s\w.+)?\s?safari/,
          opera: /opera[|\/]([\w.]+)/,
        };
        for (var r in browserRegExp) {
          var n = browserRegExp[r].exec(t);
          if (n) {
            (e.name = r), (e.version = n[1] || "0");
            break;
          }
        }
        return e;
      },
      oe = function () {
        var e =
          /(win|android|linux|nokia|ipad|iphone|ipod|mac|sunos|solaris)/.exec(
            navigator.platform.toLowerCase()
          );
        return null == e ? "other" : e[0];
      },
      ae = function (e) {
        e.set(b, r.location.hostname),
          e.set(j, r.title.replace(/\$/g, "")),
          e.set(y, r.location.pathname),
          e.set(k, r.referrer.replace(/\$/g, "")),
          e.set(S, r.location.href);
        var t = c.util.Vv("__jda"),
          n = t[a] > 0 ? t[0].split(".") : null;
        e.set(h, n && !re(n[1]) ? n[1] : Q()),
          e.set(A, n ? n[2] : e.get(m)),
          e.set(L, n ? n[3] : e.get(m)),
          e.set(D, n ? n[4] : e.get(m)),
          e.set(W, n ? n[5] : 1);
        var i = c.util.Vv("__jdv"),
          s = i[a] > 0 ? i[0].split("|") : null;
        e.set(P, s ? s[1] : "direct"),
          e.set(G, s ? s[2] : "-"),
          e.set(U, s ? s[3] : "none"),
          e.set(V, s ? s[4] : "-");
        var d = c.util.Vv("__jdb"),
          u = d[a] > 0 ? d[0].split(".") : null,
          l = u && 4 == u.length ? 1 : 0;
        e.set(E, u ? u[0 + l] : 0),
          e.set(
            z,
            (function () {
              for (
                var e = "",
                  t = [
                    "jwotest_product",
                    "jwotest_list",
                    "jwotest_cart",
                    "jwotest_orderinfo",
                    "jwotest_homepage",
                    "jwotest_other1",
                    "jwotest_other2",
                    "jwotest_other3",
                  ],
                  r = 0,
                  n = t.length;
                r < n;
                r++
              ) {
                var i = c.util.Vv(t[r]);
                if (0 != i[a]) {
                  var s = o(i[0]).match(/=(.*?)&/gi),
                    d = [];
                  null != s &&
                    ($.each(s, function (e, t) {
                      d.push(
                        0 == e
                          ? "T" + t.substring(1, t.length - 1)
                          : t.substring(1, t.length - 1)
                      );
                    }),
                    (e += d.join("-") + ";"));
                }
              }
              return e;
            })() || "-"
          );
        var g = JA.util.Vv("clickid"),
          f = g[a] && g[0];
        return e.set(Y, f), !0;
      },
      se = function (e, t) {
        var r = t.split(".");
        e.set(A, r[2]),
          e.set(L, r[4]),
          e.set(D, Math.round(new Date().getTime() / 1e3)),
          e.m(W),
          e.set(E, 1);
      },
      de = function (e) {
        e.m(E);
      },
      ce = function (e) {
        var t,
          r,
          n = c.util.Vv("__jda");
        0 == n.length
          ? ((r = (t = e).get(m)),
            t.set(h, Q()),
            t.set(A, r),
            t.set(L, r),
            t.set(D, r),
            t.set(W, 1),
            t.set(E, 1))
          : se(e, n[0]);
      },
      ue = new (function () {
        var e = {};
        (this.set = function (t, r) {
          e[t] = r;
        }),
          (this.get = function (t) {
            return void 0 !== e[t] ? e[t] : null;
          }),
          (this.m = function (t) {
            var r = this.get(t),
              n = void 0 == r || "" === r ? 0 : 1 * r;
            e[t] = n + 1;
          }),
          this.set(g, "UA-J2011-1");
        var t =
          window.location.hostname.indexOf("360buy") >= 0
            ? "360buy.com"
            : location.hostname.indexOf("jingdong.com") >= 0
            ? "jingdong.com"
            : "jd.com";
        this.set(p, t),
          this.set(f, Z()),
          this.set(m, Math.round(new Date().getTime() / 1e3)),
          this.set(v, 15552e6),
          this.set(w, 1296e6),
          this.set(_, 18e5),
          this.set(C, te());
        var r = ie();
        this.set(x, r.name), this.set(N, r.version), this.set(O, oe());
        var n = ee();
        this.set(R, n.D),
          this.set(M, n.C),
          this.set(T, n.language),
          this.set(I, n.javaEnabled),
          this.set(J, n.characterSet),
          this.set(H, K),
          this.set(q, new Date().getTime());
        var i = c.util.Vv("pin");
        this.set(F, i[a] ? i[0] : "-");
        var o,
          s = "";
        (o = c.util.Vv("pinId")) && o[a] && (s = o[0]), this.set(X, s || "-");
      })(),
      le = function () {
        (this.a = {}),
          (this.add = function (e, t) {
            this.a[e] = t;
          }),
          (this.get = function (e) {
            return this.a[e];
          }),
          (this.toString = function () {
            return this.a.join("&");
          });
      },
      ge = function (e, t) {
        t.add("jdac", e.get(g)),
          t.add("jduid", e.get(h)),
          t.add("jdsid", e.get(h) + "|" + e.get(W)),
          t.add("jdje", e.get(I)),
          t.add("jdsc", e.get(M)),
          t.add("jdsr", e.get(R)),
          t.add("jdul", e.get(T)),
          t.add("jdcs", e.get(J)),
          t.add("jddt", e.get(j) || "-"),
          t.add("jdmr", n(e.get(k))),
          t.add("jdhn", e.get(b) || "-"),
          t.add("jdfl", e.get(C)),
          t.add("jdos", e.get(O)),
          t.add("jdbr", e.get(x)),
          t.add("jdbv", e.get(N)),
          t.add("jdwb", e.get(A)),
          t.add("jdxb", e.get(L)),
          t.add("jdyb", e.get(D)),
          t.add("jdzb", e.get(W)),
          t.add("jdcb", e.get(E)),
          t.add("jdusc", e.get(P) || "direct"),
          t.add("jducp", e.get(G) || "-"),
          t.add("jdumd", e.get(U) || "-"),
          t.add("jduct", e.get(V) || "-"),
          t.add(
            "jdlt",
            "object" != typeof jdpts
              ? 0
              : jdpts._st == undefined
              ? 0
              : e.get(q) - jdpts._st
          ),
          t.add("jdtad", e.get(z)),
          t.add("jdak", e.get(Y)),
          t.add("pinid", e.get(X));
      },
      he = function (e, t, r, i) {
        var o, s;
        t.add("jdac", e.get(g)),
          t.add("jduid", e.get(h)),
          t.add("jdsid", e.get(h) + "|" + e.get(W)),
          t.add("jdje", "-"),
          t.add("jdsc", "-"),
          t.add("jdsr", "-"),
          t.add("jdul", "-"),
          t.add("jdcs", "-"),
          t.add("jddt", "-"),
          t.add("jdmr", n(e.get(k))),
          t.add("jdhn", "-"),
          t.add("jdfl", "-"),
          t.add("jdos", "-"),
          t.add("jdbr", "-"),
          t.add("jdbv", "-"),
          t.add("jdwb", "-"),
          t.add("jdxb", "-"),
          t.add("jdyb", "-"),
          t.add("jdzb", e.get(W)),
          t.add(
            "jdcb",
            i
              ? ((o = c.util.Vv("__jdb")),
                ((s = o[a] > 0 ? o[0].split(".") : null) && 1 == s.length
                  ? 1 * s[0]
                  : s && 4 == s.length
                  ? 1 * s[1]
                  : 0) + i)
              : e.get(E)
          ),
          t.add("jdusc", "-"),
          t.add("jducp", "-"),
          t.add("jdumd", "-"),
          t.add("jduct", "-"),
          t.add("jdlt", 0),
          t.add("jdtad", r),
          t.add("jdak", e.get(Y)),
          t.add("pinid", e.get(X));
      },
      fe = function () {
        ae(ue);
        var e,
          t,
          n,
          i = (function (e) {
            var t = r.location.search,
              n = r.referrer,
              i = e.get(p),
              o = c.util.getParameter(t, "utm_source"),
              u = [],
              l = e.get(P),
              g = e.get(G),
              h = e.get(U),
              f = 0 == c.util.Vv("__jdb")[a],
              m = !1;
            if (o) {
              var v = c.util.getParameter(t, "utm_campaign"),
                w = c.util.getParameter(t, "utm_medium"),
                _ = c.util.getParameter(t, "utm_term");
              u.push(o),
                u.push(v || "-"),
                u.push(w || "-"),
                u.push(_ || "notset"),
                e.set(V, u[3]),
                (m = !0);
            } else {
              var b = n && n.split("/")[2],
                j = !1;
              if (b && b[s](i) < 0) {
                for (var y = e.get(H), k = 0; k < y.length; k++) {
                  var S = y[k].split(":");
                  if (b[s](S[0][d]()) > -1 && n[s]((S[1] + "=")[d]()) > -1) {
                    var C = c.util.getParameter(n, S[1]);
                    u.push(S[0]),
                      u.push("-"),
                      u.push("organic"),
                      u.push(C || "notset"),
                      e.set(V, u[3]),
                      (j = !0);
                    break;
                  }
                }
                j ||
                  (b[s]("zol.com.cn") > -1
                    ? (u.push("zol.com.cn"),
                      u.push("-"),
                      u.push("cpc"),
                      u.push("notset"))
                    : (u.push(b),
                      u.push("-"),
                      u.push("referral"),
                      u.push("-")));
              }
            }
            var x =
              u[a] > 0 &&
              (u[0] !== l || u[1] !== g || u[2] !== h) &&
              "referral" !== u[2];
            return (
              f || (!f && x)
                ? (e.set(P, u[0] || e.get(P)),
                  e.set(G, u[1] || e.get(G)),
                  e.set(U, u[2] || e.get(U)),
                  e.set(V, u[3] || e.get(V)),
                  ce(e))
                : de(e),
              e.set(B, m || x),
              x || m
            );
          })(ue),
          o = c.util.Vv("__jdv"),
          u = new le(),
          l = ue.get(p);
        return (
          ge(ue, u),
          c.util.Wv(
            "__jda",
            [
              (e = ue).get(f),
              e.get(h) || "-",
              e.get(A) || "-",
              e.get(L) || "-",
              e.get(D) || "-",
              e.get(W) || 1,
            ].join("."),
            l,
            ue.get(v)
          ),
          c.util.Wv(
            "__jdb",
            [
              (t = ue).get(f),
              t.get(E) || 1,
              t.get(h) + "|" + t.get(W) || 1,
              t.get(D) || t.get(m),
            ].join("."),
            l,
            ue.get(_)
          ),
          c.util.Wv("__jdc", ue.get(f), l),
          (!i && o.length) ||
            c.util.Wv(
              "__jdv",
              [
                (n = ue).get(f),
                n.get(P) || r.location.hostname,
                n.get(G) || "(direct)",
                n.get(U) || "direct",
                n.get(V) || "-",
                new Date().getTime(),
              ].join("|"),
              l,
              ue.get(w)
            ),
          c.util.Wv("clickid", "0", l, -846e5),
          u.a
        );
      },
      pe = function () {
        var e = new le();
        return ge(ue, e), e.a;
      },
      me = function (e, t) {
        var r = new le();
        return he(ue, r, e, t), r.a;
      },
      ve = function (t) {
        var r = (function (t) {
          var r = document.createElement("img");
          (r.width = 1), (r.height = 1), (r.src = t);
          try {
            r.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
          } catch (e) {}
          return r;
        })(t);
        r.onload = r.onerror = function () {
          (r.onload = null), (r.onerror = null);
        };
      };
    (c.util.Nt = pe),
      (c.tracker = {
        sendOld: function (e, t, r, n) {},
        sendNew: function (e, t) {
          var i = pe(),
            o =
              "https://mercury.jd.com/log.gif?t=" +
              e +
              "&m=" +
              ue.get(g) +
              "&pin=" +
              n(ue.get(F)) +
              "&uid=" +
              i.jduid +
              "&sid=" +
              i.jdsid +
              (i.jdak
                ? "&cul=" + document.location.href + n("&clickid=" + i.jdak)
                : "") +
              "&v=" +
              n(t) +
              "&ref=" +
              n(r.referrer) +
              "&rm=" +
              new Date().getTime();
          ve(o);
        },
        sendToWarriors: function (e, t) {
          var i = pe(),
            o =
              "https://mercury.jd.com/log.gif?t=" +
              e +
              "&m=" +
              ue.get(g) +
              "&pin=" +
              n(ue.get(F)) +
              "&uid=" +
              i.jduid +
              "&sid=" +
              i.jdsid +
              (i.jdak
                ? "&cul=" + document.location.href + n("&clickid=" + i.jdak)
                : "") +
              "&v=" +
              n(t) +
              "&ref=" +
              n(r.referrer) +
              "&rm=" +
              new Date().getTime();
          ve(o);
        },
        ngloader: function (e, t) {
          var r = pe(),
            n = {
              je: r.jdje,
              sc: r.jdsc,
              sr: r.jdsr,
              ul: r.jdul,
              cs: r.jdcs,
              dt: r.jddt,
              hn: r.jdhn,
              fl: r.jdfl,
              os: r.jdos,
              br: r.jdbr,
              bv: r.jdbv,
              wb: r.jdwb,
              xb: r.jdxb,
              yb: r.jdyb,
              zb: r.jdzb,
              cb: r.jdcb,
              usc: r.jdusc,
              ucp: r.jducp,
              umd: r.jdumd,
              uct: r.jduct,
              ct: new Date().getTime(),
              lt: r.jdlt,
              tad: r.jdtad,
            };
          this.ngaloader(e, n, t);
        },
        ngaloader: function (e, t, r) {
          var n = "";
          for (var i in t) n += i + "=" + t[i] + "$";
          if (r) for (var i in r) n += i + "=" + r[i] + "$";
          n += "pinid=" + ue.get(X) + "$";
          try {
            n += "jdv=" + (c.util.Vv("__jdv")[0] || "") + "$";
          } catch (a) {}
          n += "dataver=0.1$";
          var o = c.util.Vv("unpl");
          o.length > 0 && (n += "unpl=" + o[0] + "$"),
            (n = n.substring(0, n.length - 1)),
            this.sendNew(e, n);
        },
        ngloaderJSON: function (e, t, r) {
          var n = pe();
          (t.pinid = ue.get(X)),
            (t.je = n.jdje),
            (t.sc = n.jdsc),
            (t.sr = n.jdsr),
            (t.ul = n.jdul),
            (t.cs = n.jdcs),
            (t.dt = n.jddt),
            (t.hn = n.jdhn),
            (t.fl = n.jdfl),
            (t.os = n.jdos),
            (t.br = n.jdbr),
            (t.bv = n.jdbv),
            (t.wb = n.jdwb),
            (t.xb = n.jdxb),
            (t.yb = n.jdyb),
            (t.zb = n.jdzb),
            (t.cb = n.jdcb),
            (t.usc = n.jdusc),
            (t.ucp = n.jducp),
            (t.umd = n.jdumd),
            (t.uct = n.jduct),
            (t.ct = new Date().getTime()),
            (t.lt = n.jdlt),
            (t.tad = n.jdtad);
          try {
            t.jdv = c.util.Vv("__jdv")[0] || "";
          } catch (i) {}
          (t.dataver = "0.1"),
            r && "toWarriors" == r
              ? this.sendToWarriors(e, $.toJSON(t))
              : this.sendNew(e, $.toJSON(t));
        },
        bloading: function (t, r, n) {
          var i = fe(),
            o = 0,
            a = "";
          try {
            var s = new Date().getTime();
            (a = getFingerprint()), (o = new Date().getTime() - s);
          } catch (e) {}
          var d = {
            je: i.jdje,
            sc: i.jdsc,
            sr: i.jdsr,
            ul: i.jdul,
            cs: i.jdcs,
            dt: i.jddt,
            hn: i.jdhn,
            fl: i.jdfl,
            os: i.jdos,
            br: i.jdbr,
            bv: i.jdbv,
            wb: i.jdwb,
            xb: i.jdxb,
            yb: i.jdyb,
            zb: i.jdzb,
            cb: i.jdcb,
            usc: i.jdusc,
            ucp: i.jducp,
            umd: i.jdumd,
            uct: i.jduct,
            lt: i.jdlt,
            ct: n,
            tad: i.jdtad,
            mba_finger: a,
            fpftime: o,
          };
          this.ngaloader("www.100000", d),
            i.jduid % 1e3 == 1 &&
              this.ngloader("jsver.000000", {
                jsfile: "wl",
                jsver: "20190102",
              });
        },
        loading: function (e, t, r, n) {},
        aloading: function (e, t, r) {
          var n = pe();
          this.loading(e, t, n, r);
        },
        aloadingJSON: function (e, t, r) {},
        adshow: function (e) {
          var t = me(e);
          this.loading("AD", "IM", t, "");
        },
        adclick: function (e) {
          var t = me(e, 1);
          this.loading("AD", "CL", t, "");
        },
        isCanPrey: function () {
          var e = getCookie("__jda");
          if (e) {
            var t = e.split(".");
            if (t.length > 1) {
              var r = t[1],
                n = t[1].length;
              return "2" == (r = r.substr(n - 1, n));
            }
          }
          return !1;
        },
        isDegrade: function (t, r, n) {
          var i = {
              "magic.000001": 20,
              "other.000000-pv_stock": 20,
              "other.000000-d-c": 0,
              "other.000000": 0,
            },
            o = new Date(2018, 5, 16).getTime(),
            a = new Date(2018, 5, 20).getTime(),
            s = new Date().getTime();
          if (s < o || s > a) return !1;
          var d = i[t + "-" + r + "-" + n];
          return (
            d === undefined && (d = i[t + "-" + r]),
            d === undefined && (d = i[t]),
            (function (t) {
              try {
                var r = ue.get(h),
                  n = r.length;
                return (r = parseInt(r.substr(n - 2, n))) < t;
              } catch (e) {}
              return !1;
            })((d = d || 0))
          );
        },
        isJdvChanged: function () {
          return ue.get(B);
        },
      }),
      (window.JA = c),
      c.tracker.bloading("J", "A", new Date().getTime());
    var we =
      5 === $(".w .crumb a").length &&
      /e.jd.com\/products\/(\d*)-(\d*)-(\d*).html[\w\W]*?e.jd.com\/(\d*).html/.exec(
        $(".w .crumb").html()
      );
    ((window.pageConfig &&
      window.pageConfig.product &&
      window.pageConfig.product.cat) ||
      we) &&
      ((we = we || {}),
      c.tracker.ngloader("item.010001", {
        sku: we[4] || window.pageConfig.product.skuid,
        cid1: we[1] || window.pageConfig.product.cat[0],
        cid2: we[2] || window.pageConfig.product.cat[1],
        cid3: we[3] || window.pageConfig.product.cat[2],
        brand: we ? "0" : window.pageConfig.product.brand,
      })),
      (function () {
        if (isChecked()) {
          SucInfoMethod.Init();
          var e = getCookie("_distM");
          if (e && e == SucInfo_OrderId) return !0;
          for (
            var t = ["p000", "p100", "np000", "np100"], r = 0;
            r < t.length;
            r++
          ) {
            var n = getCookie(t[r]);
            null != n && "" != n && privateLogWLJS("HomePageOrder", t[r]);
          }
          simpleMold(
            "1:2:3:4:5:1a:1b:BR1:BR2:BR3:BR4:BR5:DDR:GR1:GR2:GR3:GR4:VR1:VR2:VR3:VR4:VR5:NR:CR1:CR2:CR3:SR1:SR2:SR3:SR4:Indiv&Simi:Indiv&OthC:Indiv&AllC:Zd".split(
              ":"
            ),
            "R",
            "reWids",
            "4"
          );
          complexMold(
            "Club,ThirdRec,AttRec,OCRec,SORec,EBRec,BookSpecial,BookTrack,BookHis,Coupon,GlobalTrack,GlobalHis,History,historyreco_s,historyreco_c".split(
              ","
            ),
            "R",
            "reWids",
            "4"
          );
          complexMold(
            [
              "v",
              "TrackRec",
              "TrackHis",
              "CouDan",
              "CarAcc",
              "Zd",
              "Tc",
              "g",
              "s",
              "Book",
              "BookSpecial",
              "BookTrack",
              "BookHis",
              "GlobalTrack",
              "GlobalHis",
              "History",
              "Hiss",
              "Hisc",
              "simi",
              "GThirdRec",
              "PtoAccy",
              "AtoAccy",
            ],
            "o",
            "rod",
            "d",
            !0
          ),
            RecommendTrans("reHome2012,_rtbook", "N", "4"),
            complexMold(["_rdCube"], "Cube", "", "4"),
            simpleMold(["SEO"], "S", "seWids", "4"),
            setCookieMills("_distM", SucInfo_OrderId, 864e5),
            setCookieMills("_ghis", "", -1),
            privateLogWLJS(
              "7",
              "2",
              SucInfo_OrderId,
              SucInfo_OrderType,
              SucInfo_OrderDetail
            );
          var i = pe();
          JA &&
            JA.tracker.ngloader("order.100000", {
              orderid: SucInfo_OrderId,
              ordertype: SucInfo_OrderType,
              orderdetail: SucInfo_OrderDetail,
              cb: i.jdcb,
            });
        }
      })();
  })(),
  "object" == typeof jdpts &&
    jdpts._cls &&
    privateLogWLJS(jdpts._cls.split(".")[0], jdpts._cls.split(".")[1]),
  Clublog();
