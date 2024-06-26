export function webglKey(e) {
    if (this.options.excludeWebGL) return e;
    if (!this.isWebGlSupported()) return e;
    try {
      e.push({ key: "webgl", value: this.getWebglFp() });
    } catch (e) {}
    return e;
  }