


export function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    method = method.toUpperCase();
    if ('withCredentials' in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != 'undefined') {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    }
    return xhr;
}
