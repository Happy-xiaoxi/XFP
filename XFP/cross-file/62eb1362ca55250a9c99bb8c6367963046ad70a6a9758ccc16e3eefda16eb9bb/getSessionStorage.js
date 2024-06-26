export function getSessionStorage(t) {
  try {
    if (
      window.Storage &&
      window.sessionStorage &&
      window.sessionStorage instanceof Storage
    )
      return JSON.parse(sessionStorage.getItem(t));
  } catch (e) {}
}