import { getWebglVendorAndRenderer } from './getWebglVendorAndRenderer.js'
import { isWebGlSupported } from './isWebGlSupported.js'
import { isCanvasSupported } from './isCanvasSupported.js'

var webglVendorAndRendererKey = function (done) {
  if (isWebGlSupported()) {
    done(getWebglVendorAndRenderer())
    return
  }
  done()
}

export {
  webglVendorAndRendererKey
}
