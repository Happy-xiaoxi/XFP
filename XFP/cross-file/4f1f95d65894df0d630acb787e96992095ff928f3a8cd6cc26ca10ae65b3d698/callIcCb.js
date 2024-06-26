var Tynt = window.Tynt || [];
















export function callIcCb() {
    var a, b, c, d, l, z;
    if (!e._33Across.state.icDone) {
        e._33Across.state.icDone = Ba;
        b = this.getCookie(g.cookie, 'tracertraffic');
        a = e.location.hash;
        a = /tynt=/.test(a) ? a.match(/tynt=?([^?&$#]*)/)[1] : !1;
        var $a = this.getPrivacyParameters();
        d = c = this._icUrl + '/b/p?id=' + this.tyntIds() + (b ? '&et=' + b : '') + (a ? '&a=' + a : '') + ('string' == typeof Tynt.b ? '&b=' + Tynt.b : '') + '&lm=' + p.type + '&ts=' + Date.now() + '&dn=' + p.distro + '&iso=' + (this.isolated() ? '1' : '0') + $a + '&pu=' + encodeURIComponent(this.trunc(this.pageUrl(), f._maxRef));
        (a = this.getMeta('property', 'og:title')) && a != g.title && (d += '&ct=' + encodeURIComponent(this.trunc(a, 200)));
        l = d;
        g.referrer && (a = this.trunc(g.referrer, this._maxRef), l += '&r=' + encodeURIComponent(a));
        z = l;
        if (a = g.title || e.location.hostname)
            a = this.trim(this.trunc(a, 200)), z += '&t=' + encodeURIComponent(a);
        b = this.clientHints(z);
        f.callIcCb.rsp = function () {
            e._33Across.state.icDone = U;
        };
        f.clog('Calling IC');
        this.injectPixel(b, f.callIcCb.rsp, function () {
            f.injectPixel(z, f.callIcCb.rsp, function () {
                f.injectPixel(l, f.callIcCb.rsp, function () {
                    f.injectPixel(d, f.callIcCb.rsp, function () {
                        f.injectPixel(c, f.callIcCb.rsp);
                    });
                });
            });
        });
    }
}
