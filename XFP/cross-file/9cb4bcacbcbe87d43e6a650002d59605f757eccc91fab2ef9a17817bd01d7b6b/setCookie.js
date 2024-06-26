


export function setCookie(name, value, day) {
    var day = day || 0;
    var expires = '';
    if (day > 0) {
        var d = new Date();
        d.setTime(d.getTime() + day * 24 * 60 * 60 * 1000);
        var expires = ' expires=' + d.toGMTString() + '; ';
    }
    document.cookie = name + '=' + value + ';' + expires + 'path=/;SameSite=None; Secure';
}
