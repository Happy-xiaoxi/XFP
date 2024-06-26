export function lt(e, t) {
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
}