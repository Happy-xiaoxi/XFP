
export function handleSearchLink(t) {
    var e = this;
    e._enqueueConsentListener(function () {
        e.handleLink(t, null, !0);
    });
}
