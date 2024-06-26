export function pluginsShouldBeSorted(options) {
    var should = false;
    for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
        var re = options.plugins.sortPluginsFor[i];
        if (navigator.userAgent.match(re)) {
            should = true;
            break;
        }
    }
    return should;
}
