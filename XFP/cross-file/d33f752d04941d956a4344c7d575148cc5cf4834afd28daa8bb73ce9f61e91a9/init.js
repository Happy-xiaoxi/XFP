export function init() {
  var falconVersion = this._documentCurrentScriptSource();
  if (falconVersion) {
    this.falconVersion = falconVersion.substring(
      falconVersion.indexOf("ahoy-"),
      falconVersion.indexOf(".js")
    );
  } else {
    this.falconVersion = "unknown";
  }
  if (this.isVisitIdOrVisitorIdEmpty()) {
    this.setupVisitIdAndVisitorId();
    this.prepareAndSendVisitsData();
  } else {
    this.refreshVisitId();
    this.setReady();
  }
  this.consumeAllEventsInQueues();
}