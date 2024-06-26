
export function _enqueuePrivacyCall(t, e) {
    var i = this._getHspQueue();
    e ? i.push([
        t,
        e
    ]) : i.push([t]);
}
