export function _stdTimezoneOffset() {
  var e = new Date(this.getFullYear(), 0, 1),
    t = new Date(this.getFullYear(), 6, 1);
  return Math.max(e.getTimezoneOffset(), t.getTimezoneOffset());
}