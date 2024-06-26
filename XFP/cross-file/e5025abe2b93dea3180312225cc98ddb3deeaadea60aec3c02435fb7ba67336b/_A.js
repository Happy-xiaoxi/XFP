export function A(e) {
  try {
    return !!window.localStorage;
  } catch (t) {
    return e.ERROR;
  }
}