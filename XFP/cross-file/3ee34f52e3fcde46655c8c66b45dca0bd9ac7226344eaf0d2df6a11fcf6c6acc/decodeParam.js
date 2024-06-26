
export function decodeParam(t, e) {
    var i, n = decodeURIComponent;
    t = t.split('+').join(' ');
    if (n instanceof Function)
        try {
            i = e ? decodeURI(t) : n(t);
        } catch (e) {
            i = unescape(t);
        }
    else
        i = unescape(t);
    return i;
}
