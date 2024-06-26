export function logger(a) {
  if (
    typeof console !== "undefined" &&
    console &&
    console.warn &&
    a &&
    a.length > 0
  ) {
    console.warn(a);
  }
}