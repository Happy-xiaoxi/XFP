import { isCanvasSupported } from "./isCanvasSupported.js"
import { getWebglCanvas } from "./getWebglCanvas.js"

var isWebGlSupported = function () {
  // code taken from Modernizr
  if (!isCanvasSupported() || !window.WebGLRenderingContext) {
    return false
  }

  var glContext = getWebglCanvas()
  if (glContext) {
    try {
      loseWebglContext(glContext)
    } catch (e) { /* The try block is optional, so let the main algorithm continue */ }
    return true
  } else {
    return false
  }
}

export {
  isWebGlSupported
}
