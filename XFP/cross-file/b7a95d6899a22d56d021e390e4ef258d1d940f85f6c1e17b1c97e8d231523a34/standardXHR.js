export function standardXHR () {
  try {
    return new window.XMLHttpRequest();
  } catch (e) {}
}