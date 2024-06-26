export function c(e) {
  for (var t = !1, n = 0, a = e.plugins.sortPluginsFor.length; n < a; n++) {
    var r = e.plugins.sortPluginsFor[n];
    if (navigator.userAgent.match(r)) {
      t = !0;
      break;
    }
  }
  return t;
}