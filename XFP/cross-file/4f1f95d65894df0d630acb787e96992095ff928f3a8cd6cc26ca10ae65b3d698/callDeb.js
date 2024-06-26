
export function callDeb(a, b, c) {
    function d(a, b) {
        f.clog('Calling DEB ' + b + (a ? '' : ' on IC timeout'));
        var c = encodeURIComponent(f.trunc(g.referrer, f._maxRef)), d = this.getPrivacyParameters(), h;
        h = this.clientHints('');
        f.injectScript(f._debUrl + '?id=' + f.tyntIds() + '&dn=' + p.distro + '&cc=' + b + h + '&r=' + c + d + '&pu=' + encodeURIComponent(f.trunc(f.pageUrl(), f._maxRef)), e);
    }
    'undefined' == typeof a && (a = 1);
    e._33Across.state.deDone >= a || (++e._33Across.state.deDone, 1 !== e._33Across.state.deDone && !0 !== c || this.when(function () {
        return e._33Across.state.icDone == U;
    }, d, {
        timeout: 300,
        timeoutCallback: d,
        callbackData: e._33Across.state.deDone
    }, this), b && 0 < b.length && setTimeout(function () {
        f.callDeb(a, b, !0);
    }, b.shift()));
}
