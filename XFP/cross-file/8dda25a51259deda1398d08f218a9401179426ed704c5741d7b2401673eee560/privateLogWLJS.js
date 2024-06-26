export function privateLogWLJS(e, t) {
  var r = Array.prototype.slice.call(arguments);
  (r = r && r.slice(2)),
    JA &&
      JA.tracker.ngloader("other.000000", {
        t1: e,
        t2: t,
        p0: encodeURIComponent(JA.util.join(r)),
      });
}