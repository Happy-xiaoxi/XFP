import {isCanvasSupported} from './isCanvasSupported.js';
export function isWebGlSupported() {
    if (!isCanvasSupported()) {
        return false;
    }
    var glContext = getWebglCanvas();
    var isSupported = !!window.WebGLRenderingContext && !!glContext;
    loseWebglContext(glContext);
    return isSupported;
}