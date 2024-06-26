import { getWebglFp } from './getWebglFp.js'
import { isWebGlSupported } from './isWebGlSupported.js'

var webglKey = function (done, options) {
    if (isWebGlSupported()) {
      done(getWebglFp())
      return
    }
    done(options.NOT_AVAILABLE)
  }


  export { webglKey }