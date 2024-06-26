;
;
export function elog() {
    var t, n;
    if (typeof exp == 'object') {
        for (t = [], n = 0; n < exp.length; n++)
            t.push(exp[n].v[0] + ' (' + exp[n].id + ') = ' + exp[n].n.toUpperCase() + ' (' + exp[n].v[exp[n].n == 'a' ? 1 : 2] + ')');
        t.sort();
        console.log(t.join('\n'));
    }
}