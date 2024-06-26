export function Fe(o) {
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
}