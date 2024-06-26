export function z() {
  try {
    return window.history && "pushState" in window.history;
  } catch (t) {
    return !1;
  }
}