export function getTouchSupport() {
    var e = 0, t = !1;
    void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
    try {
        document.createEvent('TouchEvent'), t = !0;
    } catch (e) {
    }
    return [
        e,
        t,
        'ontouchstart' in window
    ];
}
