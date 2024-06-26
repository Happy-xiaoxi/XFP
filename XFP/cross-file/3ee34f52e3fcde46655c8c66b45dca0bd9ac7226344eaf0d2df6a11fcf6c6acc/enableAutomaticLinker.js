
export function enableAutomaticLinker() {
    var t = this;
    t.crossDomainLinkingEnabled = !0;
    t._manageCookies();
    if (this.cookie.getDomains() && !(this.cookie.getDomains().length <= 0)) {
        var e = [];
        hstc.utils.each(this.cookie.getDomains(), function (i, n) {
            if (!t.cookie.currentDomain || t.cookie.currentDomain !== n) {
                var r = n.replace(/\./g, '\\.');
                r = 0 === r.indexOf('\\.') ? r.replace(/^\\\./, '(^|\\.)') : '^' + r;
                e.push(r);
            }
        });
        var i = new RegExp('(' + e.join('|') + ')$');
        t._enqueueConsentListener(function () {
            t._iterateLinks(function (e) {
                return e.hostname && e.hostname !== t.context.getHostName() && e.hostname.match(i);
            });
        });
    }
}
