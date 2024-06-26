export function hasAXO() {
  return !!window.ActiveXObject || "ActiveXObject" in window;
}