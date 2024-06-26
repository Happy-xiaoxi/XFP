export function l(e, t) {
  t = t || 0;
  for (
    var n = (e = e || "").length % 16,
      a = e.length - n,
      r = [0, t],
      i = [0, t],
      o = [0, 0],
      l = [0, 0],
      s = [2277735313, 289559509],
      c = [1291169091, 658871167],
      u = 0;
    u < a;
    u += 16
  )
    (o = [
      (255 & e.charCodeAt(u + 4)) |
        ((255 & e.charCodeAt(u + 5)) << 8) |
        ((255 & e.charCodeAt(u + 6)) << 16) |
        ((255 & e.charCodeAt(u + 7)) << 24),
      (255 & e.charCodeAt(u)) |
        ((255 & e.charCodeAt(u + 1)) << 8) |
        ((255 & e.charCodeAt(u + 2)) << 16) |
        ((255 & e.charCodeAt(u + 3)) << 24),
    ]),
      (l = [
        (255 & e.charCodeAt(u + 12)) |
          ((255 & e.charCodeAt(u + 13)) << 8) |
          ((255 & e.charCodeAt(u + 14)) << 16) |
          ((255 & e.charCodeAt(u + 15)) << 24),
        (255 & e.charCodeAt(u + 8)) |
          ((255 & e.charCodeAt(u + 9)) << 8) |
          ((255 & e.charCodeAt(u + 10)) << 16) |
          ((255 & e.charCodeAt(u + 11)) << 24),
      ]),
      (o = f(o, s)),
      (o = g(o, 31)),
      (o = f(o, c)),
      (r = m(r, o)),
      (r = g(r, 27)),
      (r = d(r, i)),
      (r = d(f(r, [0, 5]), [0, 1390208809])),
      (l = f(l, c)),
      (l = g(l, 33)),
      (l = f(l, s)),
      (i = m(i, l)),
      (i = g(i, 31)),
      (i = d(i, r)),
      (i = d(f(i, [0, 5]), [0, 944331445]));
  switch (((o = [0, 0]), (l = [0, 0]), n)) {
    case 15:
      l = m(l, h([0, e.charCodeAt(u + 14)], 48));
    case 14:
      l = m(l, h([0, e.charCodeAt(u + 13)], 40));
    case 13:
      l = m(l, h([0, e.charCodeAt(u + 12)], 32));
    case 12:
      l = m(l, h([0, e.charCodeAt(u + 11)], 24));
    case 11:
      l = m(l, h([0, e.charCodeAt(u + 10)], 16));
    case 10:
      l = m(l, h([0, e.charCodeAt(u + 9)], 8));
    case 9:
      (l = m(l, [0, e.charCodeAt(u + 8)])),
        (l = f(l, c)),
        (l = g(l, 33)),
        (l = f(l, s)),
        (i = m(i, l));
    case 8:
      o = m(o, h([0, e.charCodeAt(u + 7)], 56));
    case 7:
      o = m(o, h([0, e.charCodeAt(u + 6)], 48));
    case 6:
      o = m(o, h([0, e.charCodeAt(u + 5)], 40));
    case 5:
      o = m(o, h([0, e.charCodeAt(u + 4)], 32));
    case 4:
      o = m(o, h([0, e.charCodeAt(u + 3)], 24));
    case 3:
      o = m(o, h([0, e.charCodeAt(u + 2)], 16));
    case 2:
      o = m(o, h([0, e.charCodeAt(u + 1)], 8));
    case 1:
      (o = m(o, [0, e.charCodeAt(u)])),
        (o = f(o, s)),
        (o = g(o, 31)),
        (o = f(o, c)),
        (r = m(r, o));
  }
  return (
    (r = m(r, [0, e.length])),
    (i = m(i, [0, e.length])),
    (r = d(r, i)),
    (i = d(i, r)),
    (r = p(r)),
    (i = p(i)),
    (r = d(r, i)),
    (i = d(i, r)),
    ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
  );
}