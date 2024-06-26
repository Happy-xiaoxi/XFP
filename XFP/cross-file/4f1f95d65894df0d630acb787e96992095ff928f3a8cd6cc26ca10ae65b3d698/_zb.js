















export function _zb() {
    var a;
    fa = !1;
    if ('function' === typeof e.getSelection && 'function' === typeof g.createRange) {
        var b = e.getSelection();
        if ('function' === typeof b.addRange && 'function' === typeof b.removeAllRanges && 'number' === typeof b.rangeCount) {
            var c = [];
            for (a = 0; a < b.rangeCount; a++)
                c.push(b.getRangeAt(a));
            a = g.body.appendChild(g.createElement('div'));
            a.contentEditable = 'false';
            var d = a.appendChild(g.createTextNode('\x100\x100\x100')), f = g.createRange(), h = f.cloneRange();
            f.setStart(d, 0);
            h.setEnd(d, 3);
            h.setStart(d, 2);
            b.removeAllRanges();
            b.addRange(f);
            try {
                b.addRange(h);
            } catch (k) {
            }
            fa = 2 == b.rangeCount;
            g.body.removeChild(a);
            b.removeAllRanges();
            f.detach();
            h.detach();
            for (a = 0; a < c.length; a++)
                b.addRange(c[a]);
        }
    }
}
