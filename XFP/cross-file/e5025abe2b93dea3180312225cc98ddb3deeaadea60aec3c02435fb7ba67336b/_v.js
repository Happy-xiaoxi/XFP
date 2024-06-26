export function v(e) {
  try {
    return !!window.indexedDB;
  } catch (t) {
    return e.ERROR;
  }
}