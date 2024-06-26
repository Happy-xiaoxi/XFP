export function Pe(i, r) {
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
}