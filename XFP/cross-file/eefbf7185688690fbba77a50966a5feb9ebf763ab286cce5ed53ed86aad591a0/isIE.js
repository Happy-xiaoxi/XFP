;
;
export function isIE() {
    return navigator.appName === 'Microsoft Internet Explorer' ? !0 : navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent) ? !0 : !1;
}