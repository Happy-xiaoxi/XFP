export function getTimeOnPageDataTemplate() {
  var a = new Date().getTimezoneOffset();
  a = {
    id: this.SettingsObject.SiteSectionId,
    cd: { d: this.DeviceId, u: this.UserId, dg: this.DeviceGuidId },
    ep: [],
    tzOffset: a,
  };
  this.panel &&
    ((a.hhid = this.panelHouseholdId), (a.uid = this.panelUserId));
  return a;
}