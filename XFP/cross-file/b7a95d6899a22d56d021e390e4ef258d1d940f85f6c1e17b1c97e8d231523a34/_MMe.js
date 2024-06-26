export function Me(i) {
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
}