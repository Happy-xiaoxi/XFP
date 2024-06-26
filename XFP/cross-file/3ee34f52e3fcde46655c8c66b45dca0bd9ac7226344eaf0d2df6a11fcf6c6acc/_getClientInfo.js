
export function _getClientInfo() {
    var t = {}, e = this.context.getScreen();
    if (e) {
        t.sd = e.width + 'x' + e.height;
        t.cd = e.colorDepth + '-bit';
    }
    var i = this.context.getCharacterSet();
    hstc.utils.isEmpty(i) || (t.cs = i);
    var n = this.context.getNavigator(), r = n.language ? n.language : n.browserLanguage ? n.browserLanguage : '';
    hstc.utils.isEmpty(r) || (t.ln = hstc.utils.makeLowerCase(r));
    if (!this._hasDoNotTrack()) {
        var s = this._getFingerprint();
        null !== s && (t.bfp = s);
    }
    return t;
}
