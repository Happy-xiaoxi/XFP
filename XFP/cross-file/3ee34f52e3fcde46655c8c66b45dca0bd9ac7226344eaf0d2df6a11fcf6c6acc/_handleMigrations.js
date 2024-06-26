
export function _handleMigrations() {
    var t = this.cookie.get(hstc.tracking.Utk.LEGACY_COOKIE) || window.hubspotutk, e = this.cookie.get(hstc.tracking.Utk.COOKIE);
    if (!hstc.utils.isEmpty(t) && /[0123456789abcdef]{32}/.test(t) && hstc.utils.isEmpty(e)) {
        var i = hstc.tracking.Utk.parse(this.cookie, t);
        this._manageCookies(i);
    }
    hstc.utils.isEmpty(this.cookie.get('hsfirstvisit')) || this.cookie.remove('hsfirstvisit');
}
