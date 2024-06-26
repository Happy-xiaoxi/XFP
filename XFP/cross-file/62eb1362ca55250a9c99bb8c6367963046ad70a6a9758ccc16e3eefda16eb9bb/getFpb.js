export function getFpb(t) {
  var e,
    r = "";
  if (window.navigator.cookieEnabled) {
    var n = window.document.cookie.indexOf(t + "=");
    if (-1 != n) {
      var i = t.length + 1;
      n += i;
      var o = window.document.cookie.indexOf(";", n);
      -1 == o && (o = window.document.cookie.length);
      try {
        e =
          decodeURIComponent(window.document.cookie.substring(n, o)) ||
          "";
      } catch (a) {
        e = window.document.cookie.substring(n, o) || "";
      }
      r || (r = e);
    }
  }
  try {
    window.localStorage &&
      ((e = window.localStorage.getItem(t) || ""), r || (r = e));
  } catch (a) {}
  try {
    window.sessionStorage &&
      ((e = window.sessionStorage.getItem(t) || ""), r || (r = e));
  } catch (s) {}
  try {
    (e = this._str_find(window.name, t)), r || (r = e);
  } catch (c) {
    console.log(c);
  }
  return r || (r = e), r || "";
}