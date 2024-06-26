export function addEventSimple(a, b, d) {
  a.addEventListener
    ? a.addEventListener(b, d, !1)
    : a.attachEvent && a.attachEvent("on" + b, d);
}