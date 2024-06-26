export function t() {
  var e,
    t = 0;
  "undefined" != typeof navigator.maxTouchPoints
    ? (t = navigator.maxTouchPoints)
    : "undefined" != typeof navigator.msMaxTouchPoints &&
      (t = navigator.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), (e = !0);
  } catch (n) {
    e = !1;
  }
  return [t, e, "ontouchstart" in window];
}