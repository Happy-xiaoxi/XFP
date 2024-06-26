export function Start() {
  var a = this;
  try {
    0 <= navigator.userAgent.indexOf("FBIA") && (a.fbInstantArticle = !0);
    document.addEventListener("visibilitychange", function () {
      try {
        if ("hidden" === document.visibilityState) {
          a.stopIntervalFunctions();
          a.emptyTimeBuffer();
          var b = a.SendTimeOnPageBeacon();
          a.SaveTimeOnPage(b);
        } else "visible" === document.visibilityState && a.startIntervalFunctions();
      } catch (d) {
        a.Core.sendScriptError(d);
      }
    });
    a.startIntervalFunctions();
    this.initPanelElements();
    this.initInteractionEvents();
    this.listenForExtensionMessages();
    var c = this.createStartData();
    a.Core.sendData(this.SettingsObject.DataUrl, c);
    if (window.dm) this.onAjaxDataUpdate();
    1 == this.SettingsObject.VideoTrackingEnabled && this.trackVideos();
  } catch (b) {
    a.Core.sendScriptError(b);
  }
}