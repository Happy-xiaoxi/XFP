export function getCookie(e, t) {
    if (!hasCookieStorage(e)) return null;
    for (var n = e.cookie.split(";"), o = 0; o < n.length; o++) {
      var r = n[o],
        i = r.substr(0, r.indexOf("=")).replace(/^\s+|\s+$/g, ""),
        a = r.substr(r.indexOf("=") + 1);
      if (i === t && a) return decodeURIComponent(a);
    }
    return null;
  }