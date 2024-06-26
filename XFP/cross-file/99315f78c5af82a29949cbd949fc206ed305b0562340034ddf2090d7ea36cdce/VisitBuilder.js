export function VisitBuilder(models) {
  this._appName = models.getAppName();
  this._userId = models.getLoggedInUserId(this._appName);
  this._platform = models.getPlatform();
  this.construct = function (attributes) {
    return {
      visit_token: attributes.visit_token,
      visitor_token: attributes.visitor_token,
      user_id: this._userId,
      app_name: this._appName,
      platform: this._platform,
      landing_page: window.location.href,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      referrer: document.referrer.length > 0 ? document.referrer : undefined,
      falcon_version: attributes.falcon_version,
    };
  };
}