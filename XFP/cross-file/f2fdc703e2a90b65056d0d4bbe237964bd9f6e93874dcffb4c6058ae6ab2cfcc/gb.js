;
;
export function Gb() {
    for (var a = window.performance.getEntriesByType('resource'), b = [], c = {}, d = 0; d < a.length; d++) {
        var h = a[d], g = new URL(h.name).host;
        g in c ? c[g].push(h) : c[g] = Array(h);
    }
    for (var v in c)
        b.push(v);
    e('external-hosts', b);
    return b;
}