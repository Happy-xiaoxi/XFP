export function sendPostMessageIFrame(a, b) {
    var c = location.protocol + "//tsyndicate.com";
    a.postMessage(b, c);
  }