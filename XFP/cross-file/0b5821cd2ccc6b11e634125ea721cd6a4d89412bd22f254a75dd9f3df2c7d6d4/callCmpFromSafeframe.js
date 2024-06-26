export function callCmpFromSafeframe(n, t, e, o) {
    window.$sf.ext.register(1, 1, function (n, a) {
      "cmpReturn" === n ? e(a[t]) : o();
    }),
      window.$sf.ext.cmp(n);
  }