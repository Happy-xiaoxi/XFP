export function prepareAjaxData(a) {
  var c = new Date().getTimezoneOffset(),
    b = {
      siteSectionId: this.SettingsObject.SiteSectionId,
      pvid: this.SettingsObject.PVID,
      dc: this.domainCookie,
      domain: window.location.hostname,
      events: [],
      tzOffset: c,
    };
  this.panel &&
    ((b.hhid = this.panelHouseholdId), (b.uid = this.panelUserId));
  var d = this;
  a.forEach(function (a) {
    var c = {};
    c.eventType = a.et ? a.et : "pageview";
    c.eventData = a.d ? a.d : null;
    c.eventSiteSectionId = a.ssid ? a.ssid : d.SettingsObject.SiteSectionId;
    isNaN(c.eventSiteSectionId) &&
      ((c.eventTag = c.eventSiteSectionId), delete c.eventSiteSectionId);
    c.url = a.url ? a.url : window.location.href;
    b.events.push(c);
  });
  return b;
}