export function isRegExp(c) {
  return "[object RegExp]" == Object.prototype.toString.call(c);
}