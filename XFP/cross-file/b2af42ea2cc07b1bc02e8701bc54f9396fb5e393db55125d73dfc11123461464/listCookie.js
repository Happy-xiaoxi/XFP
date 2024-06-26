export function listCookie(c) {
  for (
    var a = document.cookie.split(";"), d, f = {}, e = 0, g = a.length;
    e < g;
    ++e
  )
    if (
      ((d = a[e].split("=")),
      (d[0] = d[0].replace(/^\s+|\s+$/, "")),
      !this.isRegExp(c) || c.test(d[0]))
    )
      try {
        f[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
      } catch (k) {}
  return f;
}