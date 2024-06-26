



export function setCookie(name, value) {
    var today = new Date();
    var expires = new Date();
    expires.setTime(today.getTime() + 1000 * 60 * 60 * 24 * 365);
    document.cookie = name + '=' + escape(value) + '; expires=' + expires.toGMTString();
}
