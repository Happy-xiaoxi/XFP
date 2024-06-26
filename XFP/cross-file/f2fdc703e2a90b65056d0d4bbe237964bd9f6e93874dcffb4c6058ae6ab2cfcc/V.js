;
;
export function V() {
    f.methods & 268435456 && 'undefined' !== typeof Storage ? Ga(localStorage) : f.methods & 536870912 && 'undefined' !== typeof Storage ? Ga(sessionStorage) : 0 < Object.keys(p.bfd).length && e('bfd', p.bfd);
    void 0 != window.accertifyNamespace && (window.accertifyNamespace.sendPtno(), window.accertifyNamespace.sendAll(), 0 < W.length && e('uba', W));
    if (f.methods & 33554432) {
        for (var a = '', b = Ya(Fa(unescape(encodeURIComponent(X.stringify(t))))), c = 0; c < b.length; c++)
            a += String.fromCharCode(b[c]);
        return 'x9x91' + a;
    }
    return Ha.encode(Fa(X.stringify(t)));
}