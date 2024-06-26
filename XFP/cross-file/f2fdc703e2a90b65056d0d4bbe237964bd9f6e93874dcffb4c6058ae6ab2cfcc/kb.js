;
;
export function kb(a) {
    var b = 'https://www.southwest.com/di/swadvc/et.js';
    '__DEFAULT_ETAGJS' == b && (b = G + '/et.js');
    var c = a();
    a = document.createElement('script');
    a.type = 'text/javascript';
    a.async = !0;
    a.src = b;
    b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
    window[collectorNamespaceName]._cc.et = function (a) {
        e('_et', a);
        c(!0);
    };
}