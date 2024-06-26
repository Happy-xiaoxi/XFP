export function activeXHR () {
  try {
    return new window.ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {}
}