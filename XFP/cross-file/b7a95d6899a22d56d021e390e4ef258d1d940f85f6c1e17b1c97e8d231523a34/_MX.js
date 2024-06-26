export function X(i, o) {
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
}