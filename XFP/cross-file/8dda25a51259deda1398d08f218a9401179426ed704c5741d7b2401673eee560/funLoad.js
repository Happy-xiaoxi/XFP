export function funLoad() {
  var e = getCookie("pin");
  null != e && e.length > 0 && setCookieMills("rpin", e, 2592e5);
}