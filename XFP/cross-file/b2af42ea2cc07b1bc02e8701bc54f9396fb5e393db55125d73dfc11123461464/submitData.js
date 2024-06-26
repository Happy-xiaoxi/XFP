export function submitData(a) {
  function c() {
    try {
      b.CreateIframe();
      b.formInput.value = DotmetricsJSON.stringify(f);
      b.form.submit();
      var a = b.iFrameHolderDiv;
      setTimeout(function () {
        document.body.removeChild(a);
      }, 5e3);
    } catch (g) {
      b.Core.sendScriptError(g);
    }
  }
  var b = this;
  this.Core.formPostCount++;
  if (!(this.Core.formPostCount > this.Core.callLimit)) {
    var d = new Date().getTimezoneOffset(),
      f = {
        id: this.SettingsObject.SiteSectionId,
        cd: { d: this.DeviceId, u: this.UserId, dg: this.DeviceGuidId },
        di: null,
        ds: 0,
        dsl: 0,
        url: window.location.href,
        rurl: window.document.referrer,
        pvid: this.SettingsObject.PVID,
        dc: this.domainCookie,
        tzOffset: d,
      };
    this.panel &&
      ((f.hhid = this.panelHouseholdId), (f.uid = this.panelUserId));
    if (a.deviceInfo)
      if (this.Core.clientInfo)
        (f.di = this.Core.clientInfo),
          (f.expFP = this.Core.experimentalFP),
          (f.timingFP = this.Core.clientInfoTimingData);
      else {
        this.Core.createClientInfo(function () {
          b.submitData(a);
        });
        return;
      }
    0 < a.pings
      ? this.measurePingTimes(a.pings, function (a) {
          f.ds = a.DeviceSync;
          f.dsl = a.DeviceSyncLag;
          c();
        })
      : c();
  }
}