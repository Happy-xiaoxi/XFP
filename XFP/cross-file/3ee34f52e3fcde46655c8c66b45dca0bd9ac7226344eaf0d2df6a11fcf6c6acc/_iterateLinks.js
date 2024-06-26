
export function _iterateLinks(t) {
    var e = this;
    hstc.utils.each(hstc.find('a'), function (i, n) {
        if (e.utk && e.utk.visitor)
            try {
                if (t(n))
                    try {
                        n.href = e.handleLink(n.href, n.target, !0);
                    } catch (t) {
                        n && n.href && hstc.utils.logError('Unable to modify link to ' + n.href, e._determineTrackingDomain());
                    }
            } catch (t) {
                hstc.log("'");
            }
    });
}
