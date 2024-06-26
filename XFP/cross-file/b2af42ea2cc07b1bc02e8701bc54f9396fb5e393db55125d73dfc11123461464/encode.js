export function encode(a) {
  var b = "",
    c = 0;
  for (a = this.utf8Encode(a); c < a.length; ) {
    var f = a.charCodeAt(c++);
    var e = a.charCodeAt(c++);
    var g = a.charCodeAt(c++);
    var k = f >> 2;
    f = ((f & 3) << 4) | (e >> 4);
    var n = ((e & 15) << 2) | (g >> 6);
    var m = g & 63;
    isNaN(e) ? (n = m = 64) : isNaN(g) && (m = 64);
    b =
      b +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        k
      ) +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        f
      ) +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        n
      ) +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        m
      );
  }
  return b;
}