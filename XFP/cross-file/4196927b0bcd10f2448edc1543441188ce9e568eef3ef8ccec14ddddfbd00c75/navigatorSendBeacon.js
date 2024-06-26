export function navigatorSendBeacon(a, b) {
  let logLine = JSON.stringify(b);
  if (a.indexOf("//") === 0) {
    navigator.sendBeacon(window.location.protocol + a, logLine);
  } else {
    navigator.sendBeacon(window.location.protocol + "//" + a, logLine);
  }
}