


export function resetVisitorIdentity() {
    this.hasResetVisitor = !0;
    this.utk = hstc.tracking.Utk.regenerate(this.cookie);
    this.session = hstc.tracking.Session.regenerate(this.cookie);
    this.identity = null;
    this._manageCookies(this.utk, this.session, !0);
}
