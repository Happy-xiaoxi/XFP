var e = window, g = document, p = {
        distro: 'TICF',
        id: 'TICF-' + new Date().getTime()
    };

export function _Fb(a) {
    var b;
    a: {
        b = g.getElementsByTagName('script');
        for (var c = 0; c < b.length; c++)
            if (/\/show_afs_search\.js/i.test(b[c].src)) {
                b = !0;
                break a;
            }
        b = !1;
    }
    !b && Eb(e.location) && (Tynt.b = a || K(e.location.href), e.location.replace(e.location.href + ('#' === e.location.href[e.location.href.length - 1] ? '' : '#') + 'axzz' + Tynt.b));
}
