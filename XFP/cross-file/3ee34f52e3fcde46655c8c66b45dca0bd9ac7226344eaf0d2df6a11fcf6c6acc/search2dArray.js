export function search2dArray(t, e, i, n) {
    for (var r = 0; r < t.length; r++) {
        var s = t[r];
        if (s && hstc.utils.isArray(s) && -1 !== hstc.utils.inArray(s[e - 1], i)) {
            n(s, r);
            t.splice(r--, 1);
        }
    }
}
