export function P(e, t, i, o) {
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
}