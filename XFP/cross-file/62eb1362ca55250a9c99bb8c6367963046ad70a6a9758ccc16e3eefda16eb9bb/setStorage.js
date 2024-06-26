export function setStorage(t, e) {
  window.Storage &&
    window.localStorage &&
    window.localStorage instanceof Storage &&
    localStorage.setItem(t, JSON.stringify(e));
}