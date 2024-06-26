export function s(e, a) {
  var r = [];
  return null == e
    ? r
    : Array.prototype.map && e.map === Array.prototype.map
    ? e.map(a)
    : (u(e, function (e, t, n) {
        r.push(a(e, t, n));
      }),
      r);
}