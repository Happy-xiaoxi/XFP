
export function _extractUtkOverride(t) {
    var e = this.context.getWindow().__hsUserToken;
    if (e) {
        var i = this.utk && this.utk.visitor == e, n = t.visitor == e, r = this.identity && !!this.identity.get().visitor;
        i || n || r || (this.utk || t.recovered ? this.identify({ visitor: e }, !0) : this.utk = hstc.tracking.Utk.parse(this.cookie, e, !0));
    }
}
