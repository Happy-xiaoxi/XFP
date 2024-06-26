export function getWebglVendorAndRenderer() {
    try {
        var glContext = this.getWebglCanvas();
        var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info');
        return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
    } catch (e) {
        return null;
    }
}
