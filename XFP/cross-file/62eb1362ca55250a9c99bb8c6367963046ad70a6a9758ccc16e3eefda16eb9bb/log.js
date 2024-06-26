export function log(t, e) {
  var r = Array.prototype.slice.call(arguments);
  r = r && r.slice(2);
  var n = JA && JA.tracker.prot.apply(null, r);
  n && (r[0] = n),
    JA &&
      JA.tracker.ngloader("other.000000", {
        t1: t,
        t2: e,
        p0: encodeURIComponent(JA.util.join(r)),
      });
}