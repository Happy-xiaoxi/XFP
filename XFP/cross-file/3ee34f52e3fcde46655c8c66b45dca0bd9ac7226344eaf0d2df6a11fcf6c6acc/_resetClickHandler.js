
export function _resetClickHandler(t) {
    var e = 'data-hs-event-' + hstc.utils.hashString(t.eventId), i = !t.opts.url || this.urlMatches(t.opts.url);
    try {
        hstc.utils.each(hstc.find(t.selector), function (n, r) {
            var s = '1' == r.getAttribute(e);
            if (s && !i) {
                hstc.utils.removeEventListener(r, 'mousedown', t.handler);
                r.removeAttribute(e);
            } else if (!s && i) {
                hstc.utils.addEventListener(r, 'mousedown', t.handler);
                r.setAttribute(e, '1');
            }
        });
    } catch (e) {
        hstc.log('Bad selector for ' + this.portalId + ': ' + t.selector + ', for event ' + t.eventId);
    }
}
