export function pe(e, t) {
  let o,
    n = {},
    s = !0;
  function i(i) {
    const r = e.getCanvasUrls(t, 2),
      a = [];
    if (!s)
      for (const e in r) {
        if (!r.hasOwnProperty(e)) continue;
        const t = r[e];
        (void 0 !== n[e] && n[e].length === t.length && n[e] === t) ||
          a.push(e);
      }
    if (((s = !1), (n = r), a.length > 0)) {
      const n = e.getCanvasUrls(t, 1);
      for (const e of a) i({ elementId: e, url: n[e] });
      clearTimeout(o),
        (o = setTimeout(() => {
          const o = e.getCanvasUrls(t, 0);
          for (const e of a) i({ elementId: e, url: o[e] });
        }, 1e3));
    }
  }
  return {
    detect(e, t) {
      const o = setInterval(() => {
        try {
          i(t);
        } catch (e) {
          r("Error collecting canvas changes (%o)", e), clearInterval(o);
        }
      }, 200);
      try {
        i(t);
      } catch (e) {
        r("Error collecting canvas changes (%o)", e);
      }
      var n;
      e(
        ((n = o),
        function () {
          clearInterval(n);
        })
      );
    },
    encode: (e) => ({ canvasChange: e }),
  };
}