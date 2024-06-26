export function isolated() {
    var a = !0;
    try {
        'function' == typeof window.top.open && (a = !1);
    } catch (b) {
    }
    return a;
}
