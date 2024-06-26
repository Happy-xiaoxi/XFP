;
;
export function getAvailableScreenResolution(keys) {
    var available;
    if (screen.availWidth && screen.availHeight) {
        if (this.options.detectScreenOrientation) {
            available = screen.availHeight > screen.availWidth ? [
                screen.availHeight,
                screen.availWidth
            ] : [
                screen.availWidth,
                screen.availHeight
            ];
        } else {
            available = [
                screen.availHeight,
                screen.availWidth
            ];
        }
    }
    if (typeof available !== 'undefined') {
        keys.push({
            key: 'available_resolution',
            value: available
        });
    }
    return keys;
}