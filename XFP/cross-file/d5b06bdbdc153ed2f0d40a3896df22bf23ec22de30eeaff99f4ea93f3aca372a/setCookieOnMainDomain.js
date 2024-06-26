export function setCookieOnMainDomain(e, t, n, o) {
    var r = e.location.hostname;
    if (!hasCookieStorage(e)) return r;
    var i = new Date();
    i.setTime(i.getTime() + 60 * o * 60 * 1e3);
    for (
      var a = "expires=" + i.toUTCString(), s = r.split("."), u = null, c = 1;
      c < s.length;
      ++c
    )
      if (
        ((u = s.slice(s.length - c - 1, s.length).join(".")),
        !(-1 < PUBLIC_TOP_TLDS.indexOf(u)))
      ) {
        var l = "domain=." + u;
        try {
          e.cookie =
            t + "=" + encodeURIComponent(n) + ";" + a + ";" + l + ";path=/";
          var d = getCookie(e, t);
          if (d && d === n) break;
        } catch (e) {}
      }
    return u || r;
  }