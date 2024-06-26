var p = ["pantheon.io", "go-vip.net", "go-vip.co"];
export function v() {
  function getTopLevelDomain(t) {
    void 0 === t && (t = []);
    var n = window.location.hostname.split("."),
      c =
        new Date().getTime().toString(36) +
        Math.round(2147483647 * Math.random()).toString(36),
      a = new Date();
    a.setSeconds(a.getSeconds() + 30);
    for (var s = 0; s < n.length; s++)
      try {
        var u = n.slice(-(s + 1)).join(".");
        if (!t.includes(u)) {
          e(o, c, { expires: a, path: "/", domain: u });
          var d = r(o) === c;
          if ((i(o, { path: "/", domain: u }), d)) return u;
        }
      } catch (t) {}
  }
    // return l.getTopLevelDomain(p);
    return getTopLevelDomain(p);
}