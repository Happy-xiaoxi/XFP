;
;
export function mixExpS(n, t) {
    var i, e, r, f, u;
    if (!t)
        return n;
    if (!n)
        return t;
    for (i = (n ? n + '' : '').split('_'), e = (t ? t + '' : '').split('_'), e[1] || (e[1] = ''), i[1] || (i[1] = ''), r = 0; r < 2; r++)
        for (f = e[r].split(','), u = 0; u < f.length; u++)
            f[u] && (',' + i[0] + ',' + i[1] + ',').indexOf(',' + f[u] + ',') == -1 && (i[r] = (i[r] ? i[r] + ',' : '') + f[u]);
    return i[0] + (i[1] ? '_' + i[1] : '');
}