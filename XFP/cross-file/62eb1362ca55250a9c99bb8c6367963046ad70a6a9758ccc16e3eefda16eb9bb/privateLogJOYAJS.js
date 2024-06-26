export function privateLogJOYAJS(t, e) {
  var r = Array.prototype.slice.call(arguments);
  (r = r && r.slice(2)),
    JA &&
      JA.tracker.ngloader("other.000000", {
        t1: t,
        t2: e,
        p0: encodeURIComponent(JA.util.join(r)),
      });
}