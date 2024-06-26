export function pluginsShouldBeSorted() {
    for (
      var e = !1, t = 0, n = this.options.sortPluginsFor.length;
      t < n;
      t++
    ) {
      var i = this.options.sortPluginsFor[t];
      if (navigator.userAgent.match(i)) {
        e = !0;
        break;
      }
    }
    return e;
  }