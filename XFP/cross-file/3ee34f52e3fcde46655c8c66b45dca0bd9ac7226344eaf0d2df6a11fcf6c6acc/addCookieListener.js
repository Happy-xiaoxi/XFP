
export function addCookieListener(t) {
    var e = null, i = null;
    this.utk && this.utk.visitor && (e = this.utk.get());
    this.session && (i = this.session.get());
    (e || i) && t(e, i, this._getFingerprint());
    this.cookieListeners.push(t);
}
