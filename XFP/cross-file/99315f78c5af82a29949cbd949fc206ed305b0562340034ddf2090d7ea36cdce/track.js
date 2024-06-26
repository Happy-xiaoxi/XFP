export function track(name, properties) {
  /* if this.visitId is null, then throw it away (?) */
  if (!this.canStringify) {
    return;
  }
  var event = this.eventBuilder.construct({
    name: name,
    visit_token: this.visitId,
    visitor_token: this.visitorId,
    falcon_version: this.falconVersion,
    properties: properties,
  });
  this.eventQueue.push(event);
  this.saveEventQueue();
  if (!this.config.isSendBatchEvent) {
    setTimeout(
      function () {
        this.trackEvent(event);
      }.bind(this),
      500
    );
  }
  // keep visit alive
  this.visitStorage.setData("ahoy_visit", this.visitId, this.config.visitTtl);
  this.isReady = true;
}