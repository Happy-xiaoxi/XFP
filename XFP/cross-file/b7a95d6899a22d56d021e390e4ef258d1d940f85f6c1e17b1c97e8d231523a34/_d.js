export function d(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
      if (null == n) return;
      var i,
        o,
        a = [],
        r = !0,
        c = !1;
      try {
        for (
          n = n.call(e);
          !(r = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t);
          r = !0
        );
      } catch (e) {
        (c = !0), (o = e);
      } finally {
        try {
          r || null == n.return || n.return();
        } finally {
          if (c) throw o;
        }
      }
      return a;
    })(e, t) ||
    f(e, t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}