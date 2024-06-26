export function Models() {
  this.getAppName = function () {
    var domainSegments = this.hostname().split(".");
    return domainSegments.length > 2
      ? domainSegments.reverse()[1]
      : domainSegments[0];
  };
  this.getLoggedInUserId = function (appName) {
    var userId = this.getUserFromDefinedConfig();
    if (userId !== undefined) return userId;
    if (appName === "vidio") {
      userId = this.getUserFromVidioCookie();
      if (userId == null) {
        userId = this.getUserFromMeta();
      }
    }
    return userId;
  };
  this.getUserFromDefinedConfig = function () {
    return window.ahoyUserDefinedConfig.userId;
  };
  this.getUserFromVidioCookie = function () {
    var cookieJar = new CookieJar();
    return cookieJar.getData("plenty_id");
  };
  this.getUserFromMeta = function () {
    var meta = document.querySelector("meta[name=current-user-id]");
    if (meta) {
      return meta.getAttribute("content");
    }
  };
  this.getUserFromCookie = function () {
    var cookieJar = new CookieJar();
    var serializedCurrentUser = cookieJar.getData("user");
    try {
      var currentUser = JSON.parse(decodeURIComponent(serializedCurrentUser));
      return currentUser.id;
    } catch (message) {}
  };
  this.getPlatform = function () {
    var hostname = this.hostname();
    if (
      hostname.indexOf("m.vidio.com") > -1 ||
      hostname.indexOf("m.staging.vidio.com") > -1 ||
      hostname.indexOf("m.int.vidio.com") > -1
    ) {
      return "web-mobile";
    } else if (
      hostname.indexOf("www.vidio.com") > -1 ||
      hostname.indexOf("staging.vidio.com") > -1 ||
      hostname.indexOf("int.vidio.com") > -1
    ) {
      return "web-desktop";
    } else {
      return "unknown";
    }
  };
  this.hostname = function () {
    return window.location.hostname;
  };
}