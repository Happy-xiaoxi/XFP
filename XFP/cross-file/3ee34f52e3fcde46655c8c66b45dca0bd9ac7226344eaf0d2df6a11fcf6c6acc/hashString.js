export function hashString(t) {
    for (var e = 0, i = t.length - 1; i >= 0; i--) {
        var n = t.charCodeAt(i);
        e = 0 !== (n = 266338304 & (e = (e << 6 & 268435455) + n + (n << 14))) ? e ^ n >> 21 : e;
    }
    return e;
}
