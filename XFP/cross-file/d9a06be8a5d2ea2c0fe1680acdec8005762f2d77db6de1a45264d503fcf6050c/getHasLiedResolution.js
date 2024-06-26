export function getHasLiedResolution() {
    if (window.screen.width < window.screen.availWidth) {
        return true;
    }
    if (window.screen.height < window.screen.availHeight) {
        return true;
    }
    return false;
}
