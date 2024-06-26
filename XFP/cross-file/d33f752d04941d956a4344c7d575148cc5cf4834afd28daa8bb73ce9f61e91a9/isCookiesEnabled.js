export function isCookiesEnabled() {
  this.setData("is_cookie_active", "true", 5);
  var someCookies = this.getData("is_cookie_active");
  return someCookies == "true";
}