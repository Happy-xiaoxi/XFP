export function getNavigatorPlatform() {
    if (navigator.platform) {
        return navigator.platform;
    } else {
        return 'unknown';
    }
}
