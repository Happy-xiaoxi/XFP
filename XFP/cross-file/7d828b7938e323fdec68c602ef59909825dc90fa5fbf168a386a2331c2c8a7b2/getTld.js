export function getTld() {
    var e = setCookieOnMainDomain(document, "cto_tld_test", "test", 1);
    return deleteCookie(document, "cto_tld_test"), e;
  }