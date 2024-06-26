export function sendScriptError(c) {
  if (!a) {
    var b = {};
    c && c.name && (b.name = c.name);
    c && c.message && (b.message = c.message);
    c && c.stack && (b.stack = c.stack);
    a = !0;
    this.performAjaxPost(this.SettingsObject.ErrorEventUrl, {
      type: "script",
      details: { pvid: this.SettingsObject.PVID },
      error: b,
      sectionId: this.SettingsObject.SiteSectionId,
      pageUrl: window.location.href,
    });
  }
}