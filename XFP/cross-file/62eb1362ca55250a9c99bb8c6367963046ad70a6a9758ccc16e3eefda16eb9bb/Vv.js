export function Vv(t) {
  for (
    var e = [],
      n = r.cookie.split(";"),
      i = RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$"),
      o = 0;
    o < n[a];
    o++
  ) {
    var s = n[o].match(i);
    s && e.push(s[1]);
  }
  return e;
}