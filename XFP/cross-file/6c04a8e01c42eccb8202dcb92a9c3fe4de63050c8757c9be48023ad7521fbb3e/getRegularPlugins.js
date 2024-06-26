

export function getRegularPlugins() {
    var plugins = [];
    if (navigator.plugins) {
        for (var i = 0, l = navigator.plugins.length; i < l; i++) {
            if (navigator.plugins[i]) {
                plugins.push(navigator.plugins[i]);
            }
        }
    }
    if (this.pluginsShouldBeSorted()) {
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
    return this.map(plugins, function (p) {
        var mimeTypes = this.map(p, function (mt) {
            return [
                mt.type,
                mt.suffixes
            ].join('~');
        }).join(',');
        return [
            p.name,
            p.description,
            mimeTypes
        ].join('::');
    }, this);
}
