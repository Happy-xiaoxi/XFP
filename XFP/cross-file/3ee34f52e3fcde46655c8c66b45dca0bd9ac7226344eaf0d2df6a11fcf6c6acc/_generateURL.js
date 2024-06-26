
export function _generateURL(t) {
    var e = 'https://' + this._determineTrackingDomain() + '/__ptq.gif', i = hstc.utils.extend(t, this._getClientInfo(), this._getPageInfo(), this._getUserInfo(), this._getPrivacyInfo());
    return e + '?' + hstc.utils.param(i);
}
