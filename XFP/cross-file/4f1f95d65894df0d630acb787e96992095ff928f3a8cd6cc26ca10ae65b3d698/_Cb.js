









export function _Cb(a, b, c) {
    c = !0;
    if (h.a || h.el) {
        var d;
        d = oa(b);
        d = 2 <= d.length ? aa(d.charAt(0)) || aa(d.charAt(d.length - 1)) || aa(d.charAt(d.length / 2)) : aa(d);
        var e;
        if (e = h.h)
            a: {
                e = (e = Bb()) ? e.className.split(/\s+/) : [];
                for (var f = e.length - 1; 0 <= f; f--)
                    if (void 0 !== h.h[e[f]]) {
                        e = h.h[e[f]];
                        break a;
                    }
                e = void 0;
            }
        if (!1 !== e && (d && b.replace(/\s/g, '').length >= 2 * h.aw || !d && W(b) >= h.aw) || e)
            if (h.a || h.el)
                c = Ab(a.g), h.a && (a.trace_type = 0);
    }
    return c;
}
