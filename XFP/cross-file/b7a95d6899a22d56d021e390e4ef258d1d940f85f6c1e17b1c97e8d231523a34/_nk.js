export function k(e, t) {
  if (t) return !0;
  for (
    var n = [
        { name: "PayPal Gifts", appId: "paypal-gifts", rampPercent: 100 },
      ],
      i = e.configuration.appId,
      o = e.configuration.correlationId,
      a = 0;
    a < n.length;
    a++
  )
    if (n[a].appId === i) {
      var r = n[a].rampPercent || 0,
        c = Math.abs(D(o)) % 100;
      return 0 <= c && c < r;
    }
  return !1;
}