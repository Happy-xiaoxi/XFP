"use strict";
var PAYPAL = window.PAYPAL || {};
var e,
  t,
  n = {
    FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",
    LS_P1_POST_COUNTS: "fnp1_ct",
    LS_P2_POST_TIME: "fnp2_t",
    LS_CORR_ID: "fncorr_id",
    PVC: "pvc",
    FN_RELEASE_VERSION: "3.1.5",
    BEACON_BASE_URL: "https://b.stats.paypal.com/v2/counter.cgi",
    JS_URL: "https://c.paypal.com/da/r/fb.js",
    JS_PPGEO_URL: "https://objects.paypal.cn/da/r/fb.js",
    BROWSER_FEATURES_URL:
      "https://www.paypalobjects.com/rdaAssets/fraudnet/ext/bf.js",
    MOUSE_MODEL_URL: "https://www.paypalobjects.com/rdml/mm/sgmm.min.js",
    SERVICE_BASE_URL: "https://c.paypal.com",
    LOAD_IFRAME_ENDPOINT: "https://c.paypal.com/v1/r/d/i",
    ERROR_ENDPOINT: "https://c.paypal.com/v1/r/d/b/e",
    W_ENDPOINT: "https://c.paypal.com/v1/r/d/b/w",
    POST1_ENDPOINT: "https://c.paypal.com/v1/r/d/b/p1",
    POST2_ENDPOINT: "https://c.paypal.com/v1/r/d/b/p2",
    POSTW_ENDPOINT: "https://c.paypal.com/v1/r/d/b/w",
    SERVICE_BASE_URL_C6: "https://c6.paypal.com",
    POST3_ENDPOINT: "https://c6.paypal.com/v1/r/d/b/p3",
    DOMAIN: "https://c.paypal.com",
    AUDIT_ENDPOINT: "https://c.paypal.com/v1/r/d/b/pa",
    PAYPAL_IFRAME_DOMAIN: /paypal\.com|cn/,
    PAYPAL_FIRST_PARTY_GEO_PARENT_DOMAIN: /^paypal\.cn$/,
    URL_PREFIX: "https://c.",
    C6_URL_PREFIX: "https://c6.",
    JS_URL_PREFIX: "https://www.",
    PP_GEO_REGEX: /www\.msgeo\.qa\.paypal\.com|www\.paypal\.cn/,
    PP_GOPAY_REGEX: /www\.paypal\.cn/,
    INVALD_DMN_REGEX: /\//,
    URL_TESTENV_PREFIX: "https://",
    PP_TESTENV_REGEX: /www\.te-.*\.qa\.paypal\.(com|cn)/,
    INITIAL_URL_KEYS: [
      "LOAD_IFRAME_ENDPOINT",
      "SERVICE_BASE_URL",
      "POST1_ENDPOINT",
      "POST2_ENDPOINT",
      "POST3_ENDPOINT",
      "W_ENDPOINT",
      "ERROR_ENDPOINT",
      "AUDIT_ENDPOINT",
    ],
    URL_KEYS: [
      "SERVICE_BASE_URL",
      "ERROR_ENDPOINT",
      "W_ENDPOINT",
      "POST1_ENDPOINT",
      "POST2_ENDPOINT",
      "POSTW_ENDPOINT",
      "POST3_ENDPOINT",
      "DOMAIN",
      "AUDIT_ENDPOINT",
    ],
  },
  i = "sc-lst",
  o = "ddi",
  a = "v",
  r = function (e, t) {
    n[e] = t;
  };
