export function m(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
  return i;
}