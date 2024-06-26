  
  import { getCanvasFp } from './getCanvasFp.js'
  
  var canvasKey = function (done, options) {
    if (isCanvasSupported()) {
      done(getCanvasFp(options))
      return
    }
    done(options.NOT_AVAILABLE)
  }

  export { canvasKey }