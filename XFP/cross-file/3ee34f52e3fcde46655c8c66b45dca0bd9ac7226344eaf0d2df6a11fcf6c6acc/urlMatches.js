










export function urlMatches(t, e) {
    e || (e = this.context.getCurrentHref(this.path));
    if (e == (t = t.toLowerCase()))
        return !0;
    if (-1 === t.indexOf('?')) {
        var i = e.indexOf('?');
        -1 !== i && (e = e.substring(0, i));
    }
    if (-1 == t.indexOf('*'))
        return (t = t.replace(/\/$/, '')) == (e = e.replace(/\/$/, '')) || 0 === t.indexOf('/') && hstc.utils.removeDomain(e) == t;
    if (t == e)
        return !0;
    if (0 === t.length)
        return !1;
    var n = new RegExp('[.+?|()\\[\\]{}\\\\]', 'g');
    regex = t.replace(n, '\\$&').replace(new RegExp('\\*', 'g'), '(.*?)');
    regex = /\/$/.test(regex) ? '^' + regex + '$' : '^' + regex + '/?$';
    regex = new RegExp(regex, 'i');
    if (regex.test(e))
        return !0;
    if (0 === t.indexOf('/')) {
        e = '/' + e.split('//')[1].split('/').splice(1).join('/');
        return regex.test(e);
    }
    return !1;
}
