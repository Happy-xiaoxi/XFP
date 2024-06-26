export function x64hash128(e, t) {
    (e = e || ""), (t = t || 0);
    for (
      var n = e.length % 16,
        i = e.length - n,
        a = [0, t],
        o = [0, t],
        r = [0, 0],
        s = [0, 0],
        l = [2277735313, 289559509],
        u = [1291169091, 658871167],
        h = 0;
      h < i;
      h += 16
    )
      (r = [
        (255 & e.charCodeAt(h + 4)) |
          ((255 & e.charCodeAt(h + 5)) << 8) |
          ((255 & e.charCodeAt(h + 6)) << 16) |
          ((255 & e.charCodeAt(h + 7)) << 24),
        (255 & e.charCodeAt(h)) |
          ((255 & e.charCodeAt(h + 1)) << 8) |
          ((255 & e.charCodeAt(h + 2)) << 16) |
          ((255 & e.charCodeAt(h + 3)) << 24),
      ]),
        (s = [
          (255 & e.charCodeAt(h + 12)) |
            ((255 & e.charCodeAt(h + 13)) << 8) |
            ((255 & e.charCodeAt(h + 14)) << 16) |
            ((255 & e.charCodeAt(h + 15)) << 24),
          (255 & e.charCodeAt(h + 8)) |
            ((255 & e.charCodeAt(h + 9)) << 8) |
            ((255 & e.charCodeAt(h + 10)) << 16) |
            ((255 & e.charCodeAt(h + 11)) << 24),
        ]),
        (r = this.x64Multiply(r, l)),
        (r = this.x64Rotl(r, 31)),
        (r = this.x64Multiply(r, u)),
        (a = this.x64Xor(a, r)),
        (a = this.x64Rotl(a, 27)),
        (a = this.x64Add(a, o)),
        (a = this.x64Add(this.x64Multiply(a, [0, 5]), [0, 1390208809])),
        (s = this.x64Multiply(s, u)),
        (s = this.x64Rotl(s, 33)),
        (s = this.x64Multiply(s, l)),
        (o = this.x64Xor(o, s)),
        (o = this.x64Rotl(o, 31)),
        (o = this.x64Add(o, a)),
        (o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 944331445]));
    switch (((r = [0, 0]), (s = [0, 0]), n)) {
      case 15:
        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(h + 14)], 48));
      case 14:
        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(h + 13)], 40));
      case 13:
        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(h + 12)], 32));
      case 12:
        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(h + 11)], 24));
      case 11:
        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(h + 10)], 16));
      case 10:
        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(h + 9)], 8));
      case 9:
        (s = this.x64Xor(s, [0, e.charCodeAt(h + 8)])),
          (s = this.x64Multiply(s, u)),
          (s = this.x64Rotl(s, 33)),
          (s = this.x64Multiply(s, l)),
          (o = this.x64Xor(o, s));
      case 8:
        r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(h + 7)], 56));
      case 7:
        r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(h + 6)], 48));
      case 6:
        r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(h + 5)], 40));
      case 5:
        r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(h + 4)], 32));
      case 4:
        r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(h + 3)], 24));
      case 3:
        r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(h + 2)], 16));
      case 2:
        r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(h + 1)], 8));
      case 1:
        (r = this.x64Xor(r, [0, e.charCodeAt(h)])),
          (r = this.x64Multiply(r, l)),
          (r = this.x64Rotl(r, 31)),
          (r = this.x64Multiply(r, u)),
          (a = this.x64Xor(a, r));
    }
    return (
      (a = this.x64Xor(a, [0, e.length])),
      (o = this.x64Xor(o, [0, e.length])),
      (a = this.x64Add(a, o)),
      (o = this.x64Add(o, a)),
      (a = this.x64Fmix(a)),
      (o = this.x64Fmix(o)),
      (a = this.x64Add(a, o)),
      (o = this.x64Add(o, a)),
      ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) +
        ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) +
        ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) +
        ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
    );
  }