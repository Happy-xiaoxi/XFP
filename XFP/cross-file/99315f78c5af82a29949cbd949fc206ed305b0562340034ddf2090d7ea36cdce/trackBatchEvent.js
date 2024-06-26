export function trackBatchEvent() {
  if (this.eventQueue.length !== 0) {
    var eventsToDeliver = this.eventQueue.slice();
    this.helpers.post(
      this.config.batchEventsUrl,
      JSON.stringify(eventsToDeliver),
      this.filterEventQueue.bind(this, eventsToDeliver)
    );
  }
}