export function join(t) {
  if (t instanceof Array) {
    for (var e = "", r = 0, n = t.length; r < n; r++)
      e += t[r] + (r == n - 1 ? "" : "|||");
    return e;
  }
  return t;
}