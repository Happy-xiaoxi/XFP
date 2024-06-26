export function getNetType() {
  let connection = navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection || { type: "unknown" };
  return connection.type || connection.effectiveType || "unknown";
}