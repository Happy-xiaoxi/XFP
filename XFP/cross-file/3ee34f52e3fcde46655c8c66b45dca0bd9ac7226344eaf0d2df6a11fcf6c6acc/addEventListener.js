export function addEventListener(t, e, i, n) {
    if (t.addEventListener) {
        t.addEventListener(e, i, n);
        return !0;
    }
    if (t.attachEvent)
        return t.attachEvent('on' + e, i);
    t['on' + e] = i;
}
