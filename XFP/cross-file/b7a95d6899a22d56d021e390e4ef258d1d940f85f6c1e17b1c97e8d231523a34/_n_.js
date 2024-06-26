export function _() {
  try {
    if ("undefined" == typeof window) return !1;
    if (window.localStorage) {
      var e = Date.now().toString();
      window.localStorage.setItem(e, e);
      var t = window.localStorage.getItem(e);
      if ((window.localStorage.removeItem(e), e === t)) return !0;
    }
    return !1;
  } catch (e) {
    return !1;
  }
}