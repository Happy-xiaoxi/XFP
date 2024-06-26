export function _str_find(t, e) {
  if ("string" == typeof t) {
    var r = e + "=",
      n = t.indexOf(r);
    if (-1 !== n) {
      var i = t.indexOf("&", n);
      return -1 !== i
        ? t.substring(n + r.length, i)
        : t.substring(n + r.length);
    }
  }
}