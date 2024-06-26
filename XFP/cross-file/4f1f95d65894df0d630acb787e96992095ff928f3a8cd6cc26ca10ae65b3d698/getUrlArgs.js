
export function getUrlArgs() {
    var a, b, c, d = [];
    a = location.href.indexOf('?');
    if (-1 != a)
        for (b = location.href.substring(a + 1, location.href.length).split('&'), a = 0; a < b.length; a++)
            c = b[a].split('='), d[c[0]] = c[1];
    return d;
}
