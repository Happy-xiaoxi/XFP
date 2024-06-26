export function setCookie(c, a, d, f) {
  var b = new Date();
  b.setDate(b.getDate() + d);
  f && b.setMinutes(b.getMinutes() + f);
  a = escape(a) + (null == d ? "" : "; expires=" + b.toUTCString());
  document.cookie = c + "=" + a + ";path=/;secure;";
}