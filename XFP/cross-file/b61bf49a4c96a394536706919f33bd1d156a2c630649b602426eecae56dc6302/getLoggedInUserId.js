export function getLoggedInUserId(appName) {
    var userId = this.getUserFromDefinedConfig();
    if (userId !== undefined) return userId;
    if (appName === "vidio") {
      userId = this.getUserFromVidioCookie();
      if (userId == null) {
        userId = this.getUserFromMeta();
      }
    }
    return userId;
  }