import {H} from './H.js';
var e = window, g = document, p = {
        distro: 'TICF',
        id: 'TICF-' + new Date().getTime()
    };
var e = window, g = document, p = {
        distro: 'TICF',
        id: 'TICF-' + new Date().getTime()
    };


export function _ja(a) {
    'complete' == g.readyState ? a() : H(e, 'load', function (b) {
        setTimeout(function () {
            'undefined' != typeof g.readyState || V || (g.readyState = 'complete');
            a();
        }, 10);
    });
}