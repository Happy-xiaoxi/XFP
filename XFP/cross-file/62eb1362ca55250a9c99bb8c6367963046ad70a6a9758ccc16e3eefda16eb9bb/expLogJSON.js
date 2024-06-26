export function expLogJSON(t, e, r) {
  if (!JA) return !1;
  var n = JA && JA.tracker.prot.apply(null, [r]);
  n && (r = n),
    JA.tracker.ngloaderJSON(
      "exp_log.100000",
      { t1: t, t2: e, p0: r || "{}" },
      "toWarriors"
    );
}