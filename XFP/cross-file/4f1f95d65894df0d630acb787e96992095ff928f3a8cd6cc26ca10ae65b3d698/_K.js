



export function _K(a) {
    for (var b = 0, c = 100 > a.length ? a.length : 100, d = 0; d < c; d++)
        b += a.charCodeAt(d);
    a = Math.floor(3844 * Math.random());
    c = Math.abs(Date.now() - 1228118400000);
    return Fa(c, 7) + Fa((b + a) % 3844, 2);
}
