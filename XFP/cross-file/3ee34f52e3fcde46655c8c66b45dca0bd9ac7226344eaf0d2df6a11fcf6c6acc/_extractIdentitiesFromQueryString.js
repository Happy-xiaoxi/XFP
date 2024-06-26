
export function _extractIdentitiesFromQueryString(t, e) {
    var i = this._getUrlParams();
    i.__hs_email && this.identify({ email: hstc.utils.decodeParam(i.__hs_email) }, !0);
    if (0 !== this.cookie.getDomains().length) {
        var n = this;
        if (i.__hsfp) {
            var r = parseInt(hstc.utils.safeString(i.__hsfp), 10), s = this._getFingerprint();
            if (null === s || s != r)
                return;
            if (i.__hstc) {
                var o = hstc.tracking.Utk.parse(this.cookie, hstc.utils.safeString(i.__hstc));
                hstc.utils.each(this.cookie.getDomains(), function (e, i) {
                    if (hstc.utils.hashString(i) == o.domain) {
                        if (n.utk && n.utk.visitor !== o.visitor)
                            n.identify({ visitor: o.visitor }, !0);
                        else if (t.recovered) {
                            if (t.visitor !== o.visitor) {
                                n.utk = t;
                                n.identify({ visitor: o.visitor }, !0);
                            }
                        } else {
                            n.utk = o;
                            n.utk.resetDomain();
                        }
                        return !1;
                    }
                });
            }
            if (i.__hssc) {
                var c = hstc.tracking.Session.parse(this.cookie, hstc.utils.safeString(i.__hssc));
                hstc.utils.each(this.cookie.getDomains(), function (t, i) {
                    if (hstc.utils.hashString(i) == c.domain) {
                        if (e.recovered)
                            n.session = e.merge(c);
                        else {
                            n.session = c;
                            n.session.resetDomain();
                            n.session.recovered = !0;
                        }
                        return !1;
                    }
                });
            }
        }
    }
}
