;
;
export function jb(a) {
    var b = 'https://www.southwest.com/di/swa6/6.js';
    '__DEFAULT_IPV6JS' == b && (b = '//six.cdn-net.com/6.js');
    var c = a();
    a = document.createElement('script');
    a.type = 'text/javascript';
    a.async = !0;
    a.src = b + ('__DEFAULT_NAMESPACE' == collectorNamespaceName ? '' : '?namespace=' + collectorNamespaceName);
    b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
    window[collectorNamespaceName]._cc.six = function (a) {
        e('_six', a);
        c(!0);
    };
}