export function _e(n) {
  var i = window.performance;
  n.timing.vmStart = Date.now();
  var o;
  return {
    cores:
      ((n.timing.coresStart = Date.now()),
      navigator.hardwareConcurrency && (o = navigator.hardwareConcurrency),
      (n.timing.coresTiming = (Date.now() - n.timing.coresStart).toFixed(2)),
      o),
    gpu: (function () {
      var i;
      n.timing.gpuStart = Date.now();
      try {
        var o = document.createElement("canvas");
        if (void 0 === o || void 0 === o.getContext) return;
        var a = o.getContext("webgl") || o.getContext("experimental-webgl");
        if (a) {
          if (!("getExtension" in a) || !("getParameter" in a)) return;
          var r = a.getExtension("WEBGL_debug_renderer_info");
          r &&
            (i = {
              vendor: a.getParameter(r.UNMASKED_VENDOR_WEBGL),
              renderer: a.getParameter(r.UNMASKED_RENDERER_WEBGL),
            });
        }
      } catch (i) {
        S(i, n, t.vm, e.P2);
      }
      var c = {
        vendor: null == i ? void 0 : i.vendor,
        renderer: null == i ? void 0 : i.renderer,
      };
      return (
        (n.timing.gpuTiming = (Date.now() - n.timing.gpuStart).toFixed(2)), c
      );
    })(),
    jsMem: (function () {
      var e;
      if (
        ((n.timing.jsMemStart = Date.now()), "memory" in i && window.chrome)
      ) {
        var t = i.memory;
        e = {
          usedJSHeapSize: t.usedJSHeapSize,
          totalJSHeapSize: t.totalJSHeapSize,
          jsHeapSizeLimit: t.jsHeapSizeLimit,
        };
      }
      var o = {
        usedJSHeapSize: null == e ? void 0 : e.usedJSHeapSize,
        totalJSHeapSize: null == e ? void 0 : e.totalJSHeapSize,
        jsHeapSizeLimit: null == e ? void 0 : e.jsHeapSizeLimit,
      };
      return (
        (n.timing.jsMemTiming = (Date.now() - n.timing.jsMemStart).toFixed(
          2
        )),
        o
      );
    })(),
    perfNav: (function () {
      n.timing.perfNavStart = Date.now();
      var e = null == i ? void 0 : i.timing;
      return (
        (n.timing.perfNavTiming = (
          Date.now() - n.timing.perfNavStart
        ).toFixed(2)),
        e
      );
    })(),
    timing: {
      cores: n.timing.coresTiming,
      gpu: n.timing.gpuTiming,
      jsMem: n.timing.jsMemTiming,
      perfNav: n.timing.perfNavTiming,
      total: (Date.now() - n.timing.vmStart).toFixed(2),
    },
  };
}