;
;
export function Ab() {
    try {
        e('touchEnabled', 'ontouchstart' in window);
        window.addEventListener('deviceorientation', function (a) {
            try {
                e('window.screen.orientation.absolute', a.absolute), e('window.screen.orientation.alpha', a.alpha), e('window.screen.orientation.beta', a.beta), e('window.screen.orientation.gamma', a.gamma);
            } catch (b) {
                k('failed to process device orientation event ' + b);
            }
        });
        e('window.screen.colorDepth', screen.colorDepth.toString());
        e('window.screen.availHeight', screen.availHeight.toString());
        e('window.screen.pixelDepth', screen.pixelDepth.toString());
        e('window.devicePixelRatio', window.devicePixelRatio.toString());
        void 0 !== screen.orientation && (e('window.screen.orientation.type', screen.orientation.type.toString()), e('window.screen.orientation.angle', screen.orientation.angle.toString()));
        e('window.screen.height', screen.height.toString());
        e('window.screen.width', screen.width.toString());
        var a = !1;
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && (a = !0);
        e('window.screen.darkMode.enabled', a);
    } catch (b) {
        k(b);
    }
}