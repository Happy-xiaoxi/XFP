
export function _set(t, e, i) {
    var n = i.expires + i.path + i.domain + i.sameSite + i.secure;
    this._writeCookie(t + '=' + e + n);
    var r = this.get(t);
    if ((!r || r != e) && '' != i.domain && (!i.expiresTime || i.expiresTime - new Date() > 0)) {
        n = i.expires + i.path + i.sameSite + i.secure;
        this._writeCookie(t + '=' + e + n);
    }
}
