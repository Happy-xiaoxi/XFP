
import { getWebglCanvas } from './getWebglCanvas.js'
import { isCanvasSupported } from './isCanvasSupported.js'

export function isWebGlSupported() {
    // code taken from Modernizr
  if (!isCanvasSupported()) {
    return false
  }

  var glContext = getWebglCanvas()
  return !!window.WebGLRenderingContext && !!glContext
}
