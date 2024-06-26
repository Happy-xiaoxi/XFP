export function get(url, data) {
    var async = true;
    var method = 'GET';
    var xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
        try {
            xhr.open(method, url + '?' + advcake_helper.queryBuilder(data), async);
        } catch (x) {
            return false;
        }
        xhr.send();
        xhr.onreadystatechange = function () {
            return 4 === xhr.readyState;
        };
    }
}
