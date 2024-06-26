






export function set(t, e, i) {
    var n, r, s = !1;
    (i = i || {}).minsToExpire ? (n = new Date()).setTime(n.getTime() + 1000 * i.minsToExpire * 60) : i.daysToExpire ? (n = new Date()).setTime(n.getTime() + 1000 * i.daysToExpire * 60 * 60 * 24) : i.expiryDate && i.expiryDate.toGMTString ? n = i.expiryDate : i.expiryDate && (n = new Date(i.expiryDate));
    if (void 0 !== n) {
        r = n.toGMTString();
        s = !0;
    }
    this._set(t, i.alreadyEncoded ? e : hstc.utils.encodeParam(e, !0), {
        expires: s ? ';expires=' + r : '',
        expiresTime: s ? n : null,
        path: ';path=' + (i.path ? i.path : '/'),
        domain: !this.cookiesToSubdomain && this.currentDomain ? ';domain=' + this.currentDomain : '',
        secure: this.secureCookie || i.secure ? ';secure' : '',
        sameSite: ';SameSite=Lax'
    });
}
