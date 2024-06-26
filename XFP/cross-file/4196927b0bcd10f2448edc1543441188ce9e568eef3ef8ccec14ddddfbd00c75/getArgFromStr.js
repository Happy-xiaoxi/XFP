export function getArgFromStr(b, a) {
  let reg = new RegExp("(^|&|[?])" + a + "=([^&#]*)(#|&|$)", "i");
  let r = b.match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}