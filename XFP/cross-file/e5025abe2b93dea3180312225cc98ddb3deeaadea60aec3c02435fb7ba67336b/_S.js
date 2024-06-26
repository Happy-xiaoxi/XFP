export function S(e) {
  return navigator.hardwareConcurrency
    ? navigator.hardwareConcurrency
    : e.NOT_AVAILABLE;
}