;
;
export function isIE() {
    if (navigator.appName === 'Microsoft Internet Explorer') {
        return true;
    } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {
        return true;
    }
    return false;
}