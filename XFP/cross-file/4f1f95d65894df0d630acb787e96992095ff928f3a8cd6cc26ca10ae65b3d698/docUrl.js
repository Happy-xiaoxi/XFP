





export function docUrl() {
    var a = this.getLink('canonical');
    a || (a = this.getMeta('property', 'og:url', 'name', 'original-source'));
    if (a) {
        if (0 != a.indexOf('http')) {
            var b = p.protocol + e.location.host + e.location.pathname, c = g.getElementsByTagName('base')[0];
            c && (c = c.getAttribute('href')) && (b = c);
            '/' == a.charAt(0) ? (c = b.indexOf('/', 9), -1 < c && (b = b.slice(0, c))) : (c = b.lastIndexOf('/'), b = 9 < c ? b.slice(0, c + 1) : b + '/');
            a = b + a;
        }
        return a;
    }
    return '';
}
