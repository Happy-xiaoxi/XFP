export function createStartData() {
  var a = new Date().getTimezoneOffset();
  a = {
    id: this.SettingsObject.SiteSectionId,
    fl: !0,
    dom: window.location.hostname,
    lso: null,
    url: window.location.href,
    rurl: window.document.referrer,
    pvid: this.SettingsObject.PVID,
    dc: this.domainCookie,
    tzOffset: a,
  };
  this.panel &&
    ((a.hhid = this.panelHouseholdId), (a.uid = this.panelUserId));
  var c = "DM_SitId" + this.SettingsObject.SiteId,
    b = "DM_SitIdT" + this.SettingsObject.SiteId,
    d = c + "SecId" + this.SettingsObject.SiteSectionId,
    f = c + "SecIdT" + this.SettingsObject.SiteSectionId,
    e = this.Core.getFromLocalStorage("DotmetricsSiteData");
  try {
    e = e ? DotmetricsJSON.parse(e) : {};
  } catch (n) {
    e = {};
  }
  var g = new Date().getTime() - 18e5;
  for (k in e) e[k] < g && delete e[k];
  this.Core.hasCookie(c) && e.hasOwnProperty(b)
    ? (a.oss = !1)
    : (this.Core.setCookie(c, "1"), (a.oss = !0));
  this.Core.hasCookie(d) && e.hasOwnProperty(f)
    ? (a.oses = !1)
    : (this.Core.setCookie(d, "1"), (a.oses = !0));
  var k = new Date().getTime();
  e[b] = k;
  e[f] = k;
  b = { DotmetricsSiteData: JSON.stringify(e) };
  this.Core.saveInLocalStorage(b);
  return a;
}