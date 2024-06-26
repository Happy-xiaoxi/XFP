


export function _bb(a) {
    a = t('script', {
        async: 'async',
        referrerPolicy: 'unsafe-url',
        src: p.protocol + a
    });
    var b = g.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
}
