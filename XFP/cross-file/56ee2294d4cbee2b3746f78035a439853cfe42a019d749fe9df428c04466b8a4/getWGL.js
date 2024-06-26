export function getWGL() {
    var canvas = d.createElement('canvas')
    if (canvas.getContext) {
      var gl = canvas.getContext('webgl') || canvas.getContext('webgl-experimental')
      if (gl) {
        var debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
        if (debugInfo) {
          return {
            ven: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            ren: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
          }
        }
      }
    }
  }