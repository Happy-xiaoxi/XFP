;
;
export function getRegularPluginsString() {
    return this.map(navigator.plugins, function (n) {
        var t = this.map(n, function (n) {
            return [
                n.type,
                n.suffixes
            ].join('~');
        }).join(',');
        return [
            n.name,
            n.description,
            t
        ].join('::');
    }, this).join(';');
}