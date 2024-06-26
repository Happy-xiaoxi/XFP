

export function getRegularPlugins(options) {
    if (navigator.plugins == null) {
        return options.NOT_AVAILABLE;
    }
    var plugins = [];
    for (var i = 0, l = navigator.plugins.length; i < l; i++) {
        if (navigator.plugins[i]) {
            plugins.push(navigator.plugins[i]);
        }
    }
    if (pluginsShouldBeSorted(options)) {
        plugins = plugins.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    }
    return map(plugins, function (p) {
        var mimeTypes = map(p, function (mt) {
            return [
                mt.type,
                mt.suffixes
            ];
        });
        return [
            p.name,
            p.description,
            mimeTypes
        ];
    });
}
