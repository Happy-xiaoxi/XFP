
export function _handlePrivacyPolicy() {
    var t = this;
    this._enqueuePrivacyCall('addPrivacyConsentListener', function (e) {
        var i = e && (e.allowed || e.categories && e.categories.analytics), n = e && e.categories;
        t.privacyConsent = {
            allowed: i,
            categories: n
        };
        if (!1 === i) {
            t.utk && t.utk.removeCookies();
            t.session && t.session.removeCookies();
            t.resetVisitorIdentity();
        }
    });
    this._enqueuePrivacyCall('addPrivacySettingsListener', function (e) {
        t.privacySettings = e;
    });
}
