


export function getPageDiagnostics() {
    var t = { type: 'hsAnalyticsDiag' };
    t.canonicalUrl = this.canonicalUrl;
    t.debugLogs = [];
    hstc.__logs && hstc.utils.each(hstc.__logs, function (e, i) {
        t.debugLogs.push(JSON.stringify(i));
    });
    hstc.__logs = [];
    t.trackingScripts = [];
    hstc.utils.each(hstc.find('#hs-analytics'), function (e, i) {
        t.trackingScripts.push(i.src);
    });
    return t;
}
