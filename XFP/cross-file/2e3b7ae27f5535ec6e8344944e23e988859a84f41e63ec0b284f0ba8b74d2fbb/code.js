/**
 * @license
 * Piano Browser SDK-ari-cx@2.8.44.
 * Copyright 2010-2022 Piano Software Inc.
 */
import { W } from "./W.js";
import { Y } from "./decodeURI.js";
import {dt } from './dt.js';
import { H } from './H.js';
import { lt } from './lt.js';
import { mt } from './mt.js';
import { n } from './n.js';
import { pt } from './pt.js';
import { r } from './r.js';
import { remove } from './remove.js';
import {S, b, _} from './S.js';
import { F } from './storage.js';
import { $ } from './url.js';
import { ut } from './ut.js';
import { C,E,k,O,j,A,x} from './utils.js';
import { v } from './v.js';
import { vt } from './vmt.js';
import { z } from './z.js'

window.cX = window.cX || {};
var t = window.cX;
window.ari = window.ari || {};
var e,
c = window.ari;

function a() {
  var t = null;
  return (
    (window.__pctx_connection__ = function (e) {
      if (e) {
        var n = e("get-data");
        (t = Object.assign({}, n.getCachedData())), n.terminate();
      }
      return "uvm42pas28m";
    }),
    t
  );
}
function f(e, n, r, o) {
  t.library._consent.cookie.remove(e, {
    path: n,
    domain: r,
    secure: o,
  });
}
e = "_ls_ttl";

function i(t, n) {
  _e(t, "", Object.assign({}, n, { expires: -1 }));
};
function _e (e, n, r, o) {
  var i;
  void 0 === n ||
    (void 0 !== o &&
      ((i = n),
      encodeURI(i).split(/%(?:u[\dA-F]{2})?[\dA-F]{2}|./).length - 1 >
        o)) ||
    (document.cookie = _lt(e, n, r));
}
function _lt(t, e, n) {
  var r = void 0 === n ? {} : n,
    o = r.path,
    i = r.domain,
    c = r.expires,
    a = r.secure,
    u = r.samesite,
    d = r.raw,
    l = r.priority;
  return (
    (d ? t : encodeURIComponent(t)) +
    "=" +
    (d ? e : encodeURIComponent(e)) +
    // (c ? "; expires=".concat(s(c).toUTCString()) : "") +
    (o ? "; path=".concat(o) : "") +
    (i ? "; domain=".concat(i) : "") +
    (a ? "; secure" : "") +
    (u
      ? "boolean" == typeof u
        ? "; sameSite"
        : "; sameSite=".concat(u)
      : "") +
    (l ? "; priority=".concat(l) : "")
  );
}

