export function filterEventQueue(deliveredEvents) {
  this.eventQueue = this.eventQueue.filter(function (event) {
    return !deliveredEvents.some(function (deliveredEvent) {
      return event.id === deliveredEvent.id;
    });
  });
  this.saveEventQueue();
}