export function onAjaxDataUpdate() {
  try {
    var a = window.dm,
      c = this;
    null == this.ajaxTimer &&
      "undefined" != typeof a &&
      "undefined" != typeof a.AjaxData &&
      0 < a.AjaxData.length &&
      (this.ajaxTimer = setTimeout(function () {
        try {
          c.cloneAjaxDataForStressTestScript(a.AjaxData);
          var b = c.prepareAjaxData(a.AjaxData);
          a.AjaxData.length = 0;
          c.ajaxTimer = null;
          c.Core.performAjaxPost(c.SettingsObject.AjaxEventUrl, b);
        } catch (d) {
          c.Core.sendScriptError(d);
        }
      }, this.SettingsObject.AjaxEventTimeout));
  } catch (b) {
    this.Core.sendScriptError(b);
  }
}