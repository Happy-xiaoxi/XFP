export function createCurrentTimeOnPageObject() {
  return {
    cd: this.EnterPageEventData.CreationDate,
    eid: this.EnterPageEventData.EventId,
    id: this.EnterPageEventData.SiteSectionId,
    sop: this.TimeOnPage,
    vl: this.getVideoData(),
    url: window.location.href,
    rurl: window.document.referrer,
    pvid: this.SettingsObject.PVID,
    dc: this.domainCookie,
  };
}