export function removeSingleCallValueFromHsq(t, e) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        if (n && hstc.utils.isArray(n) && n[0] === e) {
            t.splice(i--, 1);
            return 2 == n.length ? n[1] : null;
        }
    }
}
