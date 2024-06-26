



export function isWeChat() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('mobile') != -1 && ua.indexOf('micromessenger') != -1 && ua.indexOf('wxwork') == -1) {
        return true;
    }
    return false;
}
