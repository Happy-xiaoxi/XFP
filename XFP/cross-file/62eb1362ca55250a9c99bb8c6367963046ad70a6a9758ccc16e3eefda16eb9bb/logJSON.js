export function logJSON(t, e, r) {
  if (!JA) return !1;
  var n = JA && JA.tracker.prot.apply(null, [r]);
  n && (r = n),
    JA.tracker.ngloaderJSON(
      "other.000000",
      { t1: t, t2: e, p0: r || "{}" },
      "toWarriors"
    );
}