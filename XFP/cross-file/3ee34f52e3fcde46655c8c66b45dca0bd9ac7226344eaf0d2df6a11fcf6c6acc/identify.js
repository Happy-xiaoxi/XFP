

export function identify(t, e) {
    e || this._manageCookies();
    this.identity ? this.identity.merge(t) : this.identity = new hstc.identities.Identity(t);
}
