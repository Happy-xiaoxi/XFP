
export function _initialize() {
    this._handlePrivacyPolicy();
    this._handleMigrations();
    this._setRelCanonicalUrl();
    this._initPageDiagnostics();
}
