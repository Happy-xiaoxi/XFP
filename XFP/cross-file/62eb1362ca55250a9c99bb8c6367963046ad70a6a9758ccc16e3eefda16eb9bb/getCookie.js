export function getCookie(t) {
  var e,
    r = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
  return (e = document.cookie.match(r)) ? unescape(e[2]) : "";
}