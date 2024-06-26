export function hasLiedOsKey(e) {
    return this.options.excludeHasLiedOs || e.addPreprocessedComponent({
        key: 'has_lied_os',
        value: getHasLiedOs()
    }), e;
}


export function getHasLiedOs() {
    var e, t = navigator.userAgent.toLowerCase(), r = navigator.oscpu, n = navigator.platform.toLowerCase();
    if (e = t.indexOf('windows phone') >= 0 ? 'Windows Phone' : t.indexOf('win') >= 0 ? 'Windows' : t.indexOf('android') >= 0 ? 'Android' : t.indexOf('linux') >= 0 ? 'Linux' : t.indexOf('iphone') >= 0 || t.indexOf('ipad') >= 0 ? 'iOS' : t.indexOf('mac') >= 0 ? 'Mac' : 'Other', ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && 'Windows Phone' !== e && 'Android' !== e && 'iOS' !== e && 'Other' !== e)
        return !0;
    if (void 0 !== r) {
        if ((r = r.toLowerCase()).indexOf('win') >= 0 && 'Windows' !== e && 'Windows Phone' !== e)
            return !0;
        if (r.indexOf('linux') >= 0 && 'Linux' !== e && 'Android' !== e)
            return !0;
        if (r.indexOf('mac') >= 0 && 'Mac' !== e && 'iOS' !== e)
            return !0;
        if ((-1 === r.indexOf('win') && -1 === r.indexOf('linux') && -1 === r.indexOf('mac')) != ('Other' === e))
            return !0;
    }
    return n.indexOf('win') >= 0 && 'Windows' !== e && 'Windows Phone' !== e || (n.indexOf('linux') >= 0 || n.indexOf('android') >= 0 || n.indexOf('pike') >= 0) && 'Linux' !== e && 'Android' !== e || (n.indexOf('mac') >= 0 || n.indexOf('ipad') >= 0 || n.indexOf('ipod') >= 0 || n.indexOf('iphone') >= 0) && 'Mac' !== e && 'iOS' !== e || (-1 === n.indexOf('win') && -1 === n.indexOf('linux') && -1 === n.indexOf('mac')) != ('Other' === e) || void 0 === navigator.plugins && 'Windows' !== e && 'Windows Phone' !== e;
}
