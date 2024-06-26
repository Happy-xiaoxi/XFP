export function postMessage(a, b) {
  try {
    "undefined" != typeof b
      ? b.postMessage(a, "*")
      : window.postMessage(a, "*");
  } catch (d) {}
}