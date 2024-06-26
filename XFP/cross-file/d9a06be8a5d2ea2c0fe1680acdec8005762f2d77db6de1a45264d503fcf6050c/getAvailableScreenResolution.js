
export function getAvailableScreenResolution(keys) {
    var available;
    if (window.screen.availWidth && window.screen.availHeight) {
        if (this.options.detectScreenOrientation) {
            available = window.screen.availHeight > window.screen.availWidth ? [
                window.screen.availHeight,
                window.screen.availWidth
            ] : [
                window.screen.availWidth,
                window.screen.availHeight
            ];
        } else {
            available = [
                window.screen.availHeight,
                window.screen.availWidth
            ];
        }
    }
    if (typeof available !== 'undefined') {
        keys.addPreprocessedComponent({
            key: 'available_resolution',
            value: available
        });
    }
    return keys;
}
