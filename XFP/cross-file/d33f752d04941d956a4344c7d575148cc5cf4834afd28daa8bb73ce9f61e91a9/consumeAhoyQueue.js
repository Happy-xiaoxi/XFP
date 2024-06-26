export function consumeAhoyQueue() {
  if (window.ahoy_q !== undefined) {
    for (var c = 0; c < window.ahoy_q.length; c++) {
      var name = window.ahoy_q[c][0];
      var properties = window.ahoy_q[c][1];
      this.track(name, properties);
    }
    window.ahoy_q = [];
  }
}