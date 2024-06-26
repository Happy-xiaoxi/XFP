export function _getPrivacyInfo() {
    var t = {};
    this.privacySettings && ('OPT_IN' == this.privacySettings.mode && this.privacySettings.hideDecline ? t.pt = 0 : 'OPT_IN' == this.privacySettings.mode ? t.pt = 1 : 'NO_COOKIES' == this.privacySettings.mode ? t.pt = 2 : 'COOKIES_BY_CATEGORY' == this.privacySettings.mode && (t.pt = 3));
    this.privacyConsent && this.privacyConsent.allowed || (t.ce = !1);
    t.cc = 0;
    this.privacyConsent && this.privacyConsent.categories && (t.cc = (this.privacyConsent.categories.necessary ? 1 : 0) + (this.privacyConsent.categories.analytics ? 2 : 0) + (this.privacyConsent.categories.advertisement ? 4 : 0) + (this.privacyConsent.categories.functionality ? 8 : 0));
    return t;
}
