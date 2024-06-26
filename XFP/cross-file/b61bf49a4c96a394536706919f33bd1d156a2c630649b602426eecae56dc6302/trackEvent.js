export function trackEvent(event) {
  var callback = function () {
    this.emptySpecificEventQueue(event);
  }.bind(this);
  if (this.isReady) {
    this.helpers.post(this.config.eventsUrl, JSON.stringify(event), callback);
  } else {
    this.queue.push(
      function () {
        this.helpers.post(
          this.config.eventsUrl,
          JSON.stringify(event),
          callback
        );
      }.bind(this)
    );
  }
}