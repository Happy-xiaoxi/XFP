export function availableScreenResolutionKey(e) {
    return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e);
}

export function getAvailableScreenResolution(e) {
    var t;
    return window.screen.availWidth && window.screen.availHeight && (t = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [
        window.screen.availHeight,
        window.screen.availWidth
    ] : [
        window.screen.availWidth,
        window.screen.availHeight
    ] : [
        window.screen.availHeight,
        window.screen.availWidth
    ]), void 0 !== t && e.addPreprocessedComponent({
        key: 'available_resolution',
        value: t
    }), e;
}
