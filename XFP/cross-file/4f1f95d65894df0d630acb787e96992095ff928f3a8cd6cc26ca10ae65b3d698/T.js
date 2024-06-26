

export function T(a) {
    var b = T.options;
    a = b.parser[b.strictMode ? 'strict' : 'loose'].exec(a);
    for (var c = {}, d = 14; d--;)
        c[b.key[d]] = a[d] || '';
    c[b.q.name] = {};
    c[b.key[12]].replace(b.q.parser, function (a, d, e) {
        d && (c[b.q.name][d] = e);
    });
    return c;
}
