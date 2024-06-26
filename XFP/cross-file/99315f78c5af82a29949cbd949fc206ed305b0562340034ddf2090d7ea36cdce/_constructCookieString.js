export function _constructCookieString(name, value, ttl, secure, sameSite) {
  var cookieString = name + "=" + escape(value);
  if (ttl) {
    var date = new Date();
    date.setTime(date.getTime() + ttl * 60 * 1e3);
    cookieString += "; expires=" + date.toGMTString();
  }
  cookieString += "; domain=" + this.getCookieDomain();
  if (secure) {
    cookieString += "; Secure";
  }
  if (sameSite) {
    cookieString += "; SameSite=" + sameSite + "";
  }
  cookieString += "; path=/";
  return cookieString;
}