export function each(e, t, n) {
    if (null !== e)
      if (this.nativeForEach && e.forEach === this.nativeForEach)
        e.forEach(t, n);
      else if (e.length === +e.length) {
        for (var i = 0, a = e.length; i < a; i++)
          if (t.call(n, e[i], i, e) === {}) return;
      } else
        for (var o in e)
          if (e.hasOwnProperty(o) && t.call(n, e[o], o, e) === {}) return;
  }