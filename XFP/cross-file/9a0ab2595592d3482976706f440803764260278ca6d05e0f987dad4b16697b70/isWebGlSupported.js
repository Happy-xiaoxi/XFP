;
;
export function isWebGlSupported() {
    if (!this.isCanvasSupported()) {
        return false;
    }
    var canvas = document.createElement('canvas'), glContext;
    try {
        glContext = canvas.getContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
        glContext = false;
    }
    return !!window.WebGLRenderingContext && !!glContext;
}