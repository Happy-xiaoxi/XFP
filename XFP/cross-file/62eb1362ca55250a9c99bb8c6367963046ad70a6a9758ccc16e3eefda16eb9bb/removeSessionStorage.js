export function removeSessionStorage(t) {
  window.Storage &&
    window.sessionStorage &&
    window.sessionStorage instanceof Storage &&
    sessionStorage.removeItem(t);
}