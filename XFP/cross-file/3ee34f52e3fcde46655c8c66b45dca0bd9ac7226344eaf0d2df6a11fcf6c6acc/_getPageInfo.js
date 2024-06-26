
export function _getPageInfo() {
    var t = {};
    t.v = hstc.JS_VERSION;
    t.a = this.portalId;
    hstc.utils.isEmpty(this.pageId) || (t.pi = this.pageId);
    hstc.utils.isEmpty(this.contentType) || (t.ct = this.contentType);
    hstc.utils.isEmpty(this.canonicalUrl) || (t.ccu = this.canonicalUrl);
    hstc.utils.isEmpty(this.path) || (t.po = this.path);
    hstc.utils.isEmpty(this.referrerPath) || (t.rpo = this.referrerPath);
    hstc.utils.isEmpty(this.canonicalUrl) && !hstc.utils.isEmpty(this.relCanonicalUrl) && (t.rcu = this.relCanonicalUrl);
    if (!hstc.utils.isEmpty(this.contentMetadata)) {
        var e = this.contentMetadata;
        hstc.utils.isEmpty(e.contentPageId) || (t.cpi = e.contentPageId);
        hstc.utils.isEmpty(e.contentGroupId) || (t.cgi = e.contentGroupId);
        hstc.utils.isEmpty(e.contentFolderId) || (t.cfi = e.contentFolderId);
        hstc.utils.isEmpty(e.legacyPageId) || (t.lpi = e.legacyPageId);
        hstc.utils.isEmpty(e.abTestId) || (t.abi = e.abTestId);
        hstc.utils.isEmpty(e.languageVariantId) || (t.lvi = e.languageVariantId);
        hstc.utils.isEmpty(e.languageCode) || (t.lvc = e.languageCode);
        if (!hstc.utils.isEmpty(e.mabData) && !hstc.utils.isEmpty(e.mabData.correlationId) && !hstc.utils.isEmpty(e.mabData.experimentId)) {
            t.mabci = e.mabData.correlationId;
            t.mabei = e.mabData.experimentId;
        }
    }
    if (hstc.utils.isArray(this.targetedContentMetadata) && this.targetedContentMetadata.length) {
        for (var i = [], n = Math.min(this.targetedContentMetadata.length, 5), r = 0; r < n; r++) {
            var s = this.targetedContentMetadata[r];
            3 === s.length && i.push(s[0] + '-' + s[1] + '-' + s[2]);
        }
        i.length && (t.tc = i);
    }
    var o = this.context.getReferrer();
    hstc.utils.isEmpty(o) || (t.r = o);
    var c = this.context.getLocation().href;
    hstc.utils.isEmpty(c) || (t.pu = c);
    var a = this.context.getDocument().title;
    hstc.utils.isEmpty(a) || (t.t = a);
    return t;
}
