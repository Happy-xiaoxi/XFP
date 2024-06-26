export function O(e, t, n) {
  void 0 !== e.addEventListener
    ? e.addEventListener(t, n, !1)
    : void 0 !== e.attachEvent && e.attachEvent("on" + t, n);
}