export function performSendBeacon(a, b) {
  this.sendMessageToExtension({
    target: "dotmetrics-extension",
    type: "beacon",
    url: a,
    data: b,
  });
  b = this.encode(DotmetricsJSON.stringify(b));
  b = encodeURIComponent(b);
  var c = new Date().getTime();
  b = new Blob(["v=" + b + "&r=" + c], {
    type: "application/x-www-form-urlencoded",
  });
  try {
    return y.boundBeacon(a, b);
  } catch (f) {
    return !1;
  }
}