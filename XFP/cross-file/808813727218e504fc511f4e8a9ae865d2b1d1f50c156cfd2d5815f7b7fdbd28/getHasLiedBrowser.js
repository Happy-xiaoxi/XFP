
export function getHasLiedBrowser() {
    var e, t = navigator.userAgent.toLowerCase(), r = navigator.productSub;
    if (('Chrome' === (e = t.indexOf('firefox') >= 0 ? 'Firefox' : t.indexOf('opera') >= 0 || t.indexOf('opr') >= 0 ? 'Opera' : t.indexOf('chrome') >= 0 ? 'Chrome' : t.indexOf('safari') >= 0 ? 'Safari' : t.indexOf('trident') >= 0 ? 'Internet Explorer' : 'Other') || 'Safari' === e || 'Opera' === e) && '20030107' !== r)
        return !0;
    var n, i = eval.toString().length;
    if (37 === i && 'Safari' !== e && 'Firefox' !== e && 'Other' !== e)
        return !0;
    if (39 === i && 'Internet Explorer' !== e && 'Other' !== e)
        return !0;
    if (33 === i && 'Chrome' !== e && 'Opera' !== e && 'Other' !== e)
        return !0;
    try {
        throw 'a';
    } catch (e) {
        try {
            e.toSource(), n = !0;
        } catch (e) {
            n = !1;
        }
    }
    return !(!n || 'Firefox' === e || 'Other' === e);
}
