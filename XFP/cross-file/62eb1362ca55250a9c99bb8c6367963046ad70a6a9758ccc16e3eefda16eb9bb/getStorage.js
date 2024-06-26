export function getStorage(t) {
  if (
    window.Storage &&
    window.localStorage &&
    window.localStorage instanceof Storage
  )
    return JSON.parse(localStorage.getItem(t));
}