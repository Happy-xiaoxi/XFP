











export function trackCustomBehavioralEvent(t) {
    if (t) {
        this._manageCookies();
        var e = {};
        hstc.utils.isDefined(t.name) && (e.n = hstc.utils.safeString(t.name));
        if (hstc.utils.isDefined(t.properties))
            for (var i in t.properties)
                if (hstc.utils.isDefined(i)) {
                    e['_' + i] = hstc.utils.safeString(t.properties[i]);
                }
        var n = this._determineTrackingDomain(), r = hstc.utils.extend(e, this._getClientInfo(), this._getPageInfo(), this._getUserInfo(), this._getPrivacyInfo()), s = 'https://' + n + '/__ptbe.gif?' + hstc.utils.param(r);
        this._loadImage(e, s);
    }
}
