export function isObject(t) {
  return "[object Object]" === Object.prototype.toString.call(t);
}