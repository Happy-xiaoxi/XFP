export function sendVideoError(a, c, b) {
  if (!w) {
    w = !0;
    var d = {};
    b && b.name && (d.name = b.name);
    b && b.message && (d.message = b.message);
    b && b.stack && (d.stack = b.stack);
    this.Core.performAjaxPost(this.SettingsObject.ErrorEventUrl, {
      type: "video",
      details: { player: a, playerVersion: c },
      error: d,
      sectionId: this.SettingsObject.SiteSectionId,
      pageUrl: window.location.href,
    });
  }
}