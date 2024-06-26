
import {Q} from './_Q.js';
// import {U} from './_U.js';
import {V} from './_V.js';
// import {N} from './_N.js';
// import {G} from './_G.js';
// import {J} from './_J.js';
import {R} from './_R.js';
import {B} from './_B.js';
import {D} from './_D.js';
import {F} from './_F.js';
import {W} from './_W.js';
// import {A} from './_A.js';
import {x} from './_x.js';
// import {M} from './_M.js';
import {k} from './_k.js';
// import {g} from './_ng.js';
// import {y} from './_y.js';
// import {w} from './_nw.js';
// import {b} from './_nb.js';
import {E} from './_E.js';
import {T} from './_T.js';
import {S} from './_S.js';
import {c} from './_c.js';
import {u} from './_nu.js';
import {f} from './_nf.js';
import {d} from './_nd.js';
import {l} from './_l.js';
import {v} from './_nv.js';
import {p} from './_p.js';
import {h} from './_h.js';

var e,
  n,
  t,
  r,
  i,
  o,
  a = -1,
  m = -1,

  L = { passive: !0, capture: !0 },
  C = new Date(),

  P = 0,
  O = 1 / 0,
  I = 0,

  q = 0,

  H = [],
  _ = {},

  j = {},
  z = function e(n) {
    document.prerendering
      ? T(function () {
          return e(n);
        })
      : "complete" !== document.readyState
      ? addEventListener(
          "load",
          function () {
            return e(n);
          },
          !0
        )
      : setTimeout(n, 0);
  },
  K = [];

window === window.top &&
  (V(
    "performance",
    (o = performance.getEntriesByType("navigation")[0])
      ? {
          ssl: o.requestStart - o.secureConnectionStart,
          dns: o.domainLookupEnd - o.domainLookupStart,
          tcp: o.connectEnd - o.connectStart,
          page_load: o.loadEventStart - o.fetchStart,
          ttfb: o.responseStart,
          server_timing: o.serverTiming,
        }
      : {}
  ),
  [
    function (e, n) {
      (n = n || {}),
        S(
          h(function () {
            var t,
              r = [0.1, 0.25],
              i = f("CLS", 0),
              o = 0,
              a = [],
              u = function (e) {
                e.forEach(function (e) {
                  if (!e.hadRecentInput) {
                    var n = a[0],
                      t = a[a.length - 1];
                    o &&
                    e.startTime - t.startTime < 1e3 &&
                    e.startTime - n.startTime < 5e3
                      ? ((o += e.value), a.push(e))
                      : ((o = e.value), (a = [e]));
                  }
                }),
                  o > i.value && ((i.value = o), (i.entries = a), t());
              },
              s = d("layout-shift", u);
            s &&
              ((t = l(e, i, r, n.reportAllChanges)),
              p(function () {
                u(s.takeRecords()), t(!0);
              }),
              c(function () {
                (o = 0),
                  (i = f("CLS", 0)),
                  (t = l(e, i, r, n.reportAllChanges)),
                  v(function () {
                    return t();
                  });
              }),
              setTimeout(t, 0));
          })
        );
    },
    function (t, i) {
      (i = i || {}),
        T(function () {
          var o,
            a = [100, 300],
            u = E(),
            s = f("FID"),
            v = function (e) {
              e.startTime < u.firstHiddenTime &&
                ((s.value = e.processingStart - e.startTime),
                s.entries.push(e),
                o(!0));
            },
            m = function (e) {
              e.forEach(v);
            },
            g = d("first-input", m);
          (o = l(t, s, a, i.reportAllChanges)),
            g &&
              p(
                h(function () {
                  m(g.takeRecords()), g.disconnect();
                })
              ),
            g &&
              c(function () {
                var c;
                (s = f("FID")),
                  (o = l(t, s, a, i.reportAllChanges)),
                  (r = []),
                  (n = -1),
                  (e = null),
                  k(addEventListener),
                  (c = v),
                  r.push(c),
                  x();
              });
        });
    },
    S,
    function (e, n) {
      (n = n || {}),
        T(function () {
          var t,
            r = [2500, 4e3],
            i = E(),
            o = f("LCP"),
            a = function (e) {
              var n = e[e.length - 1];
              if (n) {
                var r = Math.max(n.startTime - s(), 0);
                r < i.firstHiddenTime &&
                  ((o.value = r), (o.entries = [n]), t());
              }
            },
            u = d("largest-contentful-paint", a);
          if (u) {
            t = l(e, o, r, n.reportAllChanges);
            var m = h(function () {
              j[o.id] ||
                (a(u.takeRecords()), u.disconnect(), (j[o.id] = !0), t(!0));
            });
            ["keydown", "click"].forEach(function (e) {
              addEventListener(e, m, !0);
            }),
              p(m),
              c(function (i) {
                (o = f("LCP")),
                  (t = l(e, o, r, n.reportAllChanges)),
                  v(function () {
                    (o.value = performance.now() - i.timeStamp),
                      (j[o.id] = !0),
                      t(!0);
                  });
              });
          }
        });
    },
    function (e, n) {
      n = n || {};
      var t = [800, 1800],
        r = f("TTFB"),
        i = l(e, r, t, n.reportAllChanges);
      z(function () {
        var o = u();
        if (o) {
          var a = o.responseStart;
          if (a <= 0 || a > performance.now()) return;
          (r.value = Math.max(a - s(), 0)),
            (r.entries = [o]),
            i(!0),
            c(function () {
              (r = f("TTFB", 0)), (i = l(e, r, t, n.reportAllChanges))(!0);
            });
        }
      });
    },
    function (e, n) {
      (n = n || {}),
        T(function () {
          var t = [200, 500];
          W();
          var r,
            i = f("INP"),
            o = function (e) {
              e.forEach(function (e) {
                e.interactionId && R(e),
                  "first-input" === e.entryType &&
                    !H.some(function (n) {
                      return n.entries.some(function (n) {
                        return (
                          e.duration === n.duration &&
                          e.startTime === n.startTime
                        );
                      });
                    }) &&
                    R(e);
              });
              var n,
                t =
                  ((n = Math.min(H.length - 1, Math.floor(B() / 50))), H[n]);
              t &&
                t.latency !== i.value &&
                ((i.value = t.latency), (i.entries = t.entries), r());
            },
            a = d("event", o, {
              durationThreshold: n.durationThreshold || 40,
            });
          (r = l(e, i, t, n.reportAllChanges)),
            a &&
              (a.observe({ type: "first-input", buffered: !0 }),
              p(function () {
                o(a.takeRecords()),
                  i.value < 0 && B() > 0 && ((i.value = 0), (i.entries = [])),
                  r(!0);
              }),
              c(function () {
                (H = []),
                  (q = F()),
                  (i = f("INP")),
                  (r = l(e, i, t, n.reportAllChanges));
              }));
        });
    },
  ].forEach(function (e) {
    e(function (e) {
      var n = e.name,
        t = e.value,
        r = e.rating;
      return V("web-vital", { name: n, value: t, rating: r });
    });
  })),
  addEventListener("visibilitychange", function () {
    "hidden" === document.visibilityState && Q();
  }),
  addEventListener("pagehide", Q);
