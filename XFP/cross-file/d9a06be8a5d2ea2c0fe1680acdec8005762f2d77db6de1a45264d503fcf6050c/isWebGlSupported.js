

export function isWebGlSupported() {
    if (!this.isCanvasSupported()) {
        return false;
    }
    var glContext = this.getWebglCanvas();
    return !!window.WebGLRenderingContext && !!glContext;
}
