export function log(e, t) {
  var r = Array.prototype.slice.call(arguments),
    n = r;
  (r = r && r.slice(2)),
    JA &&
      JA.tracker.ngloader("other.000000", {
        t1: e,
        t2: t,
        p0: encodeURIComponent(JA.util.join(r)),
      }),
    JA &&
      JA.tracker.isCanPrey() &&
      JA &&
      JA.tracker.ngloader("other.000000", {
        t1: "logservice_check",
        t2: "wl",
        p0: encodeURIComponent(JA.util.join(n)),
      });
}