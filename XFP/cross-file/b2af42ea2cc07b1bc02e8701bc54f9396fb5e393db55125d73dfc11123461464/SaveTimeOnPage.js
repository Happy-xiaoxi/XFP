export function SaveTimeOnPage(a) {
  try {
    if (0 != this.Core.lsAvailable() && null != this.EnterPageEventData) {
      for (var c = this.getTimeOnPageData(), b = 0; b < c.length; b++)
        if (c[b].eid == this.EnterPageEventData.EventId) {
          c.splice(b, 1);
          break;
        }
      if (!a) {
        var d = this.createCurrentTimeOnPageObject();
        c.push(d);
      }
      c.length > this.MaxTimeOnPageItemsInLocalStorage &&
        c.splice(0, c.length - this.MaxTimeOnPageItemsInLocalStorage);
      a = {};
      a[this.SettingsObject.TimeOnPage] = DotmetricsJSON.stringify(c);
      this.Core.saveInLocalStorage(a);
    }
  } catch (f) {
    this.Core.sendScriptError(f);
  }
}