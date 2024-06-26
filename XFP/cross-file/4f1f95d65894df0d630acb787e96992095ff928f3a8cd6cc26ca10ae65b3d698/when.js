


export function when(a, b, c, d) {
    var l, f, g, n = null, h = null, r = a();
    c = c || {};
    l = c.interval || 50;
    f = c.timeout;
    g = c.timeoutCallback || function () {
    };
    if (r)
        return b.call(d, r, c.callbackData), !0;
    n = e.setInterval(function () {
        if (r = a())
            e.clearInterval(n), e.clearTimeout(h), b.call(d, r, c.callbackData);
    }, l);
    f && (h = e.setTimeout(function () {
        e.clearInterval(n);
        g.call(d, r, c.callbackData);
    }, f));
    return !1;
}
