export function getFromLocalStorage(a) {
  return this.lsAvailable() ? window.localStorage.getItem(a + "") : null;
}