
export function getLink(a, b) {
    var c, d, l = g.getElementsByTagName('link');
    for (c = 0; c < l.length; ++c)
        if (d = l[c].getAttribute('rel'), l[c].getAttribute('href') && d && (!b && 0 <= d.indexOf(a) || b && d == a))
            return l[c].href;
    return null;
}
