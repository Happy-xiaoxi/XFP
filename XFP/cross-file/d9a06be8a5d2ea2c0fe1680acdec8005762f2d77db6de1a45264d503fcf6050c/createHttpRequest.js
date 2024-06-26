export function createHttpRequest() {
    try {
        var httpRequest = new ActiveXObject('MSXML2.XMLHTTP');
    } catch (e) {
        var httpRequest = new XMLHttpRequest();
    }
    return httpRequest;
}
