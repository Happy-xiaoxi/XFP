export function addQueryString(C, D, B) {
  if (B == undefined || B == null) {
    B = "";
  }
  if (C.indexOf("?") !== -1 || C.indexOf("=") !== -1) {
    return C + "&" + D + "=" + B;
  } else {
    return C + "?" + D + "=" + B;
  }
}