export function SendTimeOnPageBeacon() {
  if (this.LastSentTimeOnPage == this.TimeOnPage) return !0;
  if (navigator.sendBeacon && this.EnterPageEventData) {
    var a = this.createCurrentTimeOnPageObject(),
      c = this.getTimeOnPageDataTemplate();
    c.ep.push(a);
    this.LastSentTimeOnPage = this.TimeOnPage;
    return this.Core.performSendBeacon(this.SettingsObject.BeaconUrl, c);
  }
  return !1;
}