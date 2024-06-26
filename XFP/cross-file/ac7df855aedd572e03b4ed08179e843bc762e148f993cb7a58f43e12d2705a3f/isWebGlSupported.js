export function isWebGlSupported() {
    if (!this.isCanvasSupported())
        return !1;
    var e = this.getWebglCanvas();
    return !!window.WebGLRenderingContext && !!e;
}
