function C(t) {
  return void 0 === t;
}
function E(t) {
  return null === t;
}
function k(t) {
  return "string" == typeof t;
}
function O(t) {
  return "function" == typeof t;
}
function j(t) {
  return "[object Array]" === Object.prototype.toString.call(t);
}
function A(t) {
  return "object" == typeof t && !E(t) && !j(t);
}
function x(t) {
  return !t.length;
}

export {
    C,
    E,
    k,
    O,
    j,
    A,
    x
}