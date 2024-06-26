export function getFpb(e) {
  var t,
    r = "";
  if (window.navigator.cookieEnabled) {
    var n = window.document.cookie.indexOf(e + "=");
    if (-1 != n) {
      var i = e.length + 1;
      n += i;
      var o = window.document.cookie.indexOf(";", n);
      -1 == o && (o = window.document.cookie.length);
      try {
        t = decodeURIComponent(window.document.cookie.substring(n, o)) || "";
      } catch (a) {
        t = window.document.cookie.substring(n, o) || "";
      }
      r || (r = t);
    }
  }
  try {
    window.localStorage &&
      ((t = window.localStorage.getItem(e) || ""), r || (r = t));
  } catch (a) {}
  try {
    window.sessionStorage &&
      ((t = window.sessionStorage.getItem(e) || ""), r || (r = t));
  } catch (s) {}
  try {
    (t = this._str_find(window.name, e)), r || (r = t);
  } catch (d) {
    console.log(d);
  }
  return r || (r = t), r || "";
}