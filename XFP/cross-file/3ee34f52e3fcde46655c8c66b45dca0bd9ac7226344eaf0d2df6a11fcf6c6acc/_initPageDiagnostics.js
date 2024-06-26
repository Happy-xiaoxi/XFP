
export function _initPageDiagnostics() {
    if (document.location.hash.indexOf('#hsdbg') > -1) {
        var t = /^https:\/\/(app|local)(-[a-z]{2}[0-9]{1})?\.hubspot(qa)?\.com/;
        hstc.utils.addEventListener(this.context.getWindow(), 'message', function (e) {
            'hsAnalyticsDiag' === e.data && e.source && e.source.postMessage && t.test(e.origin) && e.source.postMessage(this.getPageDiagnostics(), e.origin);
        }.bind(this));
    }
}
