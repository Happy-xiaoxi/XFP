export function _Ea(a) {
    var b = [], c = '', d;
    for (d in a)
        a.hasOwnProperty(d) && (b.push(c, d, '=', a[d]), c = '&');
    return b.join('');
}
