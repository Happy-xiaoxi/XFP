export function sendMessageToExtension(a, b) {
  window.sendMessageToDotmetricsExtension &&
    window.sendMessageToDotmetricsExtension(a, b);
}