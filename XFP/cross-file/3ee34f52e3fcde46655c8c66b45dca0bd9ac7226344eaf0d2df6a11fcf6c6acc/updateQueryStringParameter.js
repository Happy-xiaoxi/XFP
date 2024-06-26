



export function updateQueryStringParameter(t, e, i) {
    var n = new RegExp('([?|&])' + e + '=.*?(&|#|$)(.*)', 'gi');
    if (n.test(t))
        return i ? t.replace(n, '$1' + e + '=' + i + '$2$3') : t.replace(n, '$1$3').replace(/(&|\?)$/, '');
    if (i) {
        var r = t.indexOf('#'), s = t.indexOf('?'), o = -1 !== s && (-1 === r || s < r) ? '&' : '?', c = t.split('#');
        t = c[0] + o + e + '=' + i;
        c[1] && (t += '#' + c[1]);
        return t;
    }
    return t;
}
