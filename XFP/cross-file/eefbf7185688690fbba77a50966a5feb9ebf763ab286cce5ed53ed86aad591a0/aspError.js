;
;
export function aspError(n, t, i) {
    return n != 'System.ASP_Error' && i.indexOf('<font face="Arial" size=2>') != -1 && i.indexOf('error') != -1 ? (i = i.replace(/([\<][\/]*(font|p)( face[\=][\"]Arial[\"] size[\=]2)*[\>]|^[\s]+|[\s]+$)/gi, '').replace(/[\s]+/gi, ' '), xSend('System.ASP_Error', 'loc=' + encodeURIComponent(document.location) + '&sv=' + encodeURIComponent(n) + '&dv=' + encodeURIComponent(t) + '&rv=' + encodeURIComponent(i), function () {
    }), i) : !1;
}