export function _Eb(a) {
    if ('' !== a.hash && '#' !== a.hash)
        return !1;
    if ('boolean' == typeof h.ba && h.ba)
        h.ba = ['/'];
    else if (!h.ba)
        return !0;
    for (var b, c = h.ba.length - 1; 0 <= c; c--) {
        b = null;
        var d = h.ba[c], e = d.indexOf('/');
        0 !== e && (b = d.slice(0, e), d = d.slice(e));
        if (!b || a.host == b)
            if ('#' == d.charAt(d.length - 1)) {
                if (0 === a.pathname.indexOf(d.slice(0, -1)))
                    return !1;
            } else if (a.pathname == d)
                return !1;
    }
    return !0;
}
