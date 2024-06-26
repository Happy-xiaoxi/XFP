export function HandleJsonp(a) {
  try {
    var c = this;
    c.Core.sendMessageToExtension({
      target: "dotmetrics-extension",
      type: "jsonpResponse",
      data: a,
      pvid: this.SettingsObject.PVID,
      dc: this.domainCookie,
    });
    this.UserId = a.UserId;
    this.DeviceId = a.DeviceId;
    this.DeviceGuidId = a.DeviceGuidId;
    window.DotMetricsObj.DeviceId = this.DeviceId;
    window.DotMetricsObj.UserId = this.UserId;
    this.deviceInfoSent && ((a.SendDeviceInfo = !1), (a.Ping = 0));
    if (this.firstLoadDone) this.processActions(a);
    else {
      this.firstLoadDone = !0;
      this.EnterPageEventData = a.EnterPageEventData;
      window.DotMetricsObj.firstLoadDone = !0;
      window.DotMetricsObj.EnterPageEventData = a.EnterPageEventData;
      var b = { deviceInfo: !1, pings: 0 };
      1 == a.SendDeviceInfo &&
        0 == this.deviceInfoSent &&
        ((b.deviceInfo = !0),
        (a.SendDeviceInfo = !1),
        (this.deviceInfoSent = !0));
      a.Ping && 0 < a.Ping && ((b.pings = a.Ping), (a.Ping = !1));
      setTimeout(function () {
        try {
          (b.deviceInfo || b.pings) && c.submitData(b);
          var d = c.processTimeOnPageData();
          c.Core.setCookie(c.SettingsObject.TimeOnPage, null, 0);
          if (d) {
            var f = c.getTimeOnPageDataTemplate();
            f.ep = d;
            c.Core.performAjaxPost(c.SettingsObject.BeaconUrl, f);
          }
          c.processActions(a);
        } catch (e) {
          c.Core.sendScriptError(e);
        }
      }, 1e3 * Math.random() + 500);
    }
  } catch (d) {
    this.Core.sendScriptError(d);
  }
}