var e = window, g = document, p = {
        distro: 'TICF',
        id: 'TICF-' + new Date().getTime()
    };
var e = window, g = document, p = {
        distro: 'TICF',
        id: 'TICF-' + new Date().getTime()
    };


























export function _Ab(a) {
    var b, c = '';
    null === fa && zb();
    if (R)
        return !1;
    R = !0;
    var d = '';
    if (h.a) {
        var l = M(a);
        'undefined' !== typeof trackAttributionView && (c = '<img src="' + p.protocol + F + '/b/l?id=' + f.tyntIds() + '&g=' + a + '">');
        a = c + '<a style="color: #003399;" href="';
        d += h.ap + ' ';
        h.st && (d = d + a + l + '">' + Wa(X) + '</a> ');
        h.su && (d = d + a + l + '">' + Wa(l) + '</a>');
        0 < h.as.length && (d = d + '\n<br>' + h.as + ' ');
        0 < h.cc && (d = d + '\n<br>Under Creative Commons License: ' + a + p.protocol + wb[h.cc] + '">' + vb[h.cc] + '</a>');
        if (h.w || h.f)
            d += '\n<br>Follow us: ', h.w && (d = d + '<a href="' + p.protocol + Va + '/b/rw?id=' + f.tyntIds() + '&u=' + h.w + '" target="_blank">@' + h.w + ' on Twitter</a>'), h.w && h.f && (d += ' | '), h.f && (d = d + '<a href="' + p.protocol + Va + '/b/rf?id=' + f.tyntIds() + '&u=' + h.f + '" target="_blank">' + h.f + ' on Facebook</a>');
    }
    h.el && (0 < d.length && (d += '\n<br>'), d += h.el);
    var k, m;
    k = t('div', {}, {
        overflow: 'hidden',
        color: '#000000',
        backgroundColor: '#FFFFFF',
        textAlign: 'left',
        textDecoration: 'none',
        border: 'none'
    });
    if (g.selection && g.selection.createRange) {
        var n = x.scrollLeft || q.scrollLeft, u = x.scrollTop || q.scrollTop;
        m = t('div', {}, {
            overflow: 'hidden',
            position: 'absolute',
            left: n + 20 + 'px',
            top: u + 20 + 'px',
            width: '1px',
            height: '1px'
        });
        q.insertBefore(m, q.firstChild);
        var r = g.selection.createRange();
        k.innerHTML = h.t ? d + '<br><br>' + r.htmlText : r.htmlText + '<br><br>' + d;
        Ma(k);
        m.appendChild(g.createElement('br'));
        m.appendChild(k);
        d = q.createTextRange();
        d.moveToElementText(k);
        d.select();
        setTimeout(function () {
            q.removeChild(m);
            '' !== r.text && (r.select(), x.scrollLeft = n, q.scrollLeft = n, x.scrollTop = u, q.scrollTop = u);
            R = !1;
        }, 0);
    } else if (fa)
        b = e.getSelection(), m = t('div', {}, {
            height: 0,
            position: 'absolute',
            top: '-1000px'
        }), m.innerHTML = '<br>', h.t ? (q.insertBefore(m, q.firstChild), k.innerHTML = d + '<br><br>') : (q.appendChild(m), k.innerHTML = '<br>' + d + '<br>'), m.appendChild(k), d = g.createRange(), d.selectNode(k), b.addRange(d), e.setTimeout(function () {
            m.parentNode.removeChild(m);
            R = !1;
        }, 0);
    else {
        b = e.getSelection();
        var v = b.getRangeAt(0), d = t('span', { innerHTML: d });
        h.t ? (d.innerHTML += '<br/><br/>', k.appendChild(d), k.appendChild(v.cloneContents())) : (k.appendChild(v.cloneContents()), d.innerHTML = '<br/><br/>' + d.innerHTML, k.appendChild(d));
        Ma(k);
        k.style.width = 0.1;
        k.style.height = 0.1;
        k.style.position = 'absolute';
        k.style.top = '-1000px';
        k.style.left = '-1001px';
        k.appendChild(g.createElement('br'));
        d = k.innerText.length;
        q.insertBefore(k, q.firstChild);
        k.innerText.length != d && (k.style.overflow = '');
        b.selectAllChildren(k);
        setTimeout(function () {
            k.parentNode.removeChild(k);
            b.removeAllRanges();
            b.addRange(v);
            R = !1;
        }, 0);
    }
    return !0;
}
