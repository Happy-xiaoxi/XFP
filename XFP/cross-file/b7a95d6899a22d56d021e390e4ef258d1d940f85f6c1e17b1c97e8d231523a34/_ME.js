export function E(e, t, i, o) {
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
}