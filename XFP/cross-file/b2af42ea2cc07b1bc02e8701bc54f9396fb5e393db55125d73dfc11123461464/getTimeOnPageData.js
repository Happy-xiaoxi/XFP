export function getTimeOnPageData() {
  try {
    var a = this.Core.getFromLocalStorage(this.SettingsObject.TimeOnPage),
      c = [];
    if (null != a && 0 < a.length)
      try {
        c = DotmetricsJSON.parse(a);
      } catch (b) {
        c = JSON.parse(a);
      }
    return c;
  } catch (b) {
    this.Core.sendScriptError(b);
  }
}