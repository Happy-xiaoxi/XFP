;
;
export function D(a) {
    var b;
    if (null == a || 'object' != typeof a)
        return a;
    if (a instanceof Date)
        return b = new Date(), b.setTime(a.getTime()), b;
    if (a instanceof Array) {
        b = [];
        for (var c = 0, d = a.length; c < d; c++)
            b[c] = D(a[c]);
        return b;
    }
    if (a instanceof Object) {
        b = {};
        for (c in a)
            a.hasOwnProperty(c) && (b[c] = D(a[c]));
        return b;
    }
    throw Error('\'');
}