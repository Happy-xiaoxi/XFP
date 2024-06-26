
export function _manageCookies(t, e, i) {
    var n = this;
    if (!this.managedCookies || i) {
        var r = hstc.tracking.Utk.parse(this.cookie), s = hstc.tracking.Session.parse(this.cookie);
        if (!this.hasResetVisitor) {
            this._extractIdentitiesFromQueryString(r, s);
            this._extractUtkOverride(r);
        }
        this.utk || (this.utk = t || r);
        this.session || (this.session = e || s);
        this.session.isNew() && !i ? this.utk.isNew() || this.utk.rotate(this.session.start) : i || this.session.increment();
        this.context.getWindow().__hsUserToken || (this.context.getWindow().__hsUserToken = this.utk.visitor);
        this._enqueueConsentListener(function () {
            n.utk.save(n.privacySettings, n.privacyConsent);
            n.session.save();
        });
        for (var o = 0; o < this.userTokenListeners.length; o++)
            this.userTokenListeners[o](this.utk.visitor);
        for (var c = 0; c < this.cookieListeners.length; c++)
            this.cookieListeners[c](this.utk.get(), this.session.get(), this._getFingerprint());
        this.managedCookies = !0;
    }
}
