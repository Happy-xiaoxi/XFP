

export function iframeType() {
    var ya = 0;
    var a = this.iframeEle(), b = ya;
    if (a)
        b = a.id && 0 <= a.id.search(/google_ads?_i?frame/) ? 6 : za;
    else
        try {
            window != window.top && (b = 'undefined' != typeof window.$sf ? Aa : ga);
        } catch (c) {
            b = ga, f.clog('iframeType: ' + c.message);
        }
    return b;
}
