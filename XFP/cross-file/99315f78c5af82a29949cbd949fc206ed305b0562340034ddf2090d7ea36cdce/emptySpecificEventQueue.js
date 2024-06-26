export function emptySpecificEventQueue(event) {
  if (this.eventQueue !== undefined) {
    for (var i = 0; i < this.eventQueue.length; i++) {
      if (this.eventQueue[i].id == event.id) {
        this.eventQueue.splice(i, 1);
        break;
      }
    }
    this.saveEventQueue();
  }
}