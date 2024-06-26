export function each(t, e) {
    var i, n = 0, r = t.length;
    if (void 0 === r) {
        for (i in t)
            if (!1 === e.call(t[i], i, t[i]))
                break;
    } else
        for (var s = t[0]; n < r && !1 !== e.call(s, n, s); s = t[++n]);
    return t;
}
