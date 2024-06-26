export function canWriteCookies() {
    return canWrite(
    function (e, t, n) {
        return setCookieOnMainDomain(document, e, t, n);
      },
     function (e) {
        return getCookie(document, e);
      },
    function (e) {
        return deleteCookie(document, e);
      }
    );
  }