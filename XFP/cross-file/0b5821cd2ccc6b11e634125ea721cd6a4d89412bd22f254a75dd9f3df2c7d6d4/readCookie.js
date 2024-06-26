export function readCookie(n) {
    for (
      var t = n + "=", e = document.cookie.split(";"), o = 0;
      o < e.length;
      o++
    ) {
      for (var a = e[o]; " " === a.charAt(0); ) a = a.substring(1, a.length);
      if (0 === a.indexOf(t)) return a.substring(t.length, a.length);
    }
    return null;
  }