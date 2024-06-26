export function listenForExtensionMessages() {
  var a = this;
  window.addEventListener("message", function (c) {
    c.data.source &&
      "dotmetrics-extension" == c.data.source &&
      c.data.type &&
      a.handleExtensionRequest(c.data.type, c.source);
  });
}