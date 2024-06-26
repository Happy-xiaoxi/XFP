

export function getCookie(name, type) {
    var search = name + '=';
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(';', offset);
            if (end == -1) {
                end = document.cookie.length;
            }
            if (type == 'u') {
                return unescape(document.cookie.substring(offset, end));
            }
            return decodeURI(document.cookie.substring(offset, end));
        }
    }
    return '';
}
