export function T(e) {
  try {
    return !!window.sessionStorage;
  } catch (t) {
    return e.ERROR;
  }
}