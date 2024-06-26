export function getStorage(e) {
  if (
    window.Storage &&
    window.localStorage &&
    window.localStorage instanceof Storage
  )
    return JSON.parse(localStorage.getItem(e));
}