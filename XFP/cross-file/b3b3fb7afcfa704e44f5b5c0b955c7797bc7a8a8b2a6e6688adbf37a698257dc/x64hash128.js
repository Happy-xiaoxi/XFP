export function x64hash128(e, t) {
    e = e || '', t = t || 0;
    for (var r = e.length % 16, n = e.length - r, i = [
                0,
                t
            ], a = [
                0,
                t
            ], o = [
                0,
                0
            ], s = [
                0,
                0
            ], l = [
                2277735313,
                289559509
            ], d = [
                1291169091,
                658871167
            ], h = 0; h < n; h += 16)
        o = [
            255 & e.charCodeAt(h + 4) | (255 & e.charCodeAt(h + 5)) << 8 | (255 & e.charCodeAt(h + 6)) << 16 | (255 & e.charCodeAt(h + 7)) << 24,
            255 & e.charCodeAt(h) | (255 & e.charCodeAt(h + 1)) << 8 | (255 & e.charCodeAt(h + 2)) << 16 | (255 & e.charCodeAt(h + 3)) << 24
        ], s = [
            255 & e.charCodeAt(h + 12) | (255 & e.charCodeAt(h + 13)) << 8 | (255 & e.charCodeAt(h + 14)) << 16 | (255 & e.charCodeAt(h + 15)) << 24,
            255 & e.charCodeAt(h + 8) | (255 & e.charCodeAt(h + 9)) << 8 | (255 & e.charCodeAt(h + 10)) << 16 | (255 & e.charCodeAt(h + 11)) << 24
        ], o = this.x64Multiply(o, l), o = this.x64Rotl(o, 31), o = this.x64Multiply(o, d), i = this.x64Xor(i, o), i = this.x64Rotl(i, 27), i = this.x64Add(i, a), i = this.x64Add(this.x64Multiply(i, [
            0,
            5
        ]), [
            0,
            1390208809
        ]), s = this.x64Multiply(s, d), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, l), a = this.x64Xor(a, s), a = this.x64Rotl(a, 31), a = this.x64Add(a, i), a = this.x64Add(this.x64Multiply(a, [
            0,
            5
        ]), [
            0,
            944331445
        ]);
    switch (o = [
            0,
            0
        ], s = [
            0,
            0
        ], r) {
    case 15:
        s = this.x64Xor(s, this.x64LeftShift([
            0,
            e.charCodeAt(h + 14)
        ], 48));
    case 14:
        s = this.x64Xor(s, this.x64LeftShift([
            0,
            e.charCodeAt(h + 13)
        ], 40));
    case 13:
        s = this.x64Xor(s, this.x64LeftShift([
            0,
            e.charCodeAt(h + 12)
        ], 32));
    case 12:
        s = this.x64Xor(s, this.x64LeftShift([
            0,
            e.charCodeAt(h + 11)
        ], 24));
    case 11:
        s = this.x64Xor(s, this.x64LeftShift([
            0,
            e.charCodeAt(h + 10)
        ], 16));
    case 10:
        s = this.x64Xor(s, this.x64LeftShift([
            0,
            e.charCodeAt(h + 9)
        ], 8));
    case 9:
        s = this.x64Xor(s, [
            0,
            e.charCodeAt(h + 8)
        ]), s = this.x64Multiply(s, d), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, l), a = this.x64Xor(a, s);
    case 8:
        o = this.x64Xor(o, this.x64LeftShift([
            0,
            e.charCodeAt(h + 7)
        ], 56));
    case 7:
        o = this.x64Xor(o, this.x64LeftShift([
            0,
            e.charCodeAt(h + 6)
        ], 48));
    case 6:
        o = this.x64Xor(o, this.x64LeftShift([
            0,
            e.charCodeAt(h + 5)
        ], 40));
    case 5:
        o = this.x64Xor(o, this.x64LeftShift([
            0,
            e.charCodeAt(h + 4)
        ], 32));
    case 4:
        o = this.x64Xor(o, this.x64LeftShift([
            0,
            e.charCodeAt(h + 3)
        ], 24));
    case 3:
        o = this.x64Xor(o, this.x64LeftShift([
            0,
            e.charCodeAt(h + 2)
        ], 16));
    case 2:
        o = this.x64Xor(o, this.x64LeftShift([
            0,
            e.charCodeAt(h + 1)
        ], 8));
    case 1:
        o = this.x64Xor(o, [
            0,
            e.charCodeAt(h)
        ]), o = this.x64Multiply(o, l), o = this.x64Rotl(o, 31), o = this.x64Multiply(o, d), i = this.x64Xor(i, o);
    }
    return i = this.x64Xor(i, [
        0,
        e.length
    ]), a = this.x64Xor(a, [
        0,
        e.length
    ]), i = this.x64Add(i, a), a = this.x64Add(a, i), i = this.x64Fmix(i), a = this.x64Fmix(a), i = this.x64Add(i, a), a = this.x64Add(a, i), ('00000000' + (i[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (i[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (a[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (a[1] >>> 0).toString(16)).slice(-8);
}
