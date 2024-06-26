;
;
export function getScreenResolution(keys) {
    var resolution;
    if (this.options.detectScreenOrientation) {
        resolution = screen.height > screen.width ? [
            screen.height,
            screen.width
        ] : [
            screen.width,
            screen.height
        ];
    } else {
        resolution = [
            screen.width,
            screen.height
        ];
    }
    if (typeof resolution !== 'undefined') {
        keys.push({
            key: 'resolution',
            value: resolution
        });
    }
    return keys;
}