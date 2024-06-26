export function setCookie(e, t, n) {
    n = n || {};
    var o = n.expires;
    n.SameSite = 'None';
    n.Secure = true;
    if ('number' === typeof o && o) {
        var r = new Date();
        r.setTime(r.getTime() + 1000 * o), o = n.expires = r;
    }
    o && o.toUTCString && (n.expires = o.toUTCString()), t = encodeURIComponent(t);
    var i = e + '=' + t;
    for (var a in n) {
        i += '; ' + a;
        var c = n[a];
        c !== !0 && (i += '=' + c);
    }
    document.cookie = i;
}
