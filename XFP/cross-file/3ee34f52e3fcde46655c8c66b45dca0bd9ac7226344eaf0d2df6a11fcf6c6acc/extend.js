export function extend() {
    var t, e = arguments[0] || {}, i = 1, n = arguments.length, r = !1;
    if ('boolean' == typeof e) {
        r = e;
        e = arguments[1] || {};
        i = 2;
    }
    'object' == typeof e || hstc.utils.isFunction(e) || (e = {});
    if (n == i) {
        e = this;
        --i;
    }
    for (; i < n; i++)
        if (null != (t = arguments[i]))
            for (var s in t) {
                var o = e[s], c = t[s];
                e !== c && (r && c && 'object' == typeof c && !c.nodeType ? e[s] = hstc.utils.extend(r, o || (null !== c.length ? [] : {}), c) : void 0 !== c && (e[s] = c));
            }
    return e;
}
