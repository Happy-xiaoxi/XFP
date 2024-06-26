export function getCookie(e) {
    var t = document.cookie.match(new RegExp('(?:^|; )' + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return t ? decodeURIComponent(t[1]) : void 0;
}
