

export function handleSearchLinks() {
    var t = this;
    t._manageCookies();
    var e = new RegExp('(/_hcms/analytics/search/conversion|/_hcms/analytics/search/request)');
    t._enqueueConsentListener(function () {
        t._iterateLinks(function (t) {
            return t.href.match(e);
        });
    });
}
