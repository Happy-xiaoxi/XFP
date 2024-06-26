export function screenResolutionKey(e) {
    return this.options.excludeScreenResolution ? e : getScreenResolution(e);
}

export function getScreenResolution(e) {
    var t;
    return t = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [
        window.screen.height,
        window.screen.width
    ] : [
        window.screen.width,
        window.screen.height
    ], e.addPreprocessedComponent({
        key: 'resolution',
        value: t
    }), e;
}