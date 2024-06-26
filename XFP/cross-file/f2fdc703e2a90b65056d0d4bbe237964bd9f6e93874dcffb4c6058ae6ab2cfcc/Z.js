;
;
export function Z(a, b) {
    try {
        var c = a || G, d = null;
        try {
            d = document.createElement('<iframe name="' + encodeURIComponent(y) + '-' + K + '"/>');
        } catch (e) {
            d = document.createElement('iframe'), d.name = encodeURIComponent(y + '-' + K), k(e);
        }
        d.id = encodeURIComponent(y) + '-' + K;
        d.width = '0';
        d.height = '0';
        d.style.display = 'none';
        d.border = '0';
        document.body.appendChild(d);
        var g = d.contentDocument || d.contentWindow.document;
        g.open();
        g.write('<html><body></body></html>');
        g.close();
        var v = [];
        v.push('t=' + encodeURIComponent(y));
        v.push('x=' + encodeURIComponent(K));
        for (var m in L)
            v.push(m + '=' + encodeURIComponent(L[m]));
        var f = g.createElement('form');
        f.enctype = 'multipart/form-data';
        f.method = 'POST';
        f.action = c + '/s2?' + v.join('&');
        f.acceptCharset = 'UTF-8';
        f.target = d.id;
        K += 1;
        var u = g.createElement('input');
        u.name = '_f';
        u.type = 'hidden';
        u.value = V();
        f.appendChild(u);
        g.body.appendChild(f);
        c = function () {
            b && b();
        };
        d.attachEvent ? d.attachEvent('onload', c) : d.addEventListener ? d.addEventListener('load', c, !1) : d.onload = c;
        f.submit();
    } catch (z) {
        b(z), k(z);
    }
}