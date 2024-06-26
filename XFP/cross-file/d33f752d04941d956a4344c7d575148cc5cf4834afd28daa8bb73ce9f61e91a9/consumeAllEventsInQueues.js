export function consumeAllEventsInQueues() {
  try {
    this.eventQueue = JSON.parse(
      this.eventStorage.getData("ahoy_events") || "[]"
    );
  } catch (e) {
    // do nothing
  }
  this.consumeEventQueue();
  this.consumeAhoyQueue();
  this.visitId = this.visitStorage.getData("ahoy_visit")
    ? this.visitStorage.getData("ahoy_visit")
    : window.ahoyUserDefinedConfig.visitId;
}