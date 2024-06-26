

export function removeEventListener(t, e, i, n) {
    if (t.removeEventListener) {
        t.removeEventListener(e, i, n);
        return !0;
    }
    if (t.detachEvent)
        return t.detachEvent('on' + e, i);
    t.removeAttribute('on' + e);
}
