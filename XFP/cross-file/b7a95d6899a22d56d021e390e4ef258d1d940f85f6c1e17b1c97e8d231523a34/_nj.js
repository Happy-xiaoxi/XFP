export function j(e, t) {
  if (e.configuration.dmn)
    for (var i = 0; i < t.length; i++) {
      var o = n[t[i]],
        a = U(o);
      a.pathname.length > 1
        ? r(
            t[i],
            (a.pathname.endsWith("p3") ? n.C6_URL_PREFIX : n.URL_PREFIX) +
              e.configuration.dmn +
              a.pathname
          )
        : r(t[i], n.URL_PREFIX + e.configuration.dmn);
    }
}