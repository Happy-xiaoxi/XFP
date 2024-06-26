export function getUserFromCookie() {
  var cookieJar = new CookieJar();
  var serializedCurrentUser = cookieJar.getData("user");
  try {
    var currentUser = JSON.parse(decodeURIComponent(serializedCurrentUser));
    return currentUser.id;
  } catch (message) {}
}