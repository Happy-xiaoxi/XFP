export function msieDetect(a) {
  try {
    var c = new ActiveXObject(a);
    try {
      return c.GetVariable("$version");
    } catch (f) {
      try {
        return c.GetVersions();
      } catch (e) {
        try {
          var d;
          for (a = 1; 9 > a; a++) c.isVersionSupported(a + ".0") && (d = a);
          return d || !0;
        } catch (g) {
          return !0;
        }
      }
    }
  } catch (f) {
    return !1;
  }
}