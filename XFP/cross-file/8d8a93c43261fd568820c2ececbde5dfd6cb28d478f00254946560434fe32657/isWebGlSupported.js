export function isWebGlSupported() {
    if (!this.isCanvasSupported()) return !1;
    var e,
      t = document.createElement("canvas");
    try {
      e =
        t.getContext &&
        (t.getContext("webgl") || t.getContext("experimental-webgl"));
    } catch (t) {
      e = !1;
    }
    return !!window.WebGLRenderingContext && !!e;
  }