export function webglVendorAndRendererKey(e) {
    return !this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported() && e.addPreprocessedComponent({
        key: 'webgl_vendor',
        value: this.getWebglVendorAndRenderer()
    }), e;
}
