
export function _parse(t, e) {
    var i = t ? t.context : new hstc.global.Context();
    t = t || new hstc.cookies.Cookie(i);
    var n = !e;
    if (e || '1' === t.get(hstc.tracking.Session.RESTART_COOKIE)) {
        e = e || t.get(hstc.tracking.Session.COOKIE);
        try {
            var r = e.split('.');
            if (3 == r.length)
                return new hstc.tracking.Session(t, r[0], r[1], r[2], n);
        } catch (t) {
        }
    }
    return hstc.tracking.Session.regenerate(t);
}
