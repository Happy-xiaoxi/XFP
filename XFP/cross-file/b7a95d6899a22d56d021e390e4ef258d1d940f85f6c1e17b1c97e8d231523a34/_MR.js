export function R(i, o) {
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
}