export function setReady() {
  var queue = this.queue || window.ahoy.queue;
  var callback = queue.shift();
  while (callback) {
    callback();
    callback = queue.shift();
  }
  this.isReady = true;
}