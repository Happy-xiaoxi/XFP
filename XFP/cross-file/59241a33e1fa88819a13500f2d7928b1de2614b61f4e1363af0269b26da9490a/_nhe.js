export function he(e, t) {
  let o = {},
    n = !0;
  function s(s) {
    const i = e.getMaskedElementsSizes(t);
    if (!n)
      for (const e in i) {
        if (!i.hasOwnProperty(e)) continue;
        const t = i[e];
        o[e] !== t && s({ elementId: e, size: t });
      }
    (n = !1), (o = i);
  }
  return {
    detect(e, t) {
      const o = setInterval(() => {
        try {
          s(t);
        } catch (e) {
          r("Error collecting masked elements changes (%o)", e),
            clearInterval(o);
        }
      }, 500);
      try {
        s(t);
      } catch (e) {
        r("Error collecting masked elements changes (%o)", e);
      }
      var n;
      e(
        ((n = o),
        function () {
          clearInterval(n);
        })
      );
    },
    encode: (e) => ({ maskedElementSizeChange: e }),
  };
}