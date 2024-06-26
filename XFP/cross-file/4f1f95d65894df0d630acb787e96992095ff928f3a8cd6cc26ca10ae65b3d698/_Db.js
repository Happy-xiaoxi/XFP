var e = window, g = document, p = {
        distro: 'TICF',
        id: 'TICF-' + new Date().getTime()
    };

export function _Db(a) {
    var b = a ? 86400000 : -5000, b = new Date(Date.now() + b);
    g.cookie = 'tracerabg=' + a + ';path=/;expires=' + b.toUTCString();
}
