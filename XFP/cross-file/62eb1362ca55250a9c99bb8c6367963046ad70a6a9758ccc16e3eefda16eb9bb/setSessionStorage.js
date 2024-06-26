export function setSessionStorage(t, r) {
  try {
    window.Storage &&
      window.sessionStorage &&
      window.sessionStorage instanceof Storage &&
      sessionStorage.setItem(t, JSON.stringify(r));
  } catch (e) {}
}