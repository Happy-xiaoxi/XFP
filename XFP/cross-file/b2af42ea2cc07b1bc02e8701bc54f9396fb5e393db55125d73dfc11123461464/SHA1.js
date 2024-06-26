export function SHA1(a) {
  function b(a, b) {
    return (a << b) | (a >>> (32 - b));
  }
  function c(a) {
    var b = "",
      c;
    for (c = 7; 0 <= c; c--) {
      var d = (a >>> (4 * c)) & 15;
      b += d.toString(16);
    }
    return b;
  }
  var f,
    e = Array(80),
    g = 1732584193,
    k = 4023233417,
    n = 2562383102,
    m = 271733878,
    r = 3285377520;
  a = (function (a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d
        ? (b += String.fromCharCode(d))
        : (127 < d && 2048 > d
            ? (b += String.fromCharCode((d >> 6) | 192))
            : ((b += String.fromCharCode((d >> 12) | 224)),
              (b += String.fromCharCode(((d >> 6) & 63) | 128))),
          (b += String.fromCharCode((d & 63) | 128)));
    }
    return b;
  })(a);
  var h = a.length;
  var q = [];
  for (f = 0; f < h - 3; f += 4) {
    var p =
      (a.charCodeAt(f) << 24) |
      (a.charCodeAt(f + 1) << 16) |
      (a.charCodeAt(f + 2) << 8) |
      a.charCodeAt(f + 3);
    q.push(p);
  }
  switch (h % 4) {
    case 0:
      f = 2147483648;
      break;
    case 1:
      f = (a.charCodeAt(h - 1) << 24) | 8388608;
      break;
    case 2:
      f = (a.charCodeAt(h - 2) << 24) | (a.charCodeAt(h - 1) << 16) | 32768;
      break;
    case 3:
      f =
        (a.charCodeAt(h - 3) << 24) |
        (a.charCodeAt(h - 2) << 16) |
        (a.charCodeAt(h - 1) << 8) |
        128;
  }
  for (q.push(f); 14 != q.length % 16; ) q.push(0);
  q.push(h >>> 29);
  q.push((h << 3) & 4294967295);
  for (a = 0; a < q.length; a += 16) {
    for (f = 0; 16 > f; f++) e[f] = q[a + f];
    for (f = 16; 79 >= f; f++)
      e[f] = b(e[f - 3] ^ e[f - 8] ^ e[f - 14] ^ e[f - 16], 1);
    p = g;
    h = k;
    var l = n;
    var t = m;
    var u = r;
    for (f = 0; 19 >= f; f++) {
      var v =
        (b(p, 5) + ((h & l) | (~h & t)) + u + e[f] + 1518500249) &
        4294967295;
      u = t;
      t = l;
      l = b(h, 30);
      h = p;
      p = v;
    }
    for (f = 20; 39 >= f; f++)
      (v = (b(p, 5) + (h ^ l ^ t) + u + e[f] + 1859775393) & 4294967295),
        (u = t),
        (t = l),
        (l = b(h, 30)),
        (h = p),
        (p = v);
    for (f = 40; 59 >= f; f++)
      (v =
        (b(p, 5) + ((h & l) | (h & t) | (l & t)) + u + e[f] + 2400959708) &
        4294967295),
        (u = t),
        (t = l),
        (l = b(h, 30)),
        (h = p),
        (p = v);
    for (f = 60; 79 >= f; f++)
      (v = (b(p, 5) + (h ^ l ^ t) + u + e[f] + 3395469782) & 4294967295),
        (u = t),
        (t = l),
        (l = b(h, 30)),
        (h = p),
        (p = v);
    g = (g + p) & 4294967295;
    k = (k + h) & 4294967295;
    n = (n + l) & 4294967295;
    m = (m + t) & 4294967295;
    r = (r + u) & 4294967295;
  }
  v = c(g) + c(k) + c(n) + c(m) + c(r);
  return v.toLowerCase();
}