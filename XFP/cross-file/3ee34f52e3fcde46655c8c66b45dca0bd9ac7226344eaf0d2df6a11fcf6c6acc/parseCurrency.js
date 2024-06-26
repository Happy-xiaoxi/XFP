









export function parseCurrency(t, e) {
    if ('number' == typeof t)
        return t;
    var i = t.match(/([^\d]*)([\d\.,]+)([^\d\.,]*)/);
    if (i) {
        var n, r = i[2], s = r.split('.'), o = r.split(',');
        n = s.length > 2 || 2 == s.length && s[1].length > 2 && (0 === o.length || s[0].length < o[0].length) || 2 == o.length && 2 == o[1].length ? o : s;
        var c = decimalPart = 0;
        if (n.length > 1) {
            decimalPart = n.pop();
            c = n.join('');
        } else
            c = n.join('');
        c = c.replace(/[\.,]/g, '');
        var a = parseInt(c);
        decimalPart && (a += parseFloat(decimalPart) / Math.pow(10, decimalPart.length));
        return a;
    }
    return null;
}
