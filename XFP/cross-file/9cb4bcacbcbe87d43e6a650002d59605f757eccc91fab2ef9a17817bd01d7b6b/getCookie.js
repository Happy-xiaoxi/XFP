
export function getCookie(name) {
    var cookie = document.cookie;
    var temp = cookie.split('; ');
    for (var i = 0; i < temp.length; i++) {
        var ks = temp[i].split('=');
        if (ks[0] == name) {
            return ks[1];
        }
    }
    return '';
}
