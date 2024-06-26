
export function post(url, data) {
    var async = true;
    var method = 'POST';
    var XHR = 'onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    var body = data;
    var multipart = false;
    if (typeof data === 'object') {
        var boundary = String(Math.random()).slice(2);
        var boundaryMiddle = '--' + boundary + '\r\n';
        var boundaryLast = '--' + boundary + '--\r\n';
        var bodyParts = ['\r\n'];
        for (var key in data) {
            if (!data.hasOwnProperty(key))
                continue;
            bodyParts.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + data[key] + '\r\n');
        }
        multipart = true;
        body = bodyParts.join(boundaryMiddle) + boundaryLast;
    }
    if ('withCredentials' in xhr) {
        try {
            xhr.open(method, url, async);
            if (multipart) {
                xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
            }
        } catch (x) {
            return false;
        }
        xhr.send(body);
        xhr.onreadystatechange = function () {
            return 4 === xhr.readyState;
        };
    }
}
