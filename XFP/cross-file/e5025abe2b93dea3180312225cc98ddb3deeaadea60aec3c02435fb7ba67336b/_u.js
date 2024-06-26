export function u(e, t) {
  if (Array.prototype.forEach && e.forEach === Array.prototype.forEach)
    e.forEach(t);
  else if (e.length === +e.length)
    for (var n = 0, a = e.length; n < a; n++) t(e[n], n, e);
  else for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e);
}