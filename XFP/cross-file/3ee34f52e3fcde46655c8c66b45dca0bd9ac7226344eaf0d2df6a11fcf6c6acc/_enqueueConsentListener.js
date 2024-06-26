export function _enqueueConsentListener(t) {
    this._enqueuePrivacyCall('addPrivacyConsentListener', function (e) {
        e && (e.allowed || e.categories && e.categories.analytics) && t();
    });
}
