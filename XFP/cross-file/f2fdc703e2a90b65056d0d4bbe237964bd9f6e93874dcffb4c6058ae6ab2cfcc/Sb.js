;
;
export function sb() {
    if (navigator.plugins) {
        for (var a = {}, b = {}, c = 0; c < navigator.plugins.length; c++) {
            var d = navigator.plugins[c];
            d.filename && d.name && e('plugin-' + d.name + '-filename', d.filename);
            d.description && d.name && e('plugin-' + d.name + '-desc', d.description);
            for (var h = 0; h < d.length; h++)
                if (d[h].type && (b[d[h].type] = !0), d[h].suffixes) {
                    var g = d[h].suffixes.split(',');
                    if (g && 0 < g.length)
                        for (var f = 0; f < g.length; f++)
                            a[g[f]] = !0;
                }
        }
        e('plugin-suffixes', Qa(a).join(','));
        e('plugin-mimes', Qa(b).join(','));
    }
}