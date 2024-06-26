export function getWebglVendorAndRenderer() {
    try {
        var glContext = getWebglCanvas();
        var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info');
        var params = glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
        loseWebglContext(glContext);
        return params;
    } catch (e) {
        return null;
    }
}