function l() {

    let n = function (t) {
      for (var e = document.cookie.split(";"), n = 0; n < e.length; n++) {
        var r = e[n].split("=");
        if (t(u(r[0]), r[1] || "")) return;
      }
    };
  function r(t) {
    var e = null,
      r = {};
    return (
      n(function (n, o) {
        if (t) {
          if (n === t) return (e = d(o)), !0;
        } else r[n] = d(o);
      }),
      t ? e : r
    );
  }
  var o;
    // i = function (t, n) {
    //   e(t, "", Object.assign({}, n, { expires: -1 }));
    // },

    o = "_cookie_test";
    function lc(t) {
        void 0 === t && (t = []);
        var n = window.location.hostname.split("."),
          c =
            new Date().getTime().toString(36) +
            Math.round(2147483647 * Math.random()).toString(36),
          a = new Date();
        a.setSeconds(a.getSeconds() + 30);
        for (var s = 0; s < n.length; s++)
          try {
            var u = n.slice(-(s + 1)).join(".");
            if (!t.includes(u)) {
              e(o, c, { expires: a, path: "/", domain: u });
              var d = r(o) === c;
              if ((i(o, { path: "/", domain: u }), d)) return u;
            }
          } catch (t) {}
      };
  return {
    set: e,
    get: r,
    getNames: function () {
      var t = [];
      return (
        n(function (e) {
          t.push(e);
        }),
        t
      );
    },
    remove: i,
    getTopLevelDomain: function (t) {
      void 0 === t && (t = []);
      var n = window.location.hostname.split("."),
        c =
          new Date().getTime().toString(36) +
          Math.round(2147483647 * Math.random()).toString(36),
        a = new Date();
      a.setSeconds(a.getSeconds() + 30);
      for (var s = 0; s < n.length; s++)
        try {
          var u = n.slice(-(s + 1)).join(".");
          if (!t.includes(u)) {
            e(o, c, { expires: a, path: "/", domain: u });
            var d = r(o) === c;
            if ((i(o, { path: "/", domain: u }), d)) return u;
          }
        } catch (t) {}
    },
    __private__: { _generateCookieString: t },
  };
}
l();
function o() {
    var t = i(),
      e = n(),
      o = {};
    e &&
      (Object.keys(e).forEach(function (n) {
        if (t.includes(n)) {
          var r = e[n] ? parseInt(e[n], 36) : null;
          if (!(i = r) || i > Date.now()) o[n] = e[n];
          else
            try {
              window.localStorage.removeItem(n);
            } catch (t) {}
        }
        var i;
      }),
      JSON.stringify(e) !== JSON.stringify(o) && r(o));
  }


  o();
var p = ["pantheon.io", "go-vip.net", "go-vip.co"];


var m = document.createElement.bind(document),
  g = document.getElementById.bind(document),
  h = document.getElementsByTagName.bind(document),
  w = encodeURIComponent,
  y = parseInt,
  I = Object.prototype.hasOwnProperty;


function U(t, e, n) {
  for (var r = 0; r < t.length; r++) e.call(n, t[r], r, t);
}
function M(t, e) {
  return t.indexOf(e) > -1;
}

function some(t, e, n) {
  var r = !1;
  return (
    U(t, function (o, i) {
      r = r || e.call(n, o, i, t);
    }),
    r
  );
}

var T = {
  some: some,
  forEach: U,
  remove: remove
};
function D(t, e, n) {
  for (var r in t) I.call(t, r) && e.call(n, t[r], r, t);
}
function keys(t) {
  var e = [];
  return (
    D(t, function (t, n) {
      e.push(n);
    }),
    e
  );
}
var R = {
  forEach: D,
  some: some,
  keys: keys
};
function X(t, e) {
  return (
    U(e, function (e) {
      t.push(e);
    }),
    t
  );
}
var L = ["__proto__", "prototype", "constructor"];
function P(t, e) {
  return (
    D(e, function (e, n) {
      M(L, "" + n) ||
        (A(e)
          ? (A(t[n]) || (t[n] = {}), P(t[n], e))
          : j(e)
          ? (j(t[n]) || (t[n] = []), X(t[n], e))
          : (t[n] = e));
    }),
    t
  );
}
var N = 0;
function J(e, n) {
  var r = window.setTimeout(function () {
    T.remove(t.library.m_timerIds, r), e.apply(window, arguments);
  }, n);
  return t.library.m_timerIds.push(r), r;
}
v();
var B = {
  stringify: JSON.stringify,
  parse: JSON.parse,
};

var q = "_cX_check";




function Q(t, e, n, r) {
  if (!1 !== e) {
    var o = m("script");
    (o.async = !0),
      (o.type = "text/javascript"),
      n && (o.charset = n),
      r && (o.id = r),
      (o.src = t);
    var i = document.head || h("head")[0];
    i.insertBefore(o, i.firstChild);
  } else
    document.write(
      '<script type="text/javascript" src="' +
        t +
        '"' +
        (r ? ' id="' + r + '"' : "") +
        (n ? ' charset="' + n + '"' : "") +
        "></script>"
    );
}

