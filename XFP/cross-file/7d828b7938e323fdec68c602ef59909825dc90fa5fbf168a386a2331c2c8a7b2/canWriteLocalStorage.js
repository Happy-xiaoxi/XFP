export function canWriteLocalStorage() {
    return canWrite(
      function (e, t, n) {
        return localStorage.setItem(e, t);
      },
      function (e) {
        return localStorage.getItem(e);
      },
      function (e) {
        return localStorage.removeItem(e);
      }
    );
  }