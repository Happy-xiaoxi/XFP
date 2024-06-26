export function loadJs(t, e) {
  var r = document.createElement("script");
  (r.type = "text/javascript"),
    (r.async = !0),
    (r.src = t),
    (r.onload = r.onreadystatechange =
      function () {
        (this.readyState &&
          "loaded" !== this.readyState &&
          "complete" !== this.readyState) ||
          (e && e(), (r.onload = r.onreadystatechange = null));
      });
  var n = document.getElementsByTagName("script");
  n && n[0] && n[0].parentNode.insertBefore(r, n[0]);
}