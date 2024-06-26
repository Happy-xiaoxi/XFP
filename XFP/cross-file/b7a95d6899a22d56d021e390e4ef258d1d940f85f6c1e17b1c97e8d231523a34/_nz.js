export function z(e, t, n) {
  var i = document.createElement("img"),
    o =
      e +
      "?f=" +
      t.configuration.correlationId +
      "&s=" +
      encodeURIComponent(t.configuration.appId);
  t.configuration.fp &&
    (o += "&fp=" + encodeURIComponent(JSON.stringify(t.configuration.fp))),
    void 0 !== n && (o += "&d=" + encodeURIComponent(JSON.stringify(n))),
    (i.src = o);
}