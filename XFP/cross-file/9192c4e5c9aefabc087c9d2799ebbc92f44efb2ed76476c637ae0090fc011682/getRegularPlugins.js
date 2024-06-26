export function getRegularPlugins() {
    for (var e = [], t = 0, n = navigator.plugins.length; t < n; t++)
      "Shockwave Flash" != navigator.plugins[t].name &&
        e.push(navigator.plugins[t]);
    return (
      this.pluginsShouldBeSorted() &&
        (e = e.sort(function (e, t) {
          return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
        })),
      this.map(
        e,
        function (e) {
          var t = this.map(e, function (e) {
            return [e.type, e.suffixes].join("~");
          }).join(",");
          return [e.name, e.description, t].join("::");
        },
        this
      )
    );
  }