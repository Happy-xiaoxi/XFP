var e = window, g = document, p = {
        distro: 'TICF',
        id: 'TICF-' + new Date().getTime()
    };


export function _P(a, b) {
    var c = e.location.hostname.split('.'), d, l = 2;
    do
        d = c.slice(c.length - l, c.length).join('.'), d = a + ';path=/;domain=.' + d + ';' + b, g.cookie = d, l++;
    while (-1 == g.cookie.indexOf(a) && l <= c.length);
    -1 == g.cookie.indexOf(a) && (g.cookie = a + ';path=/;' + b);
}
