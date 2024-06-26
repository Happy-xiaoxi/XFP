export function serialize(obj) {
    if ('string' == typeof obj) {
        return obj;
    }
    return Object.keys(obj).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }).join('&');
}
