;
;
export function getHasLiedResolution() {
    if (screen.width < screen.availWidth) {
        return true;
    }
    if (screen.height < screen.availHeight) {
        return true;
    }
    return false;
}