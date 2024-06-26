export function XMLCheckStatus(url) {
    try {
        var ajax = new CXMLRequest().GetXmlHttp();
        ajax.open('HEAD', url, false);
        ajax.send();
        return ajax.status;
    } catch (e) {
        return 9999;
    }
}
