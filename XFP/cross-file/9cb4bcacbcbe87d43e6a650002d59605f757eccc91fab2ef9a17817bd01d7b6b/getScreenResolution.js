
export function getScreenResolution(options) {
    var resolution = [
        window.screen.width,
        window.screen.height
    ];
    if (options.screen.detectScreenOrientation) {
        resolution.sort().reverse();
    }
    return resolution;
}
