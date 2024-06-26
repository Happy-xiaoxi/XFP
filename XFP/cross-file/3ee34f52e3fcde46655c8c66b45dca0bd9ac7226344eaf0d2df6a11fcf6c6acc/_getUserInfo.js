
export function _getUserInfo() {
    var t = {};
    t.cts = hstc.utils.utcnow();
    this.identity && (t.i = hstc.utils.param(this.identity.get()));
    this.hasResetVisitor && (t.rv = 1);
    if (this.utk) {
        t.vi = this.utk.visitor;
        t.nc = this.utk.isNew();
    }
    var e = this.cookie.get(hstc.tracking.Utk.COOKIE);
    hstc.utils.isEmpty(e) || (t.u = e);
    var i = this.cookie.get(hstc.tracking.Session.COOKIE);
    hstc.utils.isEmpty(i) || (t.b = i);
    this.privacyConsent && this.privacyConsent.allowed || (t.ce = !1);
    return t;
}
