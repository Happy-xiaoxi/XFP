

export function S() {
  return "development" === "production";
}
export function b(t) {
  S() && console.error(t);
}
export function _() {
  S() && console.info.apply(window, Array.prototype.slice.call(arguments));
}