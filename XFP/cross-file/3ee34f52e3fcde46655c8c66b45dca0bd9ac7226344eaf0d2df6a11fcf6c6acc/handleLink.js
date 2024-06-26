






export function handleLink(t, e, i) {
    var n = t, r = this._getFingerprint();
    if (null !== r) {
        n = hstc.utils.updateQueryStringParameter(n, '__hstc', this.utk.get());
        n = hstc.utils.updateQueryStringParameter(n, '__hssc', this.session.get());
        n = hstc.utils.updateQueryStringParameter(n, '__hsfp', r);
    }
    if (i)
        return n;
    this.context.getWindow().open(n, e || '_self');
}