var Z = ["geo", "device"];
function tt() {
  if (t.library.m_noConsentCache) return t.library.m_consentParameters;
  var e,
    n,
    r =
      ((e = "cX_cons"),
      t.env.hasLocalStorage &&
        (n = t.library._consent.localStorage.get("_" + e)),
      n);
  if (E(r)) return {};
  var o = {};
  return (
    R.forEach(Y(r), function (t, e) {
      o[e] = "true" === t;
    }),
    o
  );
}
function et(e) {
  return (function () {
    function _convertedFunction4() {
      function _convertedFunction2(t) {
        return M(Z, t);
      }
      return !_convertedFunction2(e);
    }
    return !_convertedFunction4();
  })();
}
function nt(e) {
  return t.library && t.library.m_usesConsent
    ? !et(e)
    : (function () {
        function _convertedFunction3(e) {
          var n = t.library._consent.events.check(e);
          return !E(n) && n.allowed;
        }
        return !_convertedFunction3(e);
      })();
  var n;
}
function rt(t, e, n) {
  var r,
    o,
    i = n || {},
    c = "cXJsonpCB" + (r && (N = 0), ++N),
    a = c + "script";
  (window[c] = function () {
    o && clearTimeout(o), (window[c] = void 0);
    try {
      O(e) && e.apply(window, arguments);
    } catch (t) {
      b(t);
    }
    var t = g(a);
    E(t) || E(t.parentElement) || t.parentElement.removeChild(t);
  }),
    i.timeout && (o = J(window[c], i.timeout)),
    _("== jsonp request sent", t),
    Q(t.replace(/\{\{callback\}\}/, w(c)), !i.synchronous, i.charset, a);
}
function ot(e) {
  try {
    if (!C(e)) {
      try {
        f("cX_G", "/");
      } catch (t) {
        b(t);
      }
      try {
        f("cX_G", "/", window.location.hostname);
      } catch (t) {
        b(t);
      }
      (n = "cX_G"),
        (r = e),
        (o = t.library.m_maxCookieExpires),
        (i = "/"),
        (c = v()),
        t.library._consent.cookie.set(
          n,
          r,
          {
            expires: o || void 0,
            path: i,
            domain: c,
            secure:
              (a || t.library.m_usesSecureCookies) && t.env.isSecureProtocol,
            samesite: a && t.env.canSetSameSite && "lax",
          },
          s || 1024
        );
    }
    return (function (e) {
      return t.library._consent.cookie.get(e);
    })("cX_G");
  } catch (t) {
    b(t);
  }
  var n, r, o, i, c, a, s;
}
function it() {
  return ot();
}
function ct() {
  return t.library && !!it();
}
function at(t) {
  return t > 6
    ? 10
    : (function (t) {
        var e = (1 + Math.pow(5, 0.5)) / 2,
          n = (1 - Math.pow(5, 0.5)) / 2;
        return Math.floor((Math.pow(e, t) - Math.pow(n, t)) / Math.pow(5, 0.5));
      })(t + 2) - 1;
}
function st(t, e, n, r, o, i) {
  if (!nt("pv")) {
    var a,
      s,
      u,
      d = P({}, e),
      l = P(d, n),
      f = P(l, r),
      p = P(f, "in-screen" === t ? {} : o),
      v = P(p, "in-screen" === t ? {} : i),
      m =
        ((a = v),
        (s = ""),
        R.forEach(a, function (t, e) {
          k(t) || "number" == typeof t || "boolean" == typeof t
            ? (s += (x(s) ? "" : "&") + w(e) + "=" + w("" + t))
            : j(t) &&
              T.forEach(t, function (t) {
                s += (x(s) ? "" : "&") + w(e) + "=" + w("" + t);
              });
        }),
        s);
    O(window.fetch)
      ? ((u = c.statsCollectorUrl + "/" + t + "?" + m),
        window.fetch(u),
        _("== fetch request sent", u))
      : rt(c.statsCollectorUrl + "/" + t + "?" + m);
  }
}

