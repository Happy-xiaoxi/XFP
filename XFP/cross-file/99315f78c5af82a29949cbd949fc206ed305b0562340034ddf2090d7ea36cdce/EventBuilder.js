export function EventBuilder(helpers, models) {
  this._pageUuid = helpers.generateUUID();
  this._appName = models.getAppName();
  this._platform = models.getPlatform();
  this._userId = null;
  this._getDefaultProperties = function (falcon_version) {
    return {
      app_name: this._appName,
      login:
        this._userId !== "" &&
        this._userId !== null &&
        this._userId !== undefined,
      platform: this._platform,
      uuid: this._pageUuid,
      falcon_version: falcon_version,
      ttclid: cookieJar.getData("ttclid"),
      ttp: cookieJar.getData("_ttp"),
      user_active_subscription: this.getUserActiveSubscription(),
    };
  };
  this.getUserActiveSubscription = function () {
    if (!window.currentUser) return false;
    return !!window.currentUser.has_active_subscription;
  };
  this.construct = function (attributes) {
    this._userId = models.getLoggedInUserId(this._appName);
    var eventId = helpers.generateUUID();
    var defaultProperties = this._getDefaultProperties(
      attributes.falcon_version
    );
    properties = helpers.extend(defaultProperties, attributes.properties);
    return {
      id: eventId,
      visit_token: attributes.visit_token,
      visitor_token: attributes.visitor_token,
      user_id: this._userId,
      name: attributes.name,
      properties: properties,
      time: new Date(Date.now()).toISOString(),
    };
  };
}