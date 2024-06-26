export function removeFromLocalStorage(a) {
  return this.lsAvailable() ? window.localStorage.removeItem(a + "") : null;
}