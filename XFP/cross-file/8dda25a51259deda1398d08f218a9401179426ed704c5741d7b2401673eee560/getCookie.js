export function getCookie(e) {
    var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
    return null != t ? unescape(t[2]) : null;
  }