function ft(t, e, n) {
  c.suspendEvents
    ? c._eventsCache.push([t, e, n])
    : st(t, e, n, ut(), dt(), lt());
}


X(X([], ["pv", "segment", "ad", "recs"]), Z);
var gt = {},
  ht = {},
  wt = {};
function yt(t) {
  try {
    if (t.slot) {
      var e = vt(t.slot),
        n = mt(e);
      if (t.isEmpty) return;
      if (!e.adId && !e.bnId) return;
      (gt[n] = {
        adId: e.adId,
        bnId: e.bnId,
        pId: e.pId,
      }),
        ft("imp", pt(), e);
    } else _("== ARI Event slot is undefined", t);
  } catch (t) {
    b(t);
  }
}
function It(t) {
  var e = mt(t);
  wt[e] && clearTimeout(wt[e]),
    (wt[e] = J(function () {
      if (gt[e]) {
        var n = Math.floor((Date.now() - gt[e].timeOnScreen) / 1e3);
        if (((t.timeOnScreen = n), n >= 60)) return void (ht[e] && (ht[e] = 0));
      }
      ht[e]++, ft("in-screen", pt(), t), It(t);
    }, 1e3 * at(ht[e])));
}
function St(t) {
  try {
    if (t.slot) {
      var e = vt(t.slot),
        n = mt(e);
      gt[n] ||
        (gt[n] = {
          adId: e.adId,
          bnId: e.bnId,
          pId: e.pId,
        }),
        (ht[n] = 0),
        (gt[n].timeOnScreen = Date.now() - 1e3),
        It(e);
    } else _("== ARI Event slot is undefined", t);
  } catch (t) {
    b(t);
  }
}
function bt(t) {
  try {
    if (t.slot) {
      var e = mt(vt(t.slot));
      t.inViewPercentage < 1 &&
        (wt[e] && clearTimeout(wt[e]), ht[e] && (ht[e] = 0));
    } else _("== ARI Event slot is undefined", t);
  } catch (t) {
    b(t);
  }
}
function _t(t) {
  try {
    if (A(t) && k(t.data)) {
      var e = Y(t.data);
      "click" === e.gptEvent &&
        k(e.gptParams) &&
        ft("click", pt(), B.parse(e.gptParams));
    }
  } catch (t) {
    b(t);
  }
}
try {
  console.log("try")
  P(t, {
    env: {
      nodeEnv: "production",
      canSetSameSite: W(),
      isSafari: K(),
      isEdge: V(),
      isFirefox: G(),
      isSecureProtocol: $(),
      hasHistory: z(),
      hasLocalStorage: F(),
      hasSessionStorage: H(),
    },
  }),
    (c._eventsCache = []),
    (window.googletag = window.googletag || {
      cmd: [],
    }),
    window.googletag.cmd.push(function () {
      var t,
        e,
        n,
        r,
        o = window.googletag.pubads();
      o.addEventListener("slotRenderEnded", yt),
        o.addEventListener("impressionViewable", St),
        o.addEventListener("slotVisibilityChanged", bt),
        (e = "message"),
        (n = _t),
        (t = window).addEventListener &&
          t.addEventListener(e, n, A(r) ? r : !!r);
    }),
    (c.statsCollectorUrl = "https://stats-collector.cxense.com/cr-stats/event"),
    (c.suspendEvents = !ct()),
    c.suspendEvents &&
      (function t() {
        ct()
          ? (R.forEach(c._eventsCache, function (t) {
              st(t[0], t[1], t[2], ut(), dt(), lt());
            }),
            (c.suspendEvents = !1),
            (c._eventsCache = []))
          : setTimeout(function () {
              t();
            }, 50);
      })();
} catch (t) {
  console.log("except")
  b(t);
}
