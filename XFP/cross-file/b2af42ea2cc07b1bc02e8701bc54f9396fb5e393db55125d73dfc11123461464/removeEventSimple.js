export function removeEventSimple(a, b, d) {
  a.removeEventListener
    ? a.removeEventListener(b, d, !1)
    : a.detachEvent && a.detachEvent("on" + b, d);
}