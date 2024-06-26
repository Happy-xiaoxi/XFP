
export function getMeta(a, b, c, d) {
    var l, e = null, f = null, n = g.getElementsByTagName('meta');
    for (l = 0; l < n.length; ++l)
        e || n[l].getAttribute(a) !== b ? c && !f && n[l].getAttribute(c) === d && (f = n[l].getAttribute('content') || null) : e = n[l].getAttribute('content') || null;
    return e || f;
}
