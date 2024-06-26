export function giveSelf() {
    try {
      var a = -1 != navigator.userAgent.indexOf("Safari"),
        b = a || window == window.top ? window : window.top;
      return b.document, b;
    } catch (a) {
      return window;
    }
  }