export function setStorage(e, t) {
  window.Storage &&
    window.localStorage &&
    window.localStorage instanceof Storage &&
    localStorage.setItem(e, JSON.stringify(t));
}