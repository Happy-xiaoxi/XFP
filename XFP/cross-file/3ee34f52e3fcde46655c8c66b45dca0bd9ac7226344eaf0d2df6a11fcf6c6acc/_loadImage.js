
export function _loadImage(t, e) {
    if (!this.limitTrackingToCookieDomains || this.cookie.currentDomain) {
        if (!this._hasDoNotTrack() && this.trackingEnabled) {
            hstc.log('Sending Request');
            t && hstc.log(t);
            e = e || this._generateURL(t);
            hstc.log(e);
            hstc.utils.loadImage(e, 0);
        }
    } else
        try {
            hstc.log('Invalid domain for portal ' + this.portalId + ': ' + this.context.getHostName());
        } catch (t) {
        }
}
