






export function getBrowserType() {
    if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        return 'IE';
    }
    if (navigator.userAgent.indexOf('Firefox') != -1) {
        return 'Firefox';
    }
    if (navigator.userAgent.indexOf('TheWorld') != -1 || navigator.userAgent.indexOf('Edge') != -1 || navigator.userAgent.indexOf('MetaSr') != -1 || navigator.userAgent.indexOf('BIDUBrowser') != -1 || navigator.userAgent.indexOf('QQBrowser') != -1) {
        return 'other';
    }
    if (navigator.userAgent.indexOf('Chrome') != -1) {
        var mimeTypes = navigator.mimeTypes;
        for (var mt in mimeTypes) {
            if (mimeTypes[mt]['type'] == 'application/vnd.chromium.remoting-viewer') {
                return '360';
            }
        }
        return 'Chrome';
    }
}
