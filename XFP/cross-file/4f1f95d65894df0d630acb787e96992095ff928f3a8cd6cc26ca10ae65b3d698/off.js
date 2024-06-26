

export function off(a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d || !1) : a.detachEvent && a.detachEvent('on' + b, c);
}
