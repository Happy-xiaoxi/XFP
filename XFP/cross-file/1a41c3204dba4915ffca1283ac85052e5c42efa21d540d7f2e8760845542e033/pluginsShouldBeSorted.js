export function pluginsShouldBeSorted() {
    for (var e = !1, t = 0, r = this.options.sortPluginsFor.length; t < r; t++) {
        var n = this.options.sortPluginsFor[t];
        if (navigator.userAgent.match(n)) {
            e = !0;
            break;
        }
    }
    return e;
}
