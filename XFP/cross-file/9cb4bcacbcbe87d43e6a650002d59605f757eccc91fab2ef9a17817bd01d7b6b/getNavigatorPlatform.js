export function getNavigatorPlatform(options) {
    if (navigator.platform) {
        return navigator.platform;
    } else {
        return options.NOT_AVAILABLE;
    }
}
