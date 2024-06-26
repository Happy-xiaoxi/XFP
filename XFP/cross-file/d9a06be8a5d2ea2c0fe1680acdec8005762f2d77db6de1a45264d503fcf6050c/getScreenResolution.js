
export function getScreenResolution(keys) {
    var resolution;
    if (this.options.detectScreenOrientation) {
        resolution = window.screen.height > window.screen.width ? [
            window.screen.height,
            window.screen.width
        ] : [
            window.screen.width,
            window.screen.height
        ];
    } else {
        resolution = [
            window.screen.width,
            window.screen.height
        ];
    }
    keys.addPreprocessedComponent({
        key: 'resolution',
        value: resolution
    });
    return keys;
}
