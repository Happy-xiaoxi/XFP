;
;
export function aa(a, b) {
    try {
        String.prototype.trim || (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        });
        for (var c = b.split(','), d = 0; d < c.length; d++)
            for (var h = c[d].trim(), g = a, f = h.split('.'), m = 0; m < f.length; m++)
                if (0 != m) {
                    var r = g[f[m]];
                    if (r)
                        m == f.length - 1 ? e(h, r.toString()) : g = r;
                    else
                        break;
                }
    } catch (u) {
        k(u);
    }
}