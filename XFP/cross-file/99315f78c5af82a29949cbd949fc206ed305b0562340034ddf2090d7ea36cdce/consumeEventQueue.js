export function consumeEventQueue() {
  if (this.config.isSendBatchEvent) {
    this.trackBatchEvent();
    this.batchIntervalId = setInterval(
      this.trackBatchEvent.bind(this),
      this.config.batchInterval
    );
  } else {
    for (var i = 0; i < this.eventQueue.length; i++) {
      this.trackEvent(this.eventQueue[i]);
    }
  }
}