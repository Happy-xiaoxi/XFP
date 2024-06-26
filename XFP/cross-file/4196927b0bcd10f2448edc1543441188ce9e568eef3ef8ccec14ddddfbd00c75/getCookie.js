export function getCookie(a) {
  let arr,
    reg = new RegExp("(^| )" + a + "=([^;]*)(;|$)");
  let result = document.cookie.match(reg);
  if (result) {
    return decodeURIComponent(result[2]);
  } else {
    return null;
  }
}