import { getWebglCanvas } from './getWebglCanvas.js'
export function getWebglVendorAndRenderer() {
    /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
  try {
      var glContext = getWebglCanvas()
      var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
      return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
  } catch (e) {
      return null
  }
}