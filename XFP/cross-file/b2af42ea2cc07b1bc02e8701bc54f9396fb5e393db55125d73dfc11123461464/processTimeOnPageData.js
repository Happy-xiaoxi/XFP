export function processTimeOnPageData() {
  try {
    if (0 == this.Core.lsAvailable()) return null;
    for (
      var a = [], c = this.getTimeOnPageData(), b = new Date(), d = 0;
      d < c.length;
      d++
    )
      try {
        var f = c[d],
          e = new Date(f.cd);
        864e5 > b.getTime() - e.getTime() && a.push(f);
      } catch (g) {}
    0 == a.length && (a = null);
    this.Core.removeFromLocalStorage(this.SettingsObject.TimeOnPage);
    return a;
  } catch (g) {
    this.Core.sendScriptError(g);
  }
}