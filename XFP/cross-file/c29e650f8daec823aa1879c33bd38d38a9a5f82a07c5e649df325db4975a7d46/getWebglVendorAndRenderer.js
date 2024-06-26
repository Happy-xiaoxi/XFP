export function getWebglVendorAndRenderer() {
    try {
        var e = this.getWebglCanvas(), t = e.getExtension('WEBGL_debug_renderer_info');
        return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + '~' + e.getParameter(t.UNMASKED_RENDERER_WEBGL);
    } catch (e) {
        return null;
    }
}
