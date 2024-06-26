export function at(n, i, o) {
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
}