export function N(e, t, n) {
  void 0 !== e.removeEventListener
    ? e.removeEventListener(t, n, !1)
    : void 0 !== e.detachEvent && e.detachEvent("on" + t, n);
}