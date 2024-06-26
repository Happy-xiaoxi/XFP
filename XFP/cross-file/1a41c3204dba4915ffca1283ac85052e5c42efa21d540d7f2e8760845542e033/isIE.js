export function isIE() {
    console.log("IE test")
    return 'Microsoft Internet Explorer' === navigator.appName || !('Netscape' !== navigator.appName || !/Trident/.test(navigator.userAgent));
}
