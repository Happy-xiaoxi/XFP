;
;
export function tb() {
    var a = [
        Pb,
        Rb,
        Qb,
        Sb,
        Tb,
        Vb,
        Ub,
        Wb,
        Xb
    ];
    if (window.ActiveXObject || 'Microsoft Internet Explorer' == navigator.appName || 'Netscape' == navigator.appName && null != /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent))
        for (var b = 0; b < a.length; b++)
            try {
                a[b].apply(null, []);
            } catch (c) {
                k(c);
            }
}