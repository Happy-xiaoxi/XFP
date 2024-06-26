export function _safeCallListener(t, e) {
    var i = this;
    try {
        t(e);
    } catch (t) {
        hstc.utils.logError(t, i._determineTrackingDomain());
    }
}
