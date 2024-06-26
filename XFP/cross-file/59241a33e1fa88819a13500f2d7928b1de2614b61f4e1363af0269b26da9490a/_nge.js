export function ge(e, t) {
  let o = {},
    n = !0;
  function s(s) {
    const i = e.getStyleSheetContents(t);
    if (!n)
      for (const e in i) {
        if (!i.hasOwnProperty(e)) continue;
        const t = i[e];
        o[e] !== t && s({ elementId: e, content: t });
      }
    (n = !1), (o = i);
  }
  return {
    detect(e, t) {
      const o = setInterval(() => {
        try {
          s(t);
        } catch (e) {
          r("Error collecting style sheet changes (%o)", e), clearInterval(o);
        }
      }, 500);
      try {
        s(t);
      } catch (e) {
        r("Error collecting style sheet changes (%o)", e);
      }
      var n;
      e(
        ((n = o),
        function () {
          clearInterval(n);
        })
      );
    },
    encode: (e) => ({ styleSheetChange: e }),
  };
}