export function get_q(e) {
    var t = window.location.search;
    return t = t.match(new RegExp(e + '=([^&=]+)')), t ? t[1] : '';
}
