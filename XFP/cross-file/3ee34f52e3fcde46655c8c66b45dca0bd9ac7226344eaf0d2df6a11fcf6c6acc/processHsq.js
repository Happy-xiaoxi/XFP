




export function processHsq(t) {
    var e = this.context.getWindow()[hstc.tracking.Runner.hsqParam];
    hstc.utils.search2dArray(e, 1, [
        'setTrackingDomain',
        'setCookiesToSubdomain',
        'addCookieDomain',
        'enableSecureCookie'
    ], t);
    this.tracker._initialize();
    hstc.utils.search2dArray(e, 1, hstc.tracking.Runner.priorityFunctions, t);
    hstc.utils.search2dArray(e, 1, ['trackPageView'], t);
    for (; e.length;)
        t(e.shift());
}
