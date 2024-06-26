export function initInteractionEvents() {
  this.lastInteraction = new Date();
  var a = this;
  this.Core.addEventSimple(document, "mousemove", function () {
    a.emptyTimeBuffer();
  });
  this.Core.addEventSimple(document, "wheel", function () {
    a.emptyTimeBuffer();
  });
  this.Core.addEventSimple(document, "touchend", function () {
    a.emptyTimeBuffer();
  });
}