export function addArgToUrl(b, d, a) {
  if (a == undefined || a == null) {
    a = "";
  }
  if (b.indexOf("?") !== -1 || b.indexOf("=") !== -1) {
    return b + "&" + d + "=" + a;
  } else {
    return b + "?" + d + "=" + a;
  }
}