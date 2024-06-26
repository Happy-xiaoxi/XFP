export function map(e, t, n) {
    var i = [];
    return null == e
      ? i
      : this.nativeMap && e.map === this.nativeMap
      ? e.map(t, n)
      : (this.each(e, function (e, a, o) {
          i[i.length] = t.call(n, e, a, o);
        }),
        i);
  }