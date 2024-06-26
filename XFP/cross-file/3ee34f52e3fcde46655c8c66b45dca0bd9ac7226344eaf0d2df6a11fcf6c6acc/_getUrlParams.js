export function _getUrlParams() {
    var t, e, i = this.context.getLocation();
    try {
        t = i.search;
        e = i.hash;
    } catch (i) {
        t = window.location.search;
        e = window.location.hash;
    }
    return hstc.utils.deparam(t || e);
}
