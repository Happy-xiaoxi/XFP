export function pluginsShouldBeSorted() {
    var should = false;
    for (var i = 0, l = this.options.sortPluginsFor.length; i < l; i++) {
        var re = this.options.sortPluginsFor[i];
        if (navigator.userAgent.match(re)) {
            should = true;
            break;
        }
    }
    return should;
}
