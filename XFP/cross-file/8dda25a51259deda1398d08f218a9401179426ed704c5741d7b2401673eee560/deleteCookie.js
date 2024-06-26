export function deleteCookie(e) {
    null != getCookie(e) && setCookieMills(e, "", -1);
  }