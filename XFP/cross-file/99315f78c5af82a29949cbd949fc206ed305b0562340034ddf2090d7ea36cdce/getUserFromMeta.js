export function getUserFromMeta() {
  var meta = document.querySelector("meta[name=current-user-id]");
  if (meta) {
    return meta.getAttribute("content");
  }
}