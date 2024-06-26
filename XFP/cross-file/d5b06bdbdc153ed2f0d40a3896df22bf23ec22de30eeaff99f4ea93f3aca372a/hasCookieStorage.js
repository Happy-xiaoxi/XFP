export function hasCookieStorage(e) {
    try {
      return void 0 !== e.cookie;
    } catch (e) {
      return !1;
    }
  }