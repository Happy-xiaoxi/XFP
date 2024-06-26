export function $() {
  try {
    return "https:" === window.location.protocol;
  } catch (t) {
    return !1;
  }
}