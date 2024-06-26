export function _getFingerprint() {
    var t = this;
    try {
        return new hstc.Fingerprint().get();
    } catch (e) {
        hstc.utils.logError(e, t._determineTrackingDomain());
        return null;
    }
}
