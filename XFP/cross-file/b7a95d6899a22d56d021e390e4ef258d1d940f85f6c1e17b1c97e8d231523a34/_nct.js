export function ct(e, t, i) {
  var o = performance.now(),
    a = document.createElement("script");
  (a.type = "text/javascript"),
    (a.async = !0),
    (a.onload = function () {
      var n = performance.now();
      if ("undefined" != typeof bf && "undefined" != typeof tt) {
        var a = st(bf, tt, n - o, e);
        t.postMessage(JSON.stringify(a), i);
      }
    }),
    (a.src = n.BROWSER_FEATURES_URL),
    document.getElementsByTagName("head")[0].appendChild(a);
}