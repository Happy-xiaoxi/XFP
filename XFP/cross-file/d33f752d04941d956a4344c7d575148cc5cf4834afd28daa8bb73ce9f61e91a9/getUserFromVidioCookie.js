export function getUserFromVidioCookie() {
  var cookieJar = new CookieJar();
  return cookieJar.getData("plenty_id");
}