function c(e) {
  return (c =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function s(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function u() {
  return (u =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }).apply(this, arguments);
}
function d(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
      if (null == n) return;
      var i,
        o,
        a = [],
        r = !0,
        c = !1;
      try {
        for (
          n = n.call(e);
          !(r = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t);
          r = !0
        );
      } catch (e) {
        (c = !0), (o = e);
      } finally {
        try {
          r || null == n.return || n.return();
        } finally {
          if (c) throw o;
        }
      }
      return a;
    })(e, t) ||
    f(e, t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function l(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return m(e);
    })(e) ||
    (function (e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    })(e) ||
    f(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function f(e, t) {
  if (e) {
    if ("string" == typeof e) return m(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === n && e.constructor && (n = e.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? m(e, t)
        : void 0
    );
  }
}
function m(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
  return i;
}
!(function (e) {
  (e.P1 = "P1"),
    (e.P2 = "P2"),
    (e.W = "W"),
    (e.AD = "AD"),
    (e.BC = "BC"),
    (e.FN = "FN");
})(e || (e = {})),
  (function (e) {
    (e.init = "init"),
      (e.tmPT = "tmPT"),
      (e.tmTH = "tmTH"),
      (e.tmHTE = "tmHTE"),
      (e.tb = "tb"),
      (e.ts = "ts"),
      (e.vm = "vm"),
      (e.tA = "tA"),
      (e.tB = "tB"),
      (e.tP1 = "tP1"),
      (e.tP2 = "tP2"),
      (e.tP1A = "tP1A"),
      (e.tP2A = "tP2A"),
      (e.gCF = "gCF"),
      (e.sHA = "sHA"),
      (e.tWA = "tWA"),
      (e.rC = "rC"),
      (e.rCb = "rCb"),
      (e.hMFPdmn = "hMFPdmn"),
      (e.hMFP = "hMFP"),
      (e.cAGD = "cAGD"),
      (e.bf = "bf"),
      (e.sgmm = "sgmm"),
      (e.cCH = "cCH"),
      (e.igt = "igt");
  })(t || (t = {})),
  Function.prototype.bind ||
    (Function.prototype.bind = function (e) {
      if ("function" != typeof this)
        throw new TypeError(
          "Function.prototype.bind - what is trying to be bound is not callable"
        );
      var t = Array.prototype.slice.call(arguments, 1),
        n = this,
        i = function () {},
        o = function () {
          return n.apply(
            this instanceof i && e ? this : e,
            t.concat(Array.prototype.slice.call(arguments))
          );
        };
      return (i.prototype = this.prototype), (o.prototype = new i()), o;
    });
var v = function (e) {
  try {
    (this.url = e.url || ""),
      (this.requestType = e.type || "POST"),
      (this.contentType = e.contentType || "application/text"),
      (this.async = !e.hasOwnProperty("async") || !!e.async);
    var t,
      n,
      i,
      o,
      a,
      r,
      s = [],
      u = e.data;
    try {
      t = location.href;
    } catch (e) {
      ((t = document.createElement("a")).href = ""), (t = t.href);
    }
    if (
      ((a =
        (n = /^([\w\+\.\-]+:)(?:\/\/([\^\/?#:]*)(?::(\d+))?)?/).exec(
          t.toLowerCase()
        ) || []),
      void 0 !== e.crossDomain
        ? (this.crossDomain = !!e.crossDomain)
        : ((o = n.exec(this.url.toLowerCase())),
          (this.crossDomain = !(
            !o ||
            (o[1] === a[1] &&
              o[2] === a[2] &&
              (o[3] || ("http:" === o[1] ? 80 : 443)) ===
                (a[3] || ("http:" === a[1] ? 80 : 443)))
          ))),
      this.crossDomain && (this.requestType = "GET"),
      "object" === c(u))
    ) {
      for (i in u)
        u.hasOwnProperty(i) &&
          s.push(
            i + "=" + ("string" == typeof u[i] ? u[i] : JSON.stringify(u[i]))
          );
      u = s.join("&");
    }
    "POST" === this.requestType
      ? (this.data = u)
      : u &&
        ((r = -1 === this.url.indexOf("?") ? "?" : "&"), (this.url += r + u)),
      (this.callbacks = {}),
      e.hasOwnProperty("success") && (this.callbacks.success = e.success),
      e.hasOwnProperty("error") && (this.callbacks.error = e.error),
      this.crossDomain ||
        ((this.req = this.createXHR()),
        this.req
          ? (this.req.open(this.requestType, this.url, this.async),
            this.req.setRequestHeader("Content-Type", this.contentType),
            (this.req.onreadystatechange =
              this.onReadyStateChangeHandler.bind(this)))
          : this.callbacks.hasOwnProperty("error") &&
            this.callbacks.error(
              this,
              new Error("Error creating XHR! ajax not supported?")
            ));
  } catch (e) {}
  return this;
};
(v.prototype.send = function () {
  return this.crossDomain ? this.sendCrossDomain() : this.sendSameDomain();
}),
  (v.prototype.sendSameDomain = function () {
    try {
      (this.req.withCredentials = !0), this.req.send(this.data);
    } catch (e) {
      "function" == typeof this.callbacks.error &&
        this.callbacks.error(this, new Error("Exception on send"));
    }
  }),
  (v.prototype.sendCrossDomain = function () {
    try {
      var e = document.createElement("script"),
        t =
          document.head ||
          document.getElementsByTagName("head")[0] ||
          document.documentElement;
      (e.async = "async"),
        (e.src = this.url),
        (e.onload = e.onreadystatechange =
          function (n, i) {
            (i || !e.readyState || /loaded|complete/.test(e.readyState)) &&
              ((e.onload = e.onreadystatechange = null),
              t && e.parentNode && t.removeChild(e),
              (e = void 0),
              i ||
                "function" != typeof this.callbacks.success ||
                this.callbacks.success(this));
          }.bind(this)),
        t.insertBefore(e, t.firstChild);
    } catch (e) {
      "function" == typeof this.callbacks.error &&
        this.callbacks.error(this, new Error("Exception on send"));
    }
  }),
  (v.prototype.getXHR = function () {
    return this.req;
  }),
  (v.prototype.onReadyStateChangeHandler = function () {
    if (4 === this.req.readyState)
      if (this.req.error && this.callbacks.hasOwnProperty("error"))
        this.callbacks.error(this, this.req.error);
      else if (0 === this.req.status && this.callbacks.hasOwnProperty("error"))
        this.callbacks.error(this, new Error("0: Interrupted"));
      else if (
        404 === this.req.status &&
        this.callbacks.hasOwnProperty("error")
      )
        this.callbacks.error(this, new Error("404: Not Found"));
      else if (
        200 === this.req.status &&
        this.callbacks.hasOwnProperty("success")
      ) {
        if (void 0 === this.req.response)
          try {
            this.req.response = this.req.responseText;
          } catch (e) {}
        this.callbacks.success(this);
      }
  }),
  (v.prototype.createXHR = function () {
    return this.standardXHR() || this.activeXHR();
  }),
  (v.prototype.standardXHR = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  }),
  (v.prototype.activeXHR = function () {
    try {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  });
var p,
  g,
  h,
  w,
  y,
  S = function (e, t, i, o) {
    document.location.protocol + "//" + document.domain === n.DOMAIN
      ? E(e, t, i, o)
      : P(e, t, i, o);
  },
  A = function (e) {
    var t, n, i;
    return (
      (i =
        (null === (t = e.configuration) || void 0 === t ? void 0 : t.u) ||
        (null === (n = e.configuration) || void 0 === n ? void 0 : n.url) ||
        document.URL) && (i = i.substring(0, 50)),
      i
    );
  },
  E = function (e, t, i, o) {
    var a, r, c;
    new v({
      type: "POST",
      contentType: "application/json",
      url: n.ERROR_ENDPOINT,
      data: JSON.stringify({
        appId:
          null === (a = t.configuration) || void 0 === a ? void 0 : a.appId,
        correlationID:
          null === (r = t.configuration) || void 0 === r
            ? void 0
            : r.correlationId,
        ed: [
          {
            location: o,
            field: i,
            issue:
              "e=" +
              encodeURIComponent(null == e ? void 0 : e.message) +
              "&stack=" +
              encodeURIComponent(null == e ? void 0 : e.stack) +
              "&url=" +
              A(t),
          },
        ],
        rvr: n.FN_RELEASE_VERSION,
        ua: navigator.userAgent,
        wv: null === (c = t.configuration) || void 0 === c ? void 0 : c.wv,
      }),
    }).send();
  },
  P = function (e, t, i, o) {
    var a,
      r,
      c,
      s = document.createElement("script"),
      u = [
        {
          location: o,
          field: i,
          issue:
            "e=" +
            (null == e ? void 0 : e.message) +
            "&stack=" +
            (null == e ? void 0 : e.stack) +
            "&url=" +
            A(t),
        },
      ],
      d =
        n.ERROR_ENDPOINT +
        "?appId=" +
        encodeURIComponent(
          null === (a = t.configuration) || void 0 === a ? void 0 : a.appId
        ) +
        "&correlationID=" +
        (null === (r = t.configuration) || void 0 === r
          ? void 0
          : r.correlationId) +
        "&ed=" +
        encodeURIComponent(JSON.stringify(u)) +
        "&rvr=" +
        n.FN_RELEASE_VERSION +
        "&ua=" +
        navigator.userAgent +
        "&wv=" +
        (null === (c = t.configuration) || void 0 === c ? void 0 : c.wv);
    (s.src = d), document.body.appendChild(s);
  },
  b = {
    FN_RELEASE_VERSION: "Mi40LjA=",
    BEACON_BASE_URL:
      "aHR0cHM6Ly9iLnNib3guc3RhdHMucGF5cGFsLmNvbS92Mi9jb3VudGVyLmNnaQ==",
    SERVICE_BASE_URL: "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbQ==",
    LOAD_IFRAME_ENDPOINT:
      "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbS92MS9yL2QvaQ==",
    ERROR_ENDPOINT: "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbS92MS9yL2QvYi9l",
    W_ENDPOINT: "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbS92MS9yL2QvYi93",
    POST1_ENDPOINT: "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbS92MS9yL2QvYi9wMQ==",
    POST2_ENDPOINT: "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbS92MS9yL2QvYi9wMg==",
    POSTW_ENDPOINT: "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbS92MS9yL2QvYi93",
    SERVICE_BASE_URL_C6:
      "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbS92MS9yL2QvYi9wMg==",
    POST3_ENDPOINT: "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbS92MS9yL2QvYi9wMw==",
    DOMAIN: "aHR0cHM6Ly9jLnNhbmRib3gucGF5cGFsLmNvbQ==",
  },
  I = function () {
    return new Promise(function (e, t) {
      var n,
        i,
        o = "Unknown";
      function a(t) {
        e({ isPrivate: t, browserName: o });
      }
      function r(e) {
        return e === eval.toString().length;
      }
      function c() {
        void 0 !== navigator.maxTouchPoints
          ? (function () {
              var e = String(Math.random());
              try {
                window.indexedDB.open(e, 1).onupgradeneeded = function (t) {
                  var n,
                    i = t.target,
                    o = null == i ? void 0 : i.result;
                  try {
                    o
                      .createObjectStore("test", { autoIncrement: !0 })
                      .put(new Blob()),
                      a(!1);
                  } catch (e) {
                    var r = e;
                    return (
                      e instanceof Error &&
                        (r = null !== (n = e.message) && void 0 !== n ? n : e),
                      a(
                        "string" == typeof r &&
                          /BlobURLs are not yet supported/.test(r)
                      )
                    );
                  } finally {
                    o.close(), window.indexedDB.deleteDatabase(e);
                  }
                };
              } catch (e) {
                return a(!1);
              }
            })()
          : (function () {
              var e = window.openDatabase,
                t = window.localStorage;
              try {
                e(null, null, null, null);
              } catch (e) {
                return a(!0);
              }
              try {
                t.setItem("test", "1"), t.removeItem("test");
              } catch (e) {
                return a(!0);
              }
              a(!1);
            })();
      }
      function s() {
        navigator.webkitTemporaryStorage.queryUsageAndQuota(
          function (e, t) {
            var n;
            a(
              Math.round(t / 1048576) <
                2 *
                  Math.round(
                    (void 0 !== (n = window).performance &&
                    void 0 !== n.performance.memory &&
                    void 0 !== n.performance.memory.jsHeapSizeLimit
                      ? performance.memory.jsHeapSizeLimit
                      : 1073741824) / 1048576
                  )
            );
          },
          function (e) {
            t(
              new Error(
                "detectIncognito somehow failed to query storage quota: " +
                  e.message
              )
            );
          }
        );
      }
      function u() {
        void 0 !== self.Promise && void 0 !== self.Promise.allSettled
          ? s()
          : (0, window.webkitRequestFileSystem)(
              0,
              1,
              function () {
                a(!1);
              },
              function () {
                a(!0);
              }
            );
      }
      void 0 !== (i = navigator.vendor) && 0 === i.indexOf("Apple") && r(37)
        ? ((o = "Safari"), c())
        : (function () {
            var e = navigator.vendor;
            return void 0 !== e && 0 === e.indexOf("Google") && r(33);
          })()
        ? ((n = navigator.userAgent),
          (o = n.match(/Chrome/)
            ? void 0 !== navigator.brave
              ? "Brave"
              : n.match(/Edg/)
              ? "Edge"
              : n.match(/OPR/)
              ? "Opera"
              : "Chrome"
            : "Chromium"),
          u())
        : void 0 !== document.documentElement &&
          void 0 !== document.documentElement.style.MozAppearance &&
          r(37)
        ? ((o = "Firefox"), a(void 0 === navigator.serviceWorker))
        : void 0 !== navigator.msSaveBlob && r(39)
        ? ((o = "Internet Explorer"), a(void 0 === window.indexedDB))
        : t(new Error("detectIncognito cannot determine the browser"));
    });
  },
  T = function (e, t) {
    var n = t;
    return (
      void 0 !== e &&
        "undefined" !== e &&
        (n = "string" == typeof e ? "true" === e : e),
      n
    );
  },
  _ = function () {
    try {
      if ("undefined" == typeof window) return !1;
      if (window.localStorage) {
        var e = Date.now().toString();
        window.localStorage.setItem(e, e);
        var t = window.localStorage.getItem(e);
        if ((window.localStorage.removeItem(e), e === t)) return !0;
      }
      return !1;
    } catch (e) {
      return !1;
    }
  },
  O = function (e, t, n) {
    void 0 !== e.addEventListener
      ? e.addEventListener(t, n, !1)
      : void 0 !== e.attachEvent && e.attachEvent("on" + t, n);
  },
  N = function (e, t, n) {
    void 0 !== e.removeEventListener
      ? e.removeEventListener(t, n, !1)
      : void 0 !== e.detachEvent && e.detachEvent("on" + t, n);
  },
  D = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) {
      t += e.charCodeAt(n);
    }
    return (t &= t), t;
  },
  R = function (i, o) {
    var a = T(o.sandbox, !1),
      c = U(document.URL),
      s = G(n.PP_GEO_REGEX, c.hostname),
      u = G(n.PP_GOPAY_REGEX, c.hostname),
      d = c.hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0],
      l = T(o.trt, !1);
    if (
      ((i.configuration = {
        mm: T(o.mm, !0),
        sc: T(o.sc, !0),
        cd: T(o.cd, !1),
        appId: o.s,
        correlationId: o.f,
        fp: o.fp,
        b: o.b,
        bu: T(o.bu, !0),
        wv: M(window.navigator.userAgent),
        sgmmModel: null,
        sgmmScriptLoadTime: null,
        sgmmCollectedOnce: !1,
        localStorage: _(),
        csv: o.csv,
        sandbox: a,
        cb1: o.cb1,
        cb2: o.cb2,
        pvc: 0,
        ppGeo: T(s, !1),
        goPayGEO: T(u, !1),
        dmn: d,
      }),
      (function (n) {
        var i;
        if (window && window.navigator) {
          var o = window.navigator;
          try {
            o.userAgentData &&
              (null === (i = o.userAgentData) ||
                void 0 === i ||
                i
                  .getHighEntropyValues([
                    "architecture",
                    "bitness",
                    "mobile",
                    "model",
                    "platform",
                    "platformVersion",
                    "uaFullVersion",
                    "fullVersionList",
                  ])
                  .then(function (e) {
                    n.configuration.ch = e;
                  }));
          } catch (i) {
            S(i, n, t.cCH, e.FN);
          }
        }
      })(i),
      C(i),
      o.u &&
        (G(n.INVALD_DMN_REGEX, o.u) || o.u.length > 50
          ? S(new Error("U-" + o.u + "-UL-" + o.u.length), i, t.rC, e.FN)
          : (i.configuration.u = o.u)),
      s &&
        (j(i, n.INITIAL_URL_KEYS),
        (i.configuration.bu = !1),
        (i.configuration.sandbox = !1)),
      i.configuration.sandbox)
    )
      for (var f = Object.keys(b), m = 0; m < f.length; m++) {
        var v = f[m];
        r(v, window.atob(b[v]));
      }
    return (
      (i.configuration.trt = k(i, l)),
      (i.audit = {
        instantPayload: [],
        auditPayloads: [],
        auditFeatureList: [],
        finalCheckAuditPayload: !1,
        auditFeatureCount: 0,
      }),
      i
    );
  },
  C = function (e) {
    I()
      .then(function (t) {
        e.configuration.igt = t.isPrivate;
      })
      .catch(function (e) {});
  },
  L = function (n, i) {
    try {
      if (null !== n && "string" == typeof n && "" !== n) {
        var o = n.split(".");
        if (2 === o.length)
          return window[o[0]][o[1]] || window.parent[o[0]][o[1]];
        if (1 === o.length) return window[n] || window.parent[n];
      }
    } catch (n) {
      S(n, i, t.rCb, e.FN);
    }
  },
  k = function (e, t) {
    if (t) return !0;
    for (
      var n = [
          { name: "PayPal Gifts", appId: "paypal-gifts", rampPercent: 100 },
        ],
        i = e.configuration.appId,
        o = e.configuration.correlationId,
        a = 0;
      a < n.length;
      a++
    )
      if (n[a].appId === i) {
        var r = n[a].rampPercent || 0,
          c = Math.abs(D(o)) % 100;
        return 0 <= c && c < r;
      }
    return !1;
  },
  M = function (e) {
    if (
      /iPod|iPhone|iPad|Android|BlackBerry|BB10|Palm|CriOS|IEMobile|Windows Phone OS|webOS|Symbian|silk|Kindle|Opera Mini|mobile/i.test(
        e
      ) ||
      /ip(a|ro)d|silk|xoom|playbook|tablet|kindle|Nexus 7|GT-P10|SC-01C|SHW-M180S|SM-T320|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook|FOLIO|MB511.*RUTEM|Mac OS.*Silk/i.test(
        e
      )
    ) {
      if ("Android" === F(e)) {
        var t = x(e);
        return t < 4.4
          ? /Version\/[.0-9]*/i.test(e)
          : t < 5
          ? /Version\/[.0-9]* Chrome\/[.0-9]*/i.test(e)
          : /wv.+Version\/[.0-9]* Chrome\/[.0-9]*/i.test(e);
      }
      return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)|PLAYSTATION|iPadApp/i.test(
        e
      );
    }
    return !1;
  },
  F = function (e) {
    var t = e.match(
      /iPod|iPhone|iPad|Android|BlackBerry|Windows Phone OS|webOS|Symbian|mobile/g
    );
    if (t && t.length > 0) return t[0];
  },
  x = function (e) {
    var t = e.match(/Android ([.0-9]*)/i);
    if (null !== t && t[1]) return parseFloat(t[1]);
  },
  H = function (e) {
    return null !== e && "IFRAME" === e.tagName;
  },
  U = function (e) {
    var t = document.createElement("a");
    return (
      (t.href = e), { hostname: t.hostname, pathname: t.pathname, port: t.port }
    );
  },
  G = function (e, t) {
    return new RegExp(e).test(t);
  },
  j = function (e, t) {
    if (e.configuration.dmn)
      for (var i = 0; i < t.length; i++) {
        var o = n[t[i]],
          a = U(o);
        a.pathname.length > 1
          ? r(
              t[i],
              (a.pathname.endsWith("p3") ? n.C6_URL_PREFIX : n.URL_PREFIX) +
                e.configuration.dmn +
                a.pathname
            )
          : r(t[i], n.URL_PREFIX + e.configuration.dmn);
      }
  },
  B = function (e) {
    return !isNaN(e) && null !== e && "boolean" != typeof e;
  },
  W = function (e, t) {
    var n;
    return (
      null === (n = null == e ? void 0 : e.configuration) || void 0 === n
        ? void 0
        : n.localStorage
    )
      ? window.localStorage.getItem(t)
      : null;
  },
  Y = function (e, t, n) {
    var i;
    (null === (i = null == e ? void 0 : e.configuration) || void 0 === i
      ? void 0
      : i.localStorage) && window.localStorage.setItem(t, n);
  },
  z = function (e, t, n) {
    var i = document.createElement("img"),
      o =
        e +
        "?f=" +
        t.configuration.correlationId +
        "&s=" +
        encodeURIComponent(t.configuration.appId);
    t.configuration.fp &&
      (o += "&fp=" + encodeURIComponent(JSON.stringify(t.configuration.fp))),
      void 0 !== n && (o += "&d=" + encodeURIComponent(JSON.stringify(n))),
      (i.src = o);
  },
  X = function (i, o) {
    var a, r, c, s;
    new v({
      type: "POST",
      contentType: "application/json",
      url: n.AUDIT_ENDPOINT,
      data: JSON.stringify({
        appId:
          null === (a = i.configuration) || void 0 === a ? void 0 : a.appId,
        correlationId:
          null === (r = i.configuration) || void 0 === r
            ? void 0
            : r.correlationId,
        payload: o
          ? null === (c = i.audit) || void 0 === c
            ? void 0
            : c.auditPayloads
          : null === (s = i.audit) || void 0 === s
          ? void 0
          : s.instantPayload,
      }),
      error: function (n, o) {
        S(o, i, t.tA, e.AD);
      },
    }).send(),
      o
        ? ((i.audit.auditPayloads = []),
          (i.audit.finalCheckAuditPayload = !1),
          (i.audit.auditFeatureCount = 0),
          (i.audit.auditFeatureList = []))
        : (i.audit.instantPayload = []);
  },
  V = function (e, t) {
    e.audit.instantPayload.push(t), X(e, !1);
  },
  J = function () {
    if (
      window &&
      window.navigator &&
      window.navigator.connection &&
      void 0 !== window.navigator.connection
    ) {
      for (
        var e = ["type", "effectiveType", "rtt", "downlink", "downlinkMax"],
          t = window.navigator.connection,
          n = {},
          i = 0;
        i < e.length;
        i++
      ) {
        var o = t[e[i]];
        o && (n[e[i]] = String(o));
      }
      return n;
    }
  },
  q = function (e) {
    if (window && window.navigator) {
      var t = window.navigator,
        n = {
          appName: t.appName,
          appVersion: t.appVersion,
          buildID: t.buildID,
          cookieEnabled: t.cookieEnabled,
          language: void 0 === t.language ? t.browserLanguage : t.language,
          onLine: t.onLine,
          oscpu: t.oscpu,
          platform: t.platform,
          product: t.product,
          productSub: t.productSub,
          userAgent: t.userAgent,
          vendor: t.vendor,
          vendorSub: t.vendorSub,
        };
      return (
        e &&
          e.configuration &&
          void 0 !== e.configuration.igt &&
          (n.igt = e.configuration.igt),
        n
      );
    }
  },
  K = function () {
    if (window && window.screen) {
      var e = window.screen;
      return {
        colorDepth: e.colorDepth,
        pixelDepth: e.pixelDepth,
        height: e.height,
        width: e.width,
        availHeight: e.availHeight,
        availWidth: e.availWidth,
      };
    }
  },
  Q = function () {
    if (window)
      return {
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        devicePixelRatio: window.devicePixelRatio,
      };
  },
  $ = function () {
    var e = "Shockwave Flash",
      t = "ShockwaveFlash.ShockwaveFlash",
      n = "application/x-shockwave-flash",
      i = [0, 0, 0];
    try {
      if (
        void 0 !== navigator.plugins &&
        "object" === c(navigator.plugins[e])
      ) {
        var o = navigator.plugins[e].description;
        !o ||
          (void 0 !== navigator.mimeTypes &&
            navigator.mimeTypes[n] &&
            !navigator.mimeTypes[n].enabledPlugin) ||
          ((o = o.replace(/^[\w\W]*\s+(\S+\s+\S+$)/, "$1")),
          (i[0] = parseInt(o.replace(/^([\w\W]*)\.[\w\W]*$/, "$1"), 10)),
          (i[1] = parseInt(
            o.replace(/^[\w\W]*\.([\w\W]*)\s[\w\W]*$/, "$1"),
            10
          )),
          (i[2] = /[a-zA-Z]/.test(o)
            ? parseInt(o.replace(/^[\w\W]*[a-zA-Z]+([\w\W]*)$/, "$1"), 10)
            : 0));
      } else if (void 0 !== window.ActiveXObject) {
        var a = new window.ActiveXObject(t);
        if (a) {
          var r = a.GetVariable("$version");
          r &&
            ((r = r.split(" ")[1].split(",")),
            (i[0] = parseInt(r[0], 10)),
            (i[1] = parseInt(r[1], 10)),
            (i[2] = parseInt(r[2], 10)));
        }
      }
    } catch (e) {}
    return { major: i[0], minor: i[1], release: i[2] };
  },
  Z =
    ((p = {
      DAY: 864e5,
      HOUR: 36e5,
      MINUTE: 6e4,
      SECOND: 1e3,
      BASELINE_YEAR: 2014,
      MAX_SCORE: 864e6,
      AMBIGUITIES: {
        "America/Denver": ["America/Mazatlan"],
        "Europe/London": ["Africa/Casablanca"],
        "America/Chicago": ["America/Mexico_City"],
        "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
        "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
        "Asia/Beirut": [
          "Asia/Amman",
          "Asia/Jerusalem",
          "Europe/Helsinki",
          "Asia/Damascus",
          "Africa/Cairo",
          "Asia/Gaza",
          "Europe/Minsk",
        ],
        "Pacific/Auckland": ["Pacific/Fiji"],
        "America/Los_Angeles": ["America/Santa_Isabel"],
        "America/New_York": ["America/Havana"],
        "America/Halifax": ["America/Goose_Bay"],
        "America/Godthab": ["America/Miquelon"],
        "Asia/Dubai": ["Asia/Yerevan"],
        "Asia/Jakarta": ["Asia/Krasnoyarsk"],
        "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
        "Australia/Sydney": ["Australia/Lord_Howe"],
        "Asia/Tokyo": ["Asia/Yakutsk"],
        "Asia/Dhaka": ["Asia/Omsk"],
        "Asia/Baku": ["Asia/Yerevan"],
        "Australia/Brisbane": ["Asia/Vladivostok"],
        "Pacific/Noumea": ["Asia/Vladivostok"],
        "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
        "Pacific/Tongatapu": ["Pacific/Apia"],
        "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
        "Asia/Karachi": ["Asia/Yekaterinburg"],
        "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"],
      },
    }),
    (g = function (e) {
      var t = -e.getTimezoneOffset();
      return null !== t ? t : 0;
    }),
    (h = function (e) {
      for (
        var t = new Date(e, 0, 1, 0, 0, 1, 0).getTime(),
          n = new Date(e, 12, 31, 23, 59, 59).getTime(),
          i = t,
          o = new Date(i).getTimezoneOffset(),
          a = null,
          r = null;
        i < n - 864e5;

      ) {
        var c = new Date(i),
          s = c.getTimezoneOffset();
        s !== o && (s < o && (a = c), s > o && (r = c), (o = s)), (i += 864e5);
      }
      return !(!a || !r) && { s: w(a).getTime(), e: w(r).getTime() };
    }),
    (w = function e(t, n, i) {
      void 0 === n && ((n = p.DAY), (i = p.HOUR));
      for (
        var o = new Date(t.getTime() - n).getTime(),
          a = t.getTime() + n,
          r = new Date(o).getTimezoneOffset(),
          c = o,
          s = null;
        c < a - i;

      ) {
        var u = new Date(c);
        if (u.getTimezoneOffset() !== r) {
          s = u;
          break;
        }
        c += i;
      }
      return n === p.DAY
        ? e(s, p.HOUR, p.MINUTE)
        : n === p.HOUR
        ? e(s, p.MINUTE, p.SECOND)
        : s;
    }),
    (y = function (e) {
      var t = (function () {
        for (var e = [], t = 0; t < Z.olson.dst_rules.years.length; t++) {
          var n = h(Z.olson.dst_rules.years[t]);
          e.push(n);
        }
        return e;
      })();
      return (function (e) {
        for (var t = 0; t < e.length; t++) if (!1 !== e[t]) return !0;
        return !1;
      })(t)
        ? (function (e, t) {
            for (
              var n = function (n) {
                  for (var i = 0, o = 0; o < e.length; o++)
                    if (n.rules[o] && e[o]) {
                      if (!(e[o].s >= n.rules[o].s && e[o].e <= n.rules[o].e)) {
                        i = "N/A";
                        break;
                      }
                      if (
                        ((i = 0),
                        (i += Math.abs(e[o].s - n.rules[o].s)),
                        (i += Math.abs(n.rules[o].e - e[o].e)) > p.MAX_SCORE)
                      ) {
                        i = "N/A";
                        break;
                      }
                    }
                  return (function (e, t, n, i) {
                    if ("N/A" !== n) return n;
                    if ("Asia/Beirut" === t) {
                      if (
                        "Africa/Cairo" === i.name &&
                        13983768e5 === e[6].s &&
                        14116788e5 === e[6].e
                      )
                        return 0;
                      if (
                        "Asia/Jerusalem" === i.name &&
                        13959648e5 === e[6].s &&
                        14118588e5 === e[6].e
                      )
                        return 0;
                    } else if ("America/Santiago" === t) {
                      if (
                        "America/Asuncion" === i.name &&
                        14124816e5 === e[6].s &&
                        1397358e6 === e[6].e
                      )
                        return 0;
                      if (
                        "America/Campo_Grande" === i.name &&
                        14136912e5 === e[6].s &&
                        13925196e5 === e[6].e
                      )
                        return 0;
                    } else if ("America/Montevideo" === t) {
                      if (
                        "America/Sao_Paulo" === i.name &&
                        14136876e5 === e[6].s &&
                        1392516e6 === e[6].e
                      )
                        return 0;
                    } else if (
                      "Pacific/Auckland" === t &&
                      "Pacific/Fiji" === i.name &&
                      14142456e5 === e[6].s &&
                      13961016e5 === e[6].e
                    )
                      return 0;
                    return n;
                  })(e, t, i, n);
                },
                i = {},
                o = Z.olson.dst_rules.zones,
                a = o.length,
                r = p.AMBIGUITIES[t],
                c = 0;
              c < a;
              c++
            ) {
              var s = o[c],
                u = n(o[c]);
              "N/A" !== u && (i[s.name] = u);
            }
            for (var d in i)
              if (i.hasOwnProperty(d))
                for (var l = 0; l < r.length; l++) if (r[l] === d) return d;
            return t;
          })(t, e)
        : e;
    }),
    {
      determine: function () {
        var e,
          t,
          n,
          i = (function () {
            var e, t;
            if (
              "undefined" != typeof Intl &&
              "undefined" !== Intl.DateTimeFormat &&
              "function" == typeof Intl.DateTimeFormat &&
              void 0 !== (e = Intl.DateTimeFormat()) &&
              void 0 !== e.resolvedOptions
            )
              return (t = e.resolvedOptions().timeZone) &&
                (t.indexOf("/") > -1 || "UTC" === t)
                ? t
                : void 0;
          })();
        return (
          i ||
            ((i =
              Z.olson.timezones[
                ((e = g(new Date(p.BASELINE_YEAR, 0, 2))),
                (t = g(new Date(p.BASELINE_YEAR, 5, 2))),
                (n = e - t),
                n < 0 ? e + ",1" : n > 0 ? t + ",1,s" : e + ",0")
              ]),
            void 0 !== p.AMBIGUITIES[i] && (i = y(i))),
          {
            name: function () {
              return i;
            },
          }
        );
      },
    });
(Z.olson = Z.olson || {}),
  (Z.olson.timezones = {
    "-720,0": "Etc/GMT+12",
    "-660,0": "Pacific/Pago_Pago",
    "-660,1,s": "Pacific/Apia",
    "-600,1": "America/Adak",
    "-600,0": "Pacific/Honolulu",
    "-570,0": "Pacific/Marquesas",
    "-540,0": "Pacific/Gambier",
    "-540,1": "America/Anchorage",
    "-480,1": "America/Los_Angeles",
    "-480,0": "Pacific/Pitcairn",
    "-420,0": "America/Phoenix",
    "-420,1": "America/Denver",
    "-360,0": "America/Guatemala",
    "-360,1": "America/Chicago",
    "-360,1,s": "Pacific/Easter",
    "-300,0": "America/Bogota",
    "-300,1": "America/New_York",
    "-270,0": "America/Caracas",
    "-240,1": "America/Halifax",
    "-240,0": "America/Santo_Domingo",
    "-240,1,s": "America/Asuncion",
    "-210,1": "America/St_Johns",
    "-180,1": "America/Godthab",
    "-180,0": "America/Argentina/Buenos_Aires",
    "-180,1,s": "America/Montevideo",
    "-120,0": "America/Noronha",
    "-120,1": "America/Noronha",
    "-60,1": "Atlantic/Azores",
    "-60,0": "Atlantic/Cape_Verde",
    "0,0": "UTC",
    "0,1": "Europe/London",
    "60,1": "Europe/Berlin",
    "60,0": "Africa/Lagos",
    "60,1,s": "Africa/Windhoek",
    "120,1": "Asia/Beirut",
    "120,0": "Africa/Johannesburg",
    "180,0": "Asia/Baghdad",
    "180,1": "Europe/Moscow",
    "210,1": "Asia/Tehran",
    "240,0": "Asia/Dubai",
    "240,1": "Asia/Baku",
    "270,0": "Asia/Kabul",
    "300,1": "Asia/Yekaterinburg",
    "300,0": "Asia/Karachi",
    "330,0": "Asia/Kolkata",
    "345,0": "Asia/Kathmandu",
    "360,0": "Asia/Dhaka",
    "360,1": "Asia/Omsk",
    "390,0": "Asia/Rangoon",
    "420,1": "Asia/Krasnoyarsk",
    "420,0": "Asia/Jakarta",
    "480,0": "Asia/Shanghai",
    "480,1": "Asia/Irkutsk",
    "525,0": "Australia/Eucla",
    "525,1,s": "Australia/Eucla",
    "540,1": "Asia/Yakutsk",
    "540,0": "Asia/Tokyo",
    "570,0": "Australia/Darwin",
    "570,1,s": "Australia/Adelaide",
    "600,0": "Australia/Brisbane",
    "600,1": "Asia/Vladivostok",
    "600,1,s": "Australia/Sydney",
    "630,1,s": "Australia/Lord_Howe",
    "660,1": "Asia/Kamchatka",
    "660,0": "Pacific/Noumea",
    "690,0": "Pacific/Norfolk",
    "720,1,s": "Pacific/Auckland",
    "720,0": "Pacific/Majuro",
    "765,1,s": "Pacific/Chatham",
    "780,0": "Pacific/Tongatapu",
    "780,1,s": "Pacific/Apia",
    "840,0": "Pacific/Kiritimati",
  }),
  (Z.olson.dst_rules = {
    years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    zones: [
      {
        name: "Africa/Cairo",
        rules: [
          { e: 12199572e5, s: 12090744e5 },
          { e: 1250802e6, s: 1240524e6 },
          { e: 12858804e5, s: 12840696e5 },
          !1,
          !1,
          !1,
          { e: 14116788e5, s: 1406844e6 },
        ],
      },
      {
        name: "Africa/Casablanca",
        rules: [
          { e: 12202236e5, s: 12122784e5 },
          { e: 12508092e5, s: 12438144e5 },
          { e: 1281222e6, s: 12727584e5 },
          { e: 13120668e5, s: 13017888e5 },
          { e: 13489704e5, s: 1345428e6 },
          { e: 13828392e5, s: 13761e8 },
          { e: 14142888e5, s: 14069448e5 },
        ],
      },
      {
        name: "America/Asuncion",
        rules: [
          { e: 12050316e5, s: 12243888e5 },
          { e: 12364812e5, s: 12558384e5 },
          { e: 12709548e5, s: 12860784e5 },
          { e: 13024044e5, s: 1317528e6 },
          { e: 1333854e6, s: 13495824e5 },
          { e: 1364094e6, s: 1381032e6 },
          { e: 13955436e5, s: 14124816e5 },
        ],
      },
      {
        name: "America/Campo_Grande",
        rules: [
          { e: 12032172e5, s: 12243888e5 },
          { e: 12346668e5, s: 12558384e5 },
          { e: 12667212e5, s: 1287288e6 },
          { e: 12981708e5, s: 13187376e5 },
          { e: 13302252e5, s: 1350792e6 },
          { e: 136107e7, s: 13822416e5 },
          { e: 13925196e5, s: 14136912e5 },
        ],
      },
      {
        name: "America/Goose_Bay",
        rules: [
          { e: 122559486e4, s: 120503526e4 },
          { e: 125704446e4, s: 123648486e4 },
          { e: 128909886e4, s: 126853926e4 },
          { e: 13205556e5, s: 129998886e4 },
          { e: 13520052e5, s: 13314456e5 },
          { e: 13834548e5, s: 13628952e5 },
          { e: 14149044e5, s: 13943448e5 },
        ],
      },
      {
        name: "America/Havana",
        rules: [
          { e: 12249972e5, s: 12056436e5 },
          { e: 12564468e5, s: 12364884e5 },
          { e: 12885012e5, s: 12685428e5 },
          { e: 13211604e5, s: 13005972e5 },
          { e: 13520052e5, s: 13332564e5 },
          { e: 13834548e5, s: 13628916e5 },
          { e: 14149044e5, s: 13943412e5 },
        ],
      },
      {
        name: "America/Mazatlan",
        rules: [
          { e: 1225008e6, s: 12074724e5 },
          { e: 12564576e5, s: 1238922e6 },
          { e: 1288512e6, s: 12703716e5 },
          { e: 13199616e5, s: 13018212e5 },
          { e: 13514112e5, s: 13332708e5 },
          { e: 13828608e5, s: 13653252e5 },
          { e: 14143104e5, s: 13967748e5 },
        ],
      },
      {
        name: "America/Mexico_City",
        rules: [
          { e: 12250044e5, s: 12074688e5 },
          { e: 1256454e6, s: 12389184e5 },
          { e: 12885084e5, s: 1270368e6 },
          { e: 1319958e6, s: 13018176e5 },
          { e: 13514076e5, s: 13332672e5 },
          { e: 13828572e5, s: 13653216e5 },
          { e: 14143068e5, s: 13967712e5 },
        ],
      },
      {
        name: "America/Miquelon",
        rules: [
          { e: 12255984e5, s: 12050388e5 },
          { e: 1257048e6, s: 12364884e5 },
          { e: 12891024e5, s: 12685428e5 },
          { e: 1320552e6, s: 12999924e5 },
          { e: 13520016e5, s: 1331442e6 },
          { e: 13834512e5, s: 13628916e5 },
          { e: 14149008e5, s: 13943412e5 },
        ],
      },
      {
        name: "America/Santa_Isabel",
        rules: [
          { e: 12250116e5, s: 1207476e6 },
          { e: 12564612e5, s: 12389256e5 },
          { e: 12885156e5, s: 12703752e5 },
          { e: 13199652e5, s: 13018248e5 },
          { e: 13514148e5, s: 13332744e5 },
          { e: 13828644e5, s: 13653288e5 },
          { e: 1414314e6, s: 13967784e5 },
        ],
      },
      {
        name: "America/Santiago",
        rules: [
          { e: 1206846e6, s: 1223784e6 },
          { e: 1237086e6, s: 12552336e5 },
          { e: 127035e7, s: 12866832e5 },
          { e: 13048236e5, s: 13138992e5 },
          { e: 13356684e5, s: 13465584e5 },
          { e: 1367118e6, s: 13786128e5 },
          { e: 13985676e5, s: 14100624e5 },
        ],
      },
      {
        name: "America/Sao_Paulo",
        rules: [
          { e: 12032136e5, s: 12243852e5 },
          { e: 12346632e5, s: 12558348e5 },
          { e: 12667176e5, s: 12872844e5 },
          { e: 12981672e5, s: 1318734e6 },
          { e: 13302216e5, s: 13507884e5 },
          { e: 13610664e5, s: 1382238e6 },
          { e: 1392516e6, s: 14136876e5 },
        ],
      },
      {
        name: "Asia/Amman",
        rules: [
          { e: 1225404e6, s: 12066552e5 },
          { e: 12568536e5, s: 12381048e5 },
          { e: 12883032e5, s: 12695544e5 },
          { e: 13197528e5, s: 13016088e5 },
          !1,
          !1,
          { e: 14147064e5, s: 13959576e5 },
        ],
      },
      {
        name: "Asia/Damascus",
        rules: [
          { e: 12254868e5, s: 120726e7 },
          { e: 125685e7, s: 12381048e5 },
          { e: 12882996e5, s: 12701592e5 },
          { e: 13197492e5, s: 13016088e5 },
          { e: 13511988e5, s: 13330584e5 },
          { e: 13826484e5, s: 1364508e6 },
          { e: 14147028e5, s: 13959576e5 },
        ],
      },
      { name: "Asia/Dubai", rules: [!1, !1, !1, !1, !1, !1, !1] },
      {
        name: "Asia/Gaza",
        rules: [
          { e: 12199572e5, s: 12066552e5 },
          { e: 12520152e5, s: 12381048e5 },
          { e: 1281474e6, s: 126964086e4 },
          { e: 1312146e6, s: 130160886e4 },
          { e: 13481784e5, s: 13330584e5 },
          { e: 13802292e5, s: 1364508e6 },
          { e: 1414098e6, s: 13959576e5 },
        ],
      },
      {
        name: "Asia/Irkutsk",
        rules: [
          { e: 12249576e5, s: 12068136e5 },
          { e: 12564072e5, s: 12382632e5 },
          { e: 12884616e5, s: 12697128e5 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Asia/Jerusalem",
        rules: [
          { e: 12231612e5, s: 12066624e5 },
          { e: 1254006e6, s: 1238112e6 },
          { e: 1284246e6, s: 12695616e5 },
          { e: 131751e7, s: 1301616e6 },
          { e: 13483548e5, s: 13330656e5 },
          { e: 13828284e5, s: 13645152e5 },
          { e: 1414278e6, s: 13959648e5 },
        ],
      },
      {
        name: "Asia/Kamchatka",
        rules: [
          { e: 12249432e5, s: 12067992e5 },
          { e: 12563928e5, s: 12382488e5 },
          { e: 12884508e5, s: 12696984e5 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Asia/Krasnoyarsk",
        rules: [
          { e: 12249612e5, s: 12068172e5 },
          { e: 12564108e5, s: 12382668e5 },
          { e: 12884652e5, s: 12697164e5 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Asia/Omsk",
        rules: [
          { e: 12249648e5, s: 12068208e5 },
          { e: 12564144e5, s: 12382704e5 },
          { e: 12884688e5, s: 126972e7 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Asia/Vladivostok",
        rules: [
          { e: 12249504e5, s: 12068064e5 },
          { e: 12564e8, s: 1238256e6 },
          { e: 12884544e5, s: 12697056e5 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Asia/Yakutsk",
        rules: [
          { e: 1224954e6, s: 120681e7 },
          { e: 12564036e5, s: 12382596e5 },
          { e: 1288458e6, s: 12697092e5 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Asia/Yekaterinburg",
        rules: [
          { e: 12249684e5, s: 12068244e5 },
          { e: 1256418e6, s: 1238274e6 },
          { e: 12884724e5, s: 12697236e5 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Asia/Yerevan",
        rules: [
          { e: 1224972e6, s: 1206828e6 },
          { e: 12564216e5, s: 12382776e5 },
          { e: 1288476e6, s: 12697272e5 },
          { e: 13199256e5, s: 13011768e5 },
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Australia/Lord_Howe",
        rules: [
          { e: 12074076e5, s: 12231342e5 },
          { e: 12388572e5, s: 12545838e5 },
          { e: 12703068e5, s: 12860334e5 },
          { e: 13017564e5, s: 1317483e6 },
          { e: 1333206e6, s: 13495374e5 },
          { e: 13652604e5, s: 1380987e6 },
          { e: 139671e7, s: 14124366e5 },
        ],
      },
      {
        name: "Australia/Perth",
        rules: [{ e: 12068136e5, s: 12249576e5 }, !1, !1, !1, !1, !1, !1],
      },
      {
        name: "Europe/Helsinki",
        rules: [
          { e: 12249828e5, s: 12068388e5 },
          { e: 12564324e5, s: 12382884e5 },
          { e: 12884868e5, s: 1269738e6 },
          { e: 13199364e5, s: 13011876e5 },
          { e: 1351386e6, s: 13326372e5 },
          { e: 13828356e5, s: 13646916e5 },
          { e: 14142852e5, s: 13961412e5 },
        ],
      },
      {
        name: "Europe/Minsk",
        rules: [
          { e: 12249792e5, s: 12068352e5 },
          { e: 12564288e5, s: 12382848e5 },
          { e: 12884832e5, s: 12697344e5 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Europe/Moscow",
        rules: [
          { e: 12249756e5, s: 12068316e5 },
          { e: 12564252e5, s: 12382812e5 },
          { e: 12884796e5, s: 12697308e5 },
          !1,
          !1,
          !1,
          !1,
        ],
      },
      {
        name: "Pacific/Apia",
        rules: [
          !1,
          !1,
          !1,
          { e: 13017528e5, s: 13168728e5 },
          { e: 13332024e5, s: 13489272e5 },
          { e: 13652568e5, s: 13803768e5 },
          { e: 13967064e5, s: 14118264e5 },
        ],
      },
      {
        name: "Pacific/Fiji",
        rules: [
          !1,
          !1,
          { e: 12696984e5, s: 12878424e5 },
          { e: 13271544e5, s: 1319292e6 },
          { e: 1358604e6, s: 13507416e5 },
          { e: 139005e7, s: 1382796e6 },
          { e: 14215032e5, s: 14148504e5 },
        ],
      },
      {
        name: "Europe/London",
        rules: [
          { e: 12249828e5, s: 12068388e5 },
          { e: 12564324e5, s: 12382884e5 },
          { e: 12884868e5, s: 1269738e6 },
          { e: 13199364e5, s: 13011876e5 },
          { e: 1351386e6, s: 13326372e5 },
          { e: 13828356e5, s: 13646916e5 },
          { e: 14142852e5, s: 13961412e5 },
        ],
      },
    ],
  });
var ee = function (n) {
  var i, o, a;
  try {
    null[0]();
  } catch (e) {
    a = e.message.toUpperCase();
  }
  try {
    if ((window.opr && window.opr.addons) || window.opera) return 2;
    if (void 0 !== window.InstallTrigger || "NULL HAS NO PROPERTIES" === a)
      return void 0 !== window.orientation ? 10 : 3;
    if (void 0 !== document.documentMode) return 5;
    if (
      void 0 !== window.StyleMedia ||
      "UNABLE TO GET PROPERTY '0' OF UNDEFINED OR NULL REFERENCE" === a
    )
      return 6;
    var r = window.chrome,
      c = void 0 !== window.orientation;
    if (r || "CANNOT READ PROPERTY '0' OF NULL" === a) {
      if (
        window.clientInformation.plugins &&
        window.clientInformation.plugins.length > 0
      ) {
        if (
          window.location.fragmentDirective &&
          (null === (i = window.clientInformation.plugins[0].name) ||
          void 0 === i
            ? void 0
            : i.indexOf("Chrome")) >= 0
        )
          return c ? (te() ? 13 : 7) : 1;
        if (
          (null === (o = window.clientInformation.plugins[0].name) ||
          void 0 === o
            ? void 0
            : o.indexOf("Edge")) >= 0
        )
          return c ? 12 : 11;
      }
      return c ? (te() ? 13 : 7) : 1;
    }
    return void 0 !== window.__firefox__
      ? 10
      : void 0 !== window.__gCrWeb ||
        void 0 !== window.__crWeb ||
        void 0 !== window.FormControlElement
      ? 7
      : /constructor/i.test(window.HTMLElement.toString()) ||
        ("undefined" != typeof document &&
          void 0 !== document.onwebkitmouseforcechanged) ||
        void 0 !== window.webkitNotifications ||
        Object.prototype.toString
          .call(window.HTMLElement)
          .indexOf("Constructor") > 0 ||
        "NULL IS NOT AN OBJECT (EVALUATING 'NULL[0]')" === a
      ? void 0 !== navigator.standalone && void 0 !== window.orientation
        ? navigator.mediaDevices ||
          void 0 !== navigator.serviceWorker ||
          (void 0 !== navigator.mediaDevices &&
            void 0 !== navigator.mediaDevices.enumerateDevices)
          ? 8
          : 9
        : 4
      : -1;
  } catch (i) {
    return S(i, n, t.tb, e.P1), -1;
  }
};
function te() {
  var e = !1;
  try {
    e = "localStorage" in window && null != window.localStorage;
  } catch (t) {
    ("NS_ERROR_DOM_SECURITY_ERR" != t.name && "SecurityError" != t.name) ||
      (e = !0);
  }
  var t = "Notification" in window || "webkitNotifications" in window,
    n = "PushManager" in window && "PushSubscription" in window;
  return !(e || t || n);
}
var ne,
  ie,
  oe,
  ae,
  re,
  ce,
  se,
  ue,
  de,
  le,
  fe,
  me,
  ve,
  pe,
  ge,
  he =
    ((ne = function (e, t) {
      return (t >>> e) | (t << (32 - e));
    }),
    (ie = function (e) {
      return ne(2, e) ^ ne(13, e) ^ ne(22, e);
    }),
    (oe = function (e) {
      return ne(6, e) ^ ne(11, e) ^ ne(25, e);
    }),
    (ae = function (e) {
      return ne(7, e) ^ ne(18, e) ^ (e >>> 3);
    }),
    (re = function (e) {
      return ne(17, e) ^ ne(19, e) ^ (e >>> 10);
    }),
    (ce = function (e, t, n) {
      return (e & t) ^ (~e & n);
    }),
    (se = function (e, t, n) {
      return (e & t) ^ (e & n) ^ (t & n);
    }),
    {
      hash: function (e, t) {
        var n = u({ msgFormat: "string", outFormat: "hex" }, t);
        switch (n.msgFormat) {
          default:
          case "string":
            e = (function (e) {
              try {
                return new TextEncoder().encode(e, "utf-8").reduce(t, "");
              } catch (t) {
                return unescape(encodeURIComponent(e));
              }
              function t(e, t) {
                return e + String.fromCharCode(t);
              }
            })(e);
            break;
          case "hex-bytes":
            e = (function (e) {
              var t = e.replace(" ", "");
              return "" == t ? "" : t.match(/.{2}/g).map(n).join("");
              function n(e) {
                return String.fromCharCode(parseInt(e, 16));
              }
            })(e);
        }
        for (
          var i = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298,
            ],
            o = [
              1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
              2600822924, 528734635, 1541459225,
            ],
            a = (e += String.fromCharCode(128)).length / 4 + 2,
            r = Math.ceil(a / 16),
            c = new Array(r),
            s = 0;
          s < r;
          s++
        ) {
          c[s] = new Array(16);
          for (var d = 0; d < 16; d++)
            c[s][d] =
              (e.charCodeAt(64 * s + 4 * d + 0) << 24) |
              (e.charCodeAt(64 * s + 4 * d + 1) << 16) |
              (e.charCodeAt(64 * s + 4 * d + 2) << 8) |
              (e.charCodeAt(64 * s + 4 * d + 3) << 0);
        }
        var l = (8 * (e.length - 1)) / Math.pow(2, 32),
          f = (8 * (e.length - 1)) >>> 0;
        for (
          c[r - 1][14] = Math.floor(l), c[r - 1][15] = f, s = 0;
          s < r;
          s++
        ) {
          for (var m = new Array(64), v = 0; v < 16; v++) m[v] = c[s][v];
          for (v = 16; v < 64; v++)
            m[v] = (re(m[v - 2]) + m[v - 7] + ae(m[v - 15]) + m[v - 16]) >>> 0;
          var p = o[0],
            g = o[1],
            h = o[2],
            w = o[3],
            y = o[4],
            S = o[5],
            A = o[6],
            E = o[7];
          for (v = 0; v < 64; v++) {
            var P = E + oe(y) + ce(y, S, A) + i[v] + m[v],
              b = ie(p) + se(p, g, h);
            (E = A),
              (A = S),
              (S = y),
              (y = (w + P) >>> 0),
              (w = h),
              (h = g),
              (g = p),
              (p = (P + b) >>> 0);
          }
          (o[0] = (o[0] + p) >>> 0),
            (o[1] = (o[1] + g) >>> 0),
            (o[2] = (o[2] + h) >>> 0),
            (o[3] = (o[3] + w) >>> 0),
            (o[4] = (o[4] + y) >>> 0),
            (o[5] = (o[5] + S) >>> 0),
            (o[6] = (o[6] + A) >>> 0),
            (o[7] = (o[7] + E) >>> 0);
        }
        for (E = 0; E < o.length; E++)
          o[E] = ("00000000" + o[E].toString(16)).slice(-8);
        var I = "hex-w" == n.outFormat ? " " : "";
        return o.join(I);
      },
    }),
  we = function (e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  },
  ye = function (e, t, n, i) {
    return (
      (n += t), i.push(e), { asyncNewChecksumString: n, asyncChecksumKeys: i }
    );
  },
  Se = function (e, t) {
    return e + t;
  },
  Ae = function (e) {
    return D(e).toFixed(2);
  },
  Ee = function (e, t, n, i) {
    return (
      (n = n + e.configuration.appId + e.configuration.correlationId),
      t.push("appId", "correlationId", null == i ? void 0 : i.toString()),
      { ph2: he.hash(n), o: t }
    );
  },
  Pe = function (i, r) {
    var c, s;
    try {
      (i.timing.p1Start = Date.now()),
        (r && null != r && void 0 !== r) || (r = be(i)),
        new v({
          type: "POST",
          contentType: "application/json",
          url: n.POST1_ENDPOINT,
          data: JSON.stringify({
            appId:
              null === (c = i.configuration) || void 0 === c ? void 0 : c.appId,
            correlationId:
              null === (s = i.configuration) || void 0 === s
                ? void 0
                : s.correlationId,
            payload: r,
          }),
          success: function (n) {
            var r;
            if (
              null === (r = null == n ? void 0 : n.req) || void 0 === r
                ? void 0
                : r.response
            ) {
              var c = n.req.response;
              try {
                void 0 !== JSON.parse(c).v && Y(i, a, JSON.parse(c).v);
              } catch (n) {
                S(n, i, t.tP1, e.P1);
              }
            }
            var s = (function (e) {
              var t;
              return (
                document.cookie &&
                  "" !== document.cookie &&
                  document.cookie.split(";").find(function (n) {
                    var i = d(n.trim().split("="), 2),
                      o = i[0],
                      a = i[1];
                    return o == e && ((t = a), !0);
                  }),
                t
              );
            })(o);
            s && Y(i, o, s),
              window.parent.postMessage(
                JSON.stringify({ p1Sent: !0, utils: i }),
                "*"
              );
          },
          error: function (n, o) {
            S(o, i, t.tP1A, e.P1);
          },
        }).send();
    } catch (n) {
      S(n, i, t.tP1, e.P1);
    }
  },
  be = function (i) {
    var r,
      c,
      u,
      d = i.configuration.trt,
      l = {
        tz: -6e4 * new Date().getTimezoneOffset(),
        tzName: Z.determine().name(),
        dst: !0,
      },
      f = {
        trt: d,
        connectionData: J(),
        navigator: q(i),
        ch: i.configuration.ch,
        screen: K(),
        window: Q(),
        referer: i.configuration.referer,
        URL: i.configuration.u || i.configuration.url,
        rvr: n.FN_RELEASE_VERSION,
        activeXDefined: void 0 !== window.ActiveXObject,
        flashVersion: $(),
        fp: i.configuration.fp,
        lst:
          ((r = {
            ddiLst:
              null === (c = null == i ? void 0 : i.configuration) ||
              void 0 === c
                ? void 0
                : c.sc,
          }),
          s(r, o, W(i, o)),
          s(r, a, W(i, a)),
          r),
        tz: l.tz,
        tzName: l.tzName,
        dst: l.dst,
      },
      m = (function (e) {
        var t,
          n,
          i,
          o,
          a,
          r,
          c,
          s,
          u = Date.now();
        return {
          time: u,
          pt1: {
            i: (e.timing.iframeLoadEnd - e.timing.iframeLoadStart).toFixed(2),
            pp1: (u - e.timing.start).toFixed(2),
            cd1: (u - e.timing.p1Start).toFixed(2),
            tb: ee(e),
            sf:
              ((t = [0, 0, 0, 0]),
              (n = 0),
              (i = 1),
              (o = 2),
              (a = 3),
              (r = 4),
              (c = 5),
              (s = 6),
              (function () {
                try {
                  window.navigator.userAgent
                    .toLowerCase()
                    .indexOf(
                      decodeURIComponent("%70%68%61%6E%74%6F%6D%6A%73")
                    ) > -1
                    ? (t[0] = i)
                    : (t[0] = n);
                } catch (e) {
                  t[0] = n;
                }
              })(),
              (function () {
                try {
                  if (
                    window.phantom &&
                    "string" == typeof window.phantom.libraryPath &&
                    "function" == typeof window.phantom.injectJs
                  )
                    return void (t[1] = o);
                  if (window.Buffer) return void (t[1] = a);
                  if (window.emit) return void (t[1] = r);
                  if (window.spawn) return void (t[1] = c);
                  if (window.doAutomation || window.domAutomationController)
                    return void (t[1] = s);
                  t[1] = n;
                } catch (e) {
                  t[1] = n;
                }
              })(),
              (function () {
                try {
                  if (0 === window.outerWidth && 0 === window.outerHeight)
                    return void (t[2] = i);
                  t[2] = n;
                } catch (e) {
                  t[2] = n;
                }
              })(),
              (function () {
                try {
                  if (window.document.$cdc_asdjflasutopfhvcZLmcfl_.cache_)
                    return void (t[3] = i);
                } catch (e) {}
                try {
                  if (
                    window.document.documentElement.getAttribute(
                      decodeURIComponent("%77%65%62%64%72%69%76%65%72")
                    )
                  )
                    return void (t[3] = i);
                } catch (e) {}
                try {
                  if (
                    decodeURIComponent(
                      "%5F%53%65%6C%65%6E%69%75%6D%5F%49%44%45%5F%52%65%63%6F%72%64%65%72"
                    ) in window
                  )
                    return void (t[3] = i);
                } catch (e) {}
                try {
                  if (
                    decodeURIComponent(
                      "%5F%5F%77%65%62%64%72%69%76%65%72%5F%73%63%72%69%70%74%5F%66%6E"
                    ) in document
                  )
                    return void (t[3] = i);
                } catch (e) {}
                t[3] = n;
              })(),
              t.join("")),
          },
        };
      })(i);
    (f.time = m.time), (f.pt1 = m.pt1);
    try {
      var v = (function (e, t) {
        var n,
          i = "",
          o = "",
          a = [];
        if (e.navigator && e.navigator.userAgent) {
          var r = e.navigator.userAgent;
          (i = Se(i, r)), (n = we(1, 5));
          for (
            var c = "",
              s = r.substring(0, r.length <= 100 ? r.length : 100),
              u = 0;
            u <= s.length / n;
            u++
          )
            c += s.substring(n * u - 1, n * u);
          var d = ye("ua", c, o, a);
          (a = d.asyncChecksumKeys), (o = d.asyncNewChecksumString);
        }
        if (e.screen) {
          var l = e.screen;
          if (B(l.colorDepth)) {
            i = Se(i, l.colorDepth.toString());
            var f = ye("colorDepth", l.colorDepth.toString(), o, a);
            (a = f.asyncChecksumKeys), (o = f.asyncNewChecksumString);
          }
          if (B(l.width)) {
            i = Se(i, l.width.toString());
            var m = ye("width", l.width.toString(), o, a);
            (a = m.asyncChecksumKeys), (o = m.asyncNewChecksumString);
          }
        }
        if (e.tzName) {
          i = Se(i, e.tzName);
          var v = ye("tz", e.tz.toString(), o, a);
          (a = v.asyncChecksumKeys), (o = v.asyncNewChecksumString);
        }
        if (e.time) {
          i = Se(i, e.time.toString());
          var p = ye("time", e.time.toString(), o, a);
          (a = p.asyncChecksumKeys), (o = p.asyncNewChecksumString);
        }
        return { ph1: Ae(i), asynchk: Ee(t, a, o, n) };
      })(f, i);
      (f.pt1.ph1 = v.ph1), (f.asynchk = v.asynchk);
    } catch (n) {
      S(n, i, t.gCF, e.P1);
    }
    try {
      f.hlb =
        ((u = {}),
        void 0 !== navigator.webdriver && (u.wd = navigator.webdriver),
        (u.chromeWSRT = Boolean(
          window.chrome && (window.chrome.webstore || window.chrome.runtime)
        )),
        void 0 !== navigator.plugins && (u.plgSize = navigator.plugins.length),
        void 0 !== navigator.languages &&
          (u.lgSize = navigator.languages.length),
        void 0 !== navigator.connection &&
          navigator.connection.rtt &&
          (u.rtt = String(navigator.connection.rtt)),
        u);
    } catch (n) {
      S(n, i, t.sHA, e.P1);
    }
    return i.configuration.wv && (f.wv = !0), f;
  },
  Ie = function (e) {
    var t,
      n,
      i = [],
      o = {
        pdf: [
          "AcroPDF.PDF",
          "AcroPDF.PDF.1",
          "PDF.PdfCtrl",
          "PDF.PdfCtrl.5",
          "PDF.PdfCtrl.1",
        ],
        flash: ["ShockwaveFlash.ShockwaveFlash"],
        realplayer: [
          "rmocx.RealPlayer G2 Control",
          "rmocx.RealPlayer G2 Control.1",
          "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
          "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
          "RealPlayer",
        ],
        shockwave: ["SWCtl.SWCtl"],
        wmplayer: ["WMPlayer.OCX"],
      },
      a = function (e) {
        for (var t, n = [], i = 0; i < e.length; i += 1)
          "function" == typeof e.item &&
            "object" === c(e.item(i)) &&
            ((t = { t: e.item(i).type, s: e.item(i).suffixes }), n.push(t));
        return n;
      },
      r = function (e, t) {
        var n;
        try {
          "flash" === t
            ? (n = (n = e.GetVariable("$version"))
                .split(" ")[1]
                .replace(/,/g, "."))
            : "realplayer" === t
            ? (n = e.getVersionInfo())
            : "wmplayer" === t
            ? (n = e.versionInfo)
            : "pdf" === t
            ? (n = e.GetVersions().split(",")[0].split("=")[1])
            : "shockwave" === t && (n = e.ShockwaveVersion(""));
        } catch (e) {}
        return n;
      },
      s = function (t, n) {
        var i, o, a, c, s;
        for (i = 0; i < t.length; i += 1)
          try {
            if ((o = new window.ActiveXObject(t[i]))) {
              (s = e.timing.iePlugin.length),
                (e.timing.iePlugin[s] = {}),
                (e.timing.iePlugin[s].name = n),
                (e.timing.iePlugin[s].start = Date.now()),
                (c = r(o, n)),
                (a = { n: n, fn: t[i], v: c });
              break;
            }
            e.timing.iePlugin[i].end = Date.now();
          } catch (e) {}
        return a;
      },
      u = Date.now(),
      d = {};
    if (void 0 !== navigator.plugins && navigator.plugins.length > 0)
      for (var l = 0; l < navigator.plugins.length; l += 1) {
        var f = navigator.plugins[l];
        (d = {
          mT: a(navigator.plugins[l]),
          n: null !== (t = f.name) && void 0 !== t ? t : "",
          v: null !== (n = f.version) && void 0 !== n ? n : "",
          fn: f.filename,
          d: f.description,
        }),
          i.push(d);
      }
    else if (void 0 !== window.ActiveXObject) {
      for (var m in ((e.timing.iePlugin = []), o))
        Object.prototype.hasOwnProperty.call(o, m) &&
          (d = s(o[m], m)) &&
          i.push(d);
      navigator.javaEnabled() && i.push({ n: "Java", fn: "Java" });
    }
    return (
      i.sort(function (e, t) {
        var n,
          i,
          o =
            null === (n = null == e ? void 0 : e.n) || void 0 === n
              ? void 0
              : n.toLowerCase(),
          a =
            null === (i = null == t ? void 0 : t.n) || void 0 === i
              ? void 0
              : i.toLowerCase();
        return o < a ? -1 : o > a ? 1 : 0;
      }),
      (e.timing.pluginsTiming = (Date.now() - u).toFixed(2)),
      i
    );
  },
  Te = function (e) {
    var t = {};
    try {
      var n = document.createElement("canvas"),
        i = n.getContext && n.getContext("2d");
      i
        ? ((t.h = (function (t, n) {
            e.timing.cvStart = Date.now();
            try {
              (t.width = 200),
                (t.height = 200),
                (t.style.display = "inline"),
                (n.fillStyle = "#f60"),
                n.fillRect(95, 1, 75, 20);
              var i = "PayPal.com, <!@#$%>";
              (n.textBaseline = "alphabetic"),
                (n.font = "16px 'Arial'"),
                (n.fillStyle = "#069"),
                n.fillText(i, 2, 15),
                (n.fillStyle = "rgba(102, 204, 0, 0.7)"),
                n.fillText(i, 4, 17);
              var o = [
                {
                  fillStyle: "rgb(0, 255, 255)",
                  arc: [100, 50, 50, 0, 2 * Math.PI, !0],
                },
                {
                  fillStyle: "rgb(255, 0, 255)",
                  arc: [50, 50, 50, 0, 2 * Math.PI, !0],
                },
                {
                  fillStyle: "rgb(255,255,0)",
                  arc: [75, 100, 50, 0, 2 * Math.PI, !0],
                },
              ];
              (n.globalCompositeOperation = "multiply"),
                o.forEach(function (e) {
                  (n.fillStyle = e.fillStyle),
                    n.beginPath(),
                    n.arc.apply(n, l(e.arc)),
                    n.closePath(),
                    n.fill();
                });
              var a = t.toDataURL();
              return (a = a.slice(-50)), (e.timing.cvEnd = Date.now()), a;
            } catch (t) {
              return (e.timing.cvEnd = Date.now()), "-1";
            }
          })(n, i)),
          (t.f = 1),
          (t.t = (e.timing.cvEnd - e.timing.cvStart).toFixed(2)))
        : ((t.h = "-1"), (t.f = 0), (t.t = "0"));
    } catch (e) {
      (t.h = "-1"), (t.f = 1), (t.t = "0");
    }
    return t;
  },
  _e = function (n) {
    var i = window.performance;
    n.timing.vmStart = Date.now();
    var o;
    return {
      cores:
        ((n.timing.coresStart = Date.now()),
        navigator.hardwareConcurrency && (o = navigator.hardwareConcurrency),
        (n.timing.coresTiming = (Date.now() - n.timing.coresStart).toFixed(2)),
        o),
      gpu: (function () {
        var i;
        n.timing.gpuStart = Date.now();
        try {
          var o = document.createElement("canvas");
          if (void 0 === o || void 0 === o.getContext) return;
          var a = o.getContext("webgl") || o.getContext("experimental-webgl");
          if (a) {
            if (!("getExtension" in a) || !("getParameter" in a)) return;
            var r = a.getExtension("WEBGL_debug_renderer_info");
            r &&
              (i = {
                vendor: a.getParameter(r.UNMASKED_VENDOR_WEBGL),
                renderer: a.getParameter(r.UNMASKED_RENDERER_WEBGL),
              });
          }
        } catch (i) {
          S(i, n, t.vm, e.P2);
        }
        var c = {
          vendor: null == i ? void 0 : i.vendor,
          renderer: null == i ? void 0 : i.renderer,
        };
        return (
          (n.timing.gpuTiming = (Date.now() - n.timing.gpuStart).toFixed(2)), c
        );
      })(),
      jsMem: (function () {
        var e;
        if (
          ((n.timing.jsMemStart = Date.now()), "memory" in i && window.chrome)
        ) {
          var t = i.memory;
          e = {
            usedJSHeapSize: t.usedJSHeapSize,
            totalJSHeapSize: t.totalJSHeapSize,
            jsHeapSizeLimit: t.jsHeapSizeLimit,
          };
        }
        var o = {
          usedJSHeapSize: null == e ? void 0 : e.usedJSHeapSize,
          totalJSHeapSize: null == e ? void 0 : e.totalJSHeapSize,
          jsHeapSizeLimit: null == e ? void 0 : e.jsHeapSizeLimit,
        };
        return (
          (n.timing.jsMemTiming = (Date.now() - n.timing.jsMemStart).toFixed(
            2
          )),
          o
        );
      })(),
      perfNav: (function () {
        n.timing.perfNavStart = Date.now();
        var e = null == i ? void 0 : i.timing;
        return (
          (n.timing.perfNavTiming = (
            Date.now() - n.timing.perfNavStart
          ).toFixed(2)),
          e
        );
      })(),
      timing: {
        cores: n.timing.coresTiming,
        gpu: n.timing.gpuTiming,
        jsMem: n.timing.jsMemTiming,
        perfNav: n.timing.perfNavTiming,
        total: (Date.now() - n.timing.vmStart).toFixed(2),
      },
    };
  },
  Oe = function () {
    var e = {};
    void 0 !== navigator.deviceMemory &&
      (e.dm = navigator.deviceMemory.toString());
    var t = screen.orientation || screen.msOrientation || screen.mozOrientation;
    void 0 !== t && ((e.screenAngle = t.angle), (e.screenType = t.type));
    var n = [];
    if (void 0 !== navigator.mimeTypes && navigator.mimeTypes.length > 0)
      for (var i = 0; i < navigator.mimeTypes.length; i++)
        n.push(navigator.mimeTypes[i].type);
    e.mime = n;
    try {
      void 0 !== navigator.buildID && (e.buildID = navigator.buildID);
    } catch (t) {
      e.buildID = "err";
    }
    void 0 !== window.length && (e.wl = window.length),
      void 0 !== navigator.webdriver && (e.wd = navigator.webdriver),
      (void 0 === navigator.mozPay &&
        void 0 === navigator.mozContact &&
        void 0 === navigator.mozGetUserMedia &&
        void 0 === window.mozGetUserMedia &&
        void 0 === screen.mozLockOrientation) ||
        (e.moz = !0);
    var o = window.RTCPeerConnection || window.mozRTCPeerConnection;
    void 0 !== o && (e.rtc = o.toString());
    try {
      null[0]();
    } catch (t) {
      e.err = t.message;
    }
    var a = "";
    for (var r in window.screen) a += r;
    e.screenOrder = D(a).toFixed(2);
    for (
      var c = [
          "width",
          "height",
          "availWidth",
          "availHeight",
          "availTop",
          "availLeft",
          "colorDepth",
          "pixelDepth",
        ],
        s = "",
        u = 0;
      u < c.length;
      u++
    )
      void 0 !== Object.getOwnPropertyDescriptor(screen, c[u]) &&
        (s += "-" + u);
    e.screenOver = s;
    for (
      var d = ["platform", "vendor", "doNotTrack", "language", "onLine"],
        l = "",
        f = 0;
      f < d.length;
      f++
    )
      void 0 !== Object.getOwnPropertyDescriptor(navigator, d[f]) &&
        (l += "-" + f);
    return (e.navOver = l), e;
  },
  Ne = function (e) {
    var t = Date.now();
    return {
      pp2: (t - e.timing.start).toFixed(2),
      cd2: (t - e.timing.p2Start).toFixed(2),
      cp: e.timing.pluginsTiming,
    };
  },
  De = function (e) {
    var t, n;
    if (
      null === (t = null == e ? void 0 : e.configuration) || void 0 === t
        ? void 0
        : t.localStorage
    )
      return null === (n = null == e ? void 0 : e.configuration) || void 0 === n
        ? void 0
        : n.pvc;
  },
  Re = function (e) {
    var t, n, o;
    e.configuration.trt;
    var a = {
      data: {
        plugins: Ie(e),
        cv: Te(e),
        dom:
          null ===
            (n =
              null === (t = e.configuration) || void 0 === t
                ? void 0
                : t.parentData) || void 0 === n
            ? void 0
            : n.dom,
        vm: _e(e),
        fts: Oe(),
      },
      sc: s(
        {
          httpCookie:
            null === (o = null == e ? void 0 : e.configuration) || void 0 === o
              ? void 0
              : o.sc,
        },
        i,
        W(e, i)
      ),
      pvc: De(e),
      pt2: Ne(e),
    };
    return e.configuration.wv && (a.wv = !0), a;
  },
  Ce = "geolocation",
  Le = function (e) {
    var t = {};
    for (var n in e) t[n] = e[n];
    return t;
  },
  ke = function () {
    var e = Date.now();
    O(window, "message", Me),
      window.parent.postMessage(
        JSON.stringify({ ppfn: !0, frameReady: !0, iframeLoadEnd: e }),
        "*"
      );
  },
  Me = function (i) {
    var o, a;
    if (null !== i.data || "" !== i.data)
      try {
        var c = JSON.parse(i.data);
        if (
          (null === (o = null == (a = c.utils) ? void 0 : a.configuration) ||
          void 0 === o
            ? void 0
            : o.dmn) &&
          G(n.INVALD_DMN_REGEX, a.configuration.dmn)
        )
          return void S(
            new Error("Message Validation - domain -" + a.configuration.dmn),
            a,
            t.hMFPdmn,
            e.FN
          );
        if ("td" in c) {
          if (c && c.fields && c.fields.td)
            !(function (i, o) {
              var a, r;
              new v({
                type: "POST",
                contentType: "application/json",
                url: n.POSTW_ENDPOINT,
                data: JSON.stringify({
                  appId:
                    null === (a = i.configuration) || void 0 === a
                      ? void 0
                      : a.appId,
                  correlationId:
                    null === (r = i.configuration) || void 0 === r
                      ? void 0
                      : r.correlationId,
                  payload: o,
                }),
                error: function (n, o) {
                  S(o, i, t.tWA, e.W);
                },
              }).send();
            })(a, { fp: a.configuration.fp, td: c.fields.td });
        } else if ("bf" in c) {
          if (c && c.fields && c.fields.bf) {
            var s = c.fields.bf;
            s.length > 0 && V(a, { bf: s });
          }
        } else if (a.configuration) {
          if (a.configuration.ppGeo) {
            if (!G(n.PAYPAL_FIRST_PARTY_GEO_PARENT_DOMAIN, a.configuration.dmn))
              return void S(
                new Error("Message Validation - ppGeo -" + a.configuration.dmn),
                a,
                t.hMFPdmn,
                e.FN
              );
            j(a, n.URL_KEYS);
          }
          if (a.configuration.sandbox)
            for (var u = Object.keys(b), d = 0; d < u.length; d++) {
              var l = u[d];
              r(l, window.atob(b[l]));
            }
          (a.configuration.localStorage = _()), Fe(a);
        }
      } catch (n) {
        if (!a || void 0 === a) return;
        S(n, a, t.hMFP, e.FN);
      }
  },
  Fe = function (o) {
    !(function (e) {
      var t,
        i,
        o,
        a =
          null === (t = null == e ? void 0 : e.configuration) || void 0 === t
            ? void 0
            : t.correlationId;
      void 0 !== document.hidden
        ? ((i = "hidden"), (o = "visibilitychange"))
        : void 0 !== document.msHidden
        ? ((i = "msHidden"), (o = "msvisibilitychange"))
        : void 0 !== document.webkitHidden &&
          ((i = "webkitHidden"), (o = "webkitvisibilitychange"));
      var r = function () {
        var t;
        if (
          null === (t = null == e ? void 0 : e.configuration) || void 0 === t
            ? void 0
            : t.localStorage
        ) {
          var i = window.localStorage.getItem(n.PVC);
          if (null !== i) {
            var o = i.split("&"),
              r = o[0],
              c = o[1];
            r === a && (e.configuration.pvc = parseInt(c));
          }
        }
      };
      r(),
        document.addEventListener(
          o,
          function () {
            var t, o;
            if (document[i]) {
              r();
              var c =
                (null === (t = null == e ? void 0 : e.configuration) ||
                void 0 === t
                  ? void 0
                  : t.pvc) + 1;
              (e.configuration.pvc = c),
                (null === (o = null == e ? void 0 : e.configuration) ||
                void 0 === o
                  ? void 0
                  : o.localStorage) &&
                  window.localStorage.setItem(n.PVC, a + "&" + c);
            }
          },
          !1
        );
    })(o),
      Pe(o),
      z(n.POST3_ENDPOINT, o),
      (function (o, a) {
        var r, c;
        try {
          (o.timing.p2Start = Date.now()),
            (a && null != a && void 0 !== a) || (a = Re(o)),
            new v({
              type: "POST",
              contentType: "application/json",
              url: n.POST2_ENDPOINT,
              data: JSON.stringify({
                appId:
                  null === (r = o.configuration) || void 0 === r
                    ? void 0
                    : r.appId,
                correlationId:
                  null === (c = o.configuration) || void 0 === c
                    ? void 0
                    : c.correlationId,
                payload: a,
              }),
              success: function (n) {
                if (n && n.req && n.req.response) {
                  var a = n.req.response;
                  try {
                    void 0 !== JSON.parse(a).sc && Y(o, i, JSON.parse(a).sc);
                  } catch (n) {
                    S(n, o, t.tP2, e.P2);
                  }
                  window.parent.postMessage(
                    JSON.stringify({ p2Sent: !0, utils: o }),
                    "*"
                  );
                }
              },
              error: function (n, i) {
                S(i, o, t.tP2A, e.P2);
              },
            }).send();
        } catch (n) {
          S(n, o, t.tP2, e.P2);
        }
      })(o),
      (function (e) {
        e.configuration.csv &&
          ((function (e, t) {
            e.audit.auditFeatureList.push(t), (e.audit.auditFeatureCount += 1);
          })(e, "csv"),
          (function (e, t, n) {
            var i = e.audit.auditFeatureList.indexOf(t);
            i > -1 &&
              (e.audit.auditFeatureList.splice(i, 1),
              e.audit.auditPayloads.push(n));
          })(e, "csv", { csv: [{ csv: e.configuration.csv }] }));
      })(o);
    try {
      !(function (e) {
        var t,
          n = performance.now();
        null === (t = navigator.permissions) ||
          void 0 === t ||
          t.query({ name: Ce }).then(function (t) {
            var i = performance.now();
            if ("granted" == t.state && Ce in navigator) {
              var o = performance.now();
              navigator.geolocation.getCurrentPosition(function (t) {
                var a = performance.now();
                V(e, {
                  loc: [
                    {
                      coords: Le(t.coords),
                      corrId: e.configuration.correlationId,
                      sourceId: e.configuration.appId,
                      locationTime: a - o,
                      permissionTime: i - n,
                    },
                  ],
                });
              });
            }
          });
      })(o);
    } catch (n) {
      S(n, o, t.cAGD, e.W);
    }
    !(function (e) {
      (e.audit.finalCheckAuditPayload = !0),
        e.audit.finalCheckAuditPayload &&
          0 == e.audit.auditFeatureList.length &&
          e.audit.auditFeatureCount > 0 &&
          X(e, !0);
    })(o);
  },
  xe = function (e) {
    var t = e.configuration.b;
    return t && void 0 !== t
      ? t
      : ""
          .concat(n.BEACON_BASE_URL, "?p=")
          .concat(e.configuration.correlationId, "&s=")
          .concat(e.configuration.appId);
  },
  He = function () {
    var e =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : document.body;
    return Ue(e);
  },
  Ue = function e(t) {
    for (var n = "<", i = t.children, o = 0; o < i.length; ++o)
      1 === i[o].nodeType &&
        ((n += i[o].nodeName + " "),
        i[o].children.length > 0 && (n += e(i[o])));
    return (n += ">");
  },
  Ge = function (e) {
    var t;
    (null === (t = null == e ? void 0 : e.configuration) || void 0 === t
      ? void 0
      : t.localStorage) &&
      (window.localStorage.removeItem(n.LS_P1_POST_COUNTS),
      window.localStorage.removeItem(n.LS_P2_POST_TIME),
      window.localStorage.removeItem(n.LS_CORR_ID));
  },
  je = 1,
  Be = 2,
  We = 3,
  Ye = 4,
  ze = 3e3,
  Xe = 750,
  Ve = 5,
  Je = 2e3,
  qe = 10,
  Ke = 200,
  Qe = 1,
  $e = 2,
  Ze = 3,
  et = 4,
  nt = 5,
  it = function (e, t, n, i) {
    var o = (function (e, t, n) {
      var i = { ty: String(n) };
      return (
        n < 4 &&
          ((i.x = String(parseFloat(e.screenX.toFixed(7)))),
          (i.y = String(parseFloat(e.screenY.toFixed(7))))),
        e.radiusX > 0 && (i.r = String(parseFloat(e.radiusX.toFixed(7)))),
        e.force > 0 && (i.f = String(parseFloat(e.force.toFixed(7)))),
        t > 1 && (i.tc = String(t)),
        i
      );
    })(t.changedTouches[0], t.changedTouches.length, n);
    return i.push(o), e + 1;
  },
  ot = function (e) {
    clearInterval(e);
  },
  at = function (n, i, o) {
    var a = { data: [], counter: 0, reason: 0 },
      r = {
        data: [],
        eventStartTime: "0",
        eventEndTime: "0",
        previousX: 0,
        previousY: 0,
        didTouchStart: !1,
      },
      c = {
        timeoutId: void 0,
        isRunning: !1,
        touchDownId: void 0,
        singleEventEndId: void 0,
      },
      s = !1,
      u = !1,
      d = function () {
        try {
          if (
            (N(document, "touchstart", ue),
            N(document, "touchend", ue),
            N(document, "touchmove", ue),
            u && N(document, "touchforcechange", ue),
            "beforeunload" in window
              ? N(window, "beforeunload", fe)
              : "unload" in window && N(window, "unload", fe),
            c && c.isRunning && ((c.isRunning = !1), clearTimeout(c.timeoutId)),
            a.data.length > 0 && !s)
          ) {
            if (((s = !0), a.reason > 0)) {
              var r = a.data[a.data.length - 1];
              (r.res = a.reason), (a.data[a.data.length - 1] = r);
            }
            var d = (function (e, t) {
              return { utils: t, fields: { td: e.data }, td: !0 };
            })(a, n);
            i.postMessage(JSON.stringify(d), o);
          }
          !(function (e) {
            (e.counter = 0), (e.data = []), (e.reason = 0);
          })(a),
            (s = !1);
        } catch (i) {
          S(i, n, t.tmPT, e.W);
        }
      },
      l = function () {
        var e, t, n;
        if (
          (c.singleEventEndId && ((t = c.singleEventEndId), clearTimeout(t)),
          (null === (e = null == r ? void 0 : r.data) || void 0 === e
            ? void 0
            : e.length) >= Ke &&
            (function (e) {
              var t = [],
                n = Math.ceil(e.data.length / Ke);
              t.push(e.data[0]);
              for (var i = 1; i < e.data.length - 1; i += n) t.push(e.data[i]);
              t.push(e.data[e.data.length - 1]), (e.data = t);
            })(r),
          a.data && a.data.length < Ve)
        ) {
          var i = { et: r.eventEndTime, st: r.eventStartTime, te: r.data };
          a.data.push(i);
        }
        ((n = r).data = []),
          (n.didTouchStart = !1),
          (n.eventEndTime = "0"),
          (n.eventStartTime = "0"),
          (n.previousX = 0),
          (n.previousY = 0);
      };
    return (
      void 0 !== ue && (de = ue),
      void 0 !== le && (fe = le),
      (ue = function (i) {
        try {
          var o = Date.now().toString();
          if (a.counter >= Xe)
            return (r.eventEndTime = o), (a.reason = Be), l(), void d();
          if (
            (0 !== a.data.length ||
              c.isRunning ||
              ((c.isRunning = !0),
              (c.timeoutId = window.setTimeout(function () {
                !(function () {
                  try {
                    (a.reason = je),
                      r.didTouchStart &&
                        ((r.eventEndTime = Date.now().toString()), l()),
                      d();
                  } catch (i) {
                    S(i, n, t.tmHTE, e.W);
                  }
                })();
              }, ze))),
            "touchstart" !== i.type || r.didTouchStart)
          )
            if ("touchmove" === i.type && r.didTouchStart) {
              if (
                (c.touchDownId && ot(c.touchDownId),
                "changedTouches" in i && i.changedTouches.length > 0)
              ) {
                var s = i.changedTouches[0],
                  f = Math.abs(s.pageX - r.previousX),
                  m = Math.abs(s.pageY - r.previousY);
                (f > 1 || m > 1) &&
                  ((a.counter = it(a.counter, i, $e, r.data)),
                  (r.previousX = s.pageX),
                  (r.previousY = s.pageY));
              }
            } else
              "touchforcechange" === i.type && r.didTouchStart
                ? "changedTouches" in i &&
                  i.changedTouches.length > 0 &&
                  (a.counter = it(a.counter, i, nt, r.data))
                : "touchend" === i.type &&
                  r.didTouchStart &&
                  (c.touchDownId && ot(c.touchDownId),
                  (r.eventEndTime = o),
                  "changedTouches" in i &&
                    i.changedTouches.length > 0 &&
                    (a.counter = it(a.counter, i, Ze, r.data)),
                  l(),
                  a.data.length === Ve && ((a.reason = We), d()));
          else
            (r.didTouchStart = !0),
              (r.eventStartTime = o),
              "changedTouches" in i &&
                i.changedTouches.length > 0 &&
                ((a.counter = it(a.counter, i, Qe, r.data)),
                u ||
                  (c.touchDownId = window.setInterval(function () {
                    a.counter = it(a.counter, i, et, r.data);
                  }, qe)),
                (c.singleEventEndId = window.setTimeout(function () {
                  c.touchDownId && ot(c.touchDownId),
                    (r.eventEndTime = o),
                    Date.now().toString(),
                    l();
                }, Je)));
        } catch (i) {
          S(i, n, t.tmTH, e.W);
        }
      }),
      (le = function () {
        (a.reason = Ye), d();
      }),
      function () {
        (function (e, t, n) {
          return (
            !e.configuration.tmCalledOnce &&
            t &&
            n &&
            ("ontouchstart" in window ||
              "msMaxTouchPoints" in navigator ||
              "DocumentTouch" in window ||
              "TouchEvent" in window ||
              "maxTouchPoints" in navigator)
          );
        })(n, i, o) &&
          (de &&
            (N(document, "touchstart", de),
            N(document, "touchend", de),
            N(document, "touchmove", de),
            u && (N(document, "touchforcechange", de), (u = !1))),
          fe &&
            ("beforeunload" in window
              ? N(window, "beforeunload", fe)
              : "unload" in window && N(window, "unload", fe)),
          O(document, "touchstart", ue),
          O(document, "touchend", ue),
          O(document, "touchmove", ue),
          "ontouchforcechange" in window.document &&
            (O(document, "touchforcechange", ue), (u = !0)),
          "beforeunload" in window
            ? O(window, "beforeunload", le)
            : "unload" in window && O(window, "unload", le));
      }
    );
  },
  rt = function (i) {
    if (void 0 !== i.origin && i.origin === n.SERVICE_BASE_URL) {
      var o;
      try {
        o = JSON.parse(i.data);
      } catch (e) {
        return;
      }
      var a = dt(o);
      if (a) {
        if (
          (a.configuration.tmCalledOnce ||
            (at(a, i.source, i.origin)(), (a.configuration.tmCalledOnce = !0)),
          !a.configuration.bfCollected)
        )
          if (a.configuration.trt && !a.configuration.ppGeo)
            try {
              ct(a, i.source, i.origin), (a.configuration.bfCollected = !0);
            } catch (n) {
              S(n, a, t.bf, e.FN);
            }
        "frameReady" in o && !0 === o.frameReady ? ut(i, a) : o && lt(o, a);
      }
    }
  },
  ct = function (e, t, i) {
    var o = performance.now(),
      a = document.createElement("script");
    (a.type = "text/javascript"),
      (a.async = !0),
      (a.onload = function () {
        var n = performance.now();
        if ("undefined" != typeof bf && "undefined" != typeof tt) {
          var a = st(bf, tt, n - o, e);
          t.postMessage(JSON.stringify(a), i);
        }
      }),
      (a.src = n.BROWSER_FEATURES_URL),
      document.getElementsByTagName("head")[0].appendChild(a);
  },
  st = function (e, t, n, i) {
    return {
      utils: i,
      fields: {
        bf: [
          {
            d: e,
            corrId: i.configuration.correlationId,
            sourceId: i.configuration.appId,
            slt: n,
            clt: t,
          },
        ],
      },
      bf: !0,
    };
  },
  ut = function (e, t) {
    (t.configuration.referer = document.referrer),
      (t.configuration.url = document.URL),
      (t.configuration.parentData = { dom: He() });
    var n = { ppfn: !0, utils: t };
    e.source.postMessage(JSON.stringify(n), e.origin);
  },
  dt = function (e) {
    var t;
    return (
      window.__UTILS__
        ? ((t = window.__UTILS__),
          "iframeLoadEnd" in e && (t.timing.iframeLoadEnd = e.iframeLoadEnd),
          delete window.__UTILS__)
        : "utils" in e && (t = e.utils),
      t
    );
  },
  lt = function (e, t) {
    var i, o;
    try {
      if ("p1Sent" in e) {
        var a = L(
          null === (i = t.configuration) || void 0 === i ? void 0 : i.cb1,
          t
        );
        "function" == typeof a && a(),
          t.configuration.cd &&
            (function (e) {
              var t;
              (null === (t = null == e ? void 0 : e.configuration) ||
              void 0 === t
                ? void 0
                : t.localStorage) &&
                (window.localStorage.setItem(
                  n.LS_CORR_ID,
                  e.configuration.correlationId
                ),
                (e.configuration.p1PostCounts += 1),
                window.localStorage.setItem(
                  n.LS_P1_POST_COUNTS,
                  e.configuration.p1PostCounts.toString()
                ));
            })(t);
      } else if ("p2Sent" in e) {
        var r = L(
          null === (o = t.configuration) || void 0 === o ? void 0 : o.cb2,
          t
        );
        "function" == typeof r && r(),
          t.configuration.cd &&
            (function (e) {
              var t;
              (null === (t = null == e ? void 0 : e.configuration) ||
              void 0 === t
                ? void 0
                : t.localStorage) &&
                (window.localStorage.setItem(
                  n.LS_CORR_ID,
                  e.configuration.correlationId
                ),
                window.localStorage.setItem(
                  n.LS_P2_POST_TIME,
                  Date.now().toString()
                ));
            })(t);
      }
    } catch (e) {}
  },
  ft = {},
  mt = window.PAYPAL || {};
(mt.asyncData = {}),
  (mt.asyncData.initAndCollect = function () {
    var i = { timing: { start: Date.now() } };
    try {
      var o = document.querySelector("script[fncls='".concat(n.FNCLS, "']"));
      if (o && "application/json" === o.type) {
        var a = JSON.parse(o.text);
        if (
          ((i = R(i, a)).configuration.bu &&
            (function (n) {
              var i = xe(n);
              try {
                var o = document.getElementById("ppfnfnclspbfiframe");
                H(o) && o.contentWindow && document.body.removeChild(o);
                var a = document.createElement("iframe");
                document.body.appendChild(a),
                  (a.id = "ppfnfnclspbfiframe"),
                  (a.src = "about:blank"),
                  (a.title = "pbf"),
                  (a.tabIndex = -1),
                  (a.style.width = "0"),
                  (a.style.height = "0"),
                  (a.style.border = "0"),
                  (a.style.position = "absolute"),
                  (a.style.zIndex = "-999"),
                  (a.style.top = "-10000px"),
                  (a.style.left = "-10000px"),
                  a.setAttribute("aria-hidden", "true");
                var r = a.contentWindow.document;
                (r.open()._m = function () {
                  r.createElement("img").src = i;
                }),
                  O(a, "load", r._m),
                  r.close();
              } catch (i) {
                S(i, n, t.tB, e.BC);
              }
            })(i),
          i.configuration.cd &&
            (function (e) {
              if (null == e ? void 0 : e.configuration.localStorage) {
                var t =
                    parseInt(
                      window.localStorage.getItem(n.LS_P1_POST_COUNTS),
                      10
                    ) || 0,
                  i =
                    parseInt(
                      window.localStorage.getItem(n.LS_P2_POST_TIME),
                      10
                    ) || 0,
                  o = window.localStorage.getItem(n.LS_CORR_ID) || "";
                e.configuration.p1PostCounts = t;
                var a = Date.now() - 1728e5;
                if (o === e.configuration.correlationId) {
                  if (!(i <= a))
                    return t >= 1 && (e.configuration.p1PostCounts = 0), !0;
                  (e.configuration.p1PostCounts = 0), Ge(e);
                }
                return !1;
              }
            })(i))
        )
          return;
        if (
          (i.configuration.mm &&
            (!(function (e) {
              var t,
                i = {
                  prevX: 0,
                  prevY: 0,
                  validMoveCounter: 0,
                  totalMoveCounter: 0,
                  prevTime: 0,
                  rDT_local: "",
                  rDT_raw: "",
                },
                o = function (e, t) {
                  var n = 5123,
                    i = Math.floor(10 * Math.random()) + 1;
                  return (
                    n * i +
                    t.pageX +
                    "," +
                    (n * i + t.pageY) +
                    "," +
                    (n * i + e) +
                    ":"
                  );
                },
                a = function (e, t) {
                  return t.pageX + "," + t.pageY + "," + e + ":";
                };
              return (
                void 0 !== me && (ve = me),
                (me = function (i) {
                  if ("pageX" in i) {
                    var r = Date.now();
                    if (0 !== t.totalMoveCounter) {
                      var c = r - t.prevTime,
                        s = Math.abs(i.pageX - t.prevX),
                        u = Math.abs(i.pageY - t.prevY);
                      if (s > 1 || u > 1) {
                        var d = o(c, i);
                        (t.rDT_raw += a(c, i)),
                          (t.rDT_local += d),
                          (t.validMoveCounter += 1);
                      }
                    }
                    if (
                      ((t.prevTime = r),
                      (t.prevX = i.pageX),
                      (t.prevY = i.pageY),
                      t.totalMoveCounter++,
                      t.validMoveCounter >= 20 || t.totalMoveCounter >= 50)
                    ) {
                      N(document, "mousemove", me);
                      var l =
                          t.rDT_local +
                          D(t.rDT_local) +
                          "," +
                          t.totalMoveCounter,
                        f = t.rDT_raw.slice(0, -1),
                        m = { rDT: l };
                      if (
                        (z(n.W_ENDPOINT, e, m),
                        null != e.configuration.sgmmModel)
                      ) {
                        var v = performance.now();
                        e.configuration.sgmmModel
                          .get_feature(f)
                          .then(function (t) {
                            var n = performance.now();
                            V(e, {
                              sgmm: [
                                {
                                  fv: t,
                                  corrId: e.configuration.correlationId,
                                  srcId: e.configuration.appId,
                                  slt: e.configuration.sgmmScriptLoadTime,
                                  flt: n - v,
                                },
                              ],
                            });
                          });
                      }
                    }
                  } else N(document, "mousemove", me);
                }),
                function () {
                  e.configuration.mmCalledOnce ||
                    (ve && N(document, "mousemove", ve),
                    O(document, "mousemove", me),
                    (t = u({}, i)));
                }
              );
            })(i)(),
            (i.configuration.mmCalledOnce = !0)),
          a.ts &&
            (!(function (i, o) {
              var a,
                r = !1,
                c = !1,
                s = {},
                u = 0,
                d = "",
                l = {
                  8: "",
                  9: "",
                  13: "",
                  16: "",
                  17: "",
                  18: "",
                  37: "",
                  38: "",
                  39: "",
                  40: "",
                  46: "",
                  224: "",
                  91: "",
                  93: "",
                  219: "",
                  220: "",
                  "000": "",
                },
                f = { 17: "", 224: "", 91: "", 93: "" },
                m = function (e) {
                  var t = new y();
                  (u = e.length),
                    void 0 !== pe && (ge = pe),
                    (pe = function (e) {
                      var n = e.target || e.srcElement,
                        i = n && n.id;
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        t.capture(e);
                    });
                  for (var n = 0; n < u; n++) {
                    var i = e[n];
                    i &&
                      ((s[i.id] = new A(i.id, i.min, document.body)),
                      (ft[i.id] = pe));
                  }
                  void 0 !== ge &&
                    (N(document.body, "keydown", ge),
                    N(document.body, "keyup", ge),
                    N(document.body, "paste", ge),
                    c && N(document.body, "change", ge)),
                    O(document.body, "keydown", pe),
                    O(document.body, "keyup", pe),
                    O(document.body, "paste", pe),
                    c && O(document.body, "change", pe);
                },
                v = function (e) {
                  var t = document.getElementById(e.id);
                  if (null != t) {
                    var n = new y(e.id, e.min, t);
                    void 0 !== ft[e.id] &&
                      (N(t, "keydown", ft[e.id]),
                      N(t, "keyup", ft[e.id]),
                      N(t, "paste", ft[e.id]),
                      c && N(t, "change", ft[e.id]));
                    var i = function (e) {
                      n.capture(e);
                    };
                    (ft[e.id] = i),
                      (s[e.id] = n.fieldModel),
                      O(t, "keydown", i),
                      O(t, "keyup", i),
                      O(t, "paste", i),
                      c && O(t, "change", i);
                  }
                },
                p = function (e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = s[e[t].id];
                    null != n &&
                      ((n.pf_psu = g(n.fieldElement)),
                      (n.pf_val = h(n.fieldElement)),
                      (n.pf_psu || n.pf_val) && w(n));
                  }
                },
                g = function (e) {
                  try {
                    var t = "#" + e.id + ":-webkit-autofill";
                    if (document.querySelector(t)) return !0;
                  } catch (e) {}
                  return !1;
                },
                h = function (e) {
                  return !!e.value;
                },
                w = function (e) {
                  u--,
                    (r && 0 !== u) ||
                      (N(e.fieldElement, "keydown", ft[e.id]),
                      N(e.fieldElement, "keyup", ft[e.id]),
                      N(e.fieldElement, "paste", ft[e.id]),
                      c && N(e.fieldElement, "change", ft[e.id])),
                    r && (delete s[e.id], delete ft[e.id]);
                  var t,
                    o = {
                      elid: e.id,
                      sid: i.configuration.appId,
                      tst: d,
                      wsps: !!e.wsps && e.wsps,
                      ts: "" === e.ts ? e.ts : e.ts + "Uh:" + D(e.ts),
                      pf: { psu: e.pf_psu, val: e.pf_val },
                    };
                  z(n.W_ENDPOINT, i, (((t = {}).tsobj = o), t));
                },
                y = function (e, t, n) {
                  this.fieldModel = new A(e, t, n);
                };
              y.prototype.capture = function (n) {
                try {
                  var o, u;
                  if (r) {
                    var d = n.target || n.srcElement;
                    o = s[d.id];
                  } else o = this.fieldModel;
                  window.event ? (u = n.keyCode) : n.which && (u = n.which),
                    (void 0 !== u && 0 !== u) || (u = "000");
                  var m = Date.now(),
                    v = m - o.baseTime;
                  (o.baseTime = m),
                    "keydown" === n.type
                      ? ((a = "keydown"),
                        u in l
                          ? ((o.ts += "Dk" + u + ":" + v),
                            (o.specialCount = o.specialCount + 1),
                            u in f && (o.controlCount = o.controlCount + 1))
                          : ((o.ts += "Di" + o.keyIndex + ":" + v),
                            (o.keyIndexArray[u] = o.keyIndex),
                            o.keyIndex++))
                      : "keyup" === n.type
                      ? ((a = "keyup"),
                        u in l
                          ? ((o.ts += "Uk" + u + ":" + v),
                            u in f && (o.controlCount = o.controlCount + 1),
                            "000" === u && (o.isReadyToSend = !0))
                          : void 0 !== o.keyIndexArray[u] &&
                            (o.ts += "Ui" + o.keyIndexArray[u] + ":" + v))
                      : "paste" === n.type && 0 === o.ts.length
                      ? ((o.wsps = !0), (o.isReadyToSend = !0))
                      : "change" === n.type &&
                        c &&
                        void 0 === a &&
                        u in l &&
                        ((o.ts += "Dk" + u + ":" + v + "Uk" + u + ":1"),
                        "000" === u && (o.isReadyToSend = !0)),
                    (o.keyIndex + o.specialCount >= o.min ||
                      (o.controlCount > 1 && o.keyIndex > 0) ||
                      o.isReadyToSend) &&
                      w(o);
                } catch (n) {
                  S(n, i, t.ts, e.W);
                }
              };
              var A = function (e, t, n) {
                (this.id = e),
                  (this.min = t || 8),
                  (this.fieldElement = n),
                  (this.baseTime = Date.now()),
                  (this.isReadyToSend = !1),
                  (this.keyIndex = 0),
                  (this.controlCount = 0),
                  (this.specialCount = 0),
                  (this.keyIndexArray = []),
                  (this.ts = ""),
                  (this.wsps = !1),
                  (this.pf_psu = !1),
                  (this.pf_val = !1);
              };
              return function () {
                if (
                  ((o = o || {}), !i.configuration.tsCalledOnce || o.fields)
                ) {
                  d = o.type;
                  var e = o.fields;
                  if (
                    ((r = T(o.delegate, !1)),
                    ("InstallTrigger" in window ||
                      void 0 !== window.__firefox__) &&
                      (c = !0),
                    r)
                  )
                    m(e);
                  else {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n && v(n);
                    }
                    e.length > 0 &&
                      setTimeout(function () {
                        p(e);
                      }, 200);
                  }
                }
              };
            })(i, a.ts)(),
            (i.configuration.tsCalledOnce = !0)),
          !i.configuration.sgmmCollectedOnce)
        )
          if (i.configuration.trt && !i.configuration.ppGeo)
            try {
              !(function (e) {
                var t = performance.now(),
                  i = document.createElement("script");
                (i.type = "text/javascript"),
                  (i.async = !0),
                  (i.onload = function () {
                    var n = performance.now() - t;
                    if (
                      ((e.configuration.sgmmScriptLoadTime = n),
                      "undefined" != typeof sgmm)
                    ) {
                      var i = new sgmm();
                      i.model_warmup(), (e.configuration.sgmmModel = i);
                    }
                  }),
                  (i.src = n.MOUSE_MODEL_URL),
                  document.getElementsByTagName("head")[0].appendChild(i);
              })(i),
                (i.configuration.sgmmCollectedOnce = !0);
            } catch (n) {
              S(n, i, t.sgmm, e.FN);
            }
        !(function (e) {
          var t = document.getElementById("ppfnfnclsiframe");
          H(t) && t.contentWindow && document.body.removeChild(t);
          var i = document.createElement("iframe");
          (e.timing.iframeLoadStart = Date.now()),
            (i.allow = "geolocation"),
            (i.id = "ppfnfnclsiframe"),
            (i.title = "ppfniframe"),
            (i.tabIndex = -1),
            (i.style.width = "0"),
            (i.style.height = "0"),
            (i.style.border = "0"),
            (i.style.position = "absolute"),
            (i.style.zIndex = "-999"),
            (i.style.top = "-10000px"),
            (i.style.left = "-10000px"),
            (i.style.left = "-10000px"),
            (i.style.left = "-10000px"),
            1 == e.configuration.goPayGEO
              ? (i.src = n.LOAD_IFRAME_ENDPOINT + "?js_src=" + n.JS_PPGEO_URL)
              : (i.src = n.LOAD_IFRAME_ENDPOINT + "?js_src=" + n.JS_URL),
            i.setAttribute("aria-hidden", "true"),
            document.body.appendChild(i),
            (window.__UTILS__ = e),
            O(window, "message", rt);
        })(i);
      } else
        new RegExp(n.PAYPAL_IFRAME_DOMAIN).test(window.location.href) &&
        /\/v1\/r\/d\/i/.test(window.location.href)
          ? null === document.body
            ? (window.onload = function () {
                ke();
              })
            : ke()
          : S(new Error("NONE"), i, t.init, e.FN);
    } catch (n) {
      S(n, i, t.init, e.FN);
    }
  }),
  mt.asyncData.initAndCollect();
