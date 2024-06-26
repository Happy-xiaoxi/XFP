;
;
export function Ya(a) {
    function b() {
        if (c >= a.length)
            return !1;
        var b = g(c), b = (254 >>> d & b) << d, b = b >> 1;
        d += 7;
        if (8 > d)
            return b;
        d -= 8;
        c++;
        if (c >= a.length)
            return b;
        var e = g(c), e = 65280 >>> d & e & 255, e = e >> 8 - d;
        return b | e;
    }
    for (var c = 0, d = 0, e = [], g = ('string' == typeof a ? Ea : Za) == Ea ? function (b) {
                return a.codePointAt(b);
            } : function (b) {
                return a[b];
            };;) {
        var v = b();
        if (!1 === v)
            break;
        var m = $a.indexOf(v);
        if (-1 != m) {
            var r = b(), f = 194, z = 128;
            !1 === r ? (f |= (7 & ab) << 2, r = v) : f |= (7 & m) << 2;
            f |= 0 < (r & 64) ? 1 : 0;
            z |= r & 63;
            e.push(f);
            e.push(z);
        } else
            e.push(v);
    }
    return e;
}