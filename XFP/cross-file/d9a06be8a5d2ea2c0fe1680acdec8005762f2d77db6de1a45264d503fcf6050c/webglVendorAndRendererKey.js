

export function webglVendorAndRendererKey(keys) {
    if (!this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported()) {
        keys.addPreprocessedComponent({
            key: 'webgl_vendor',
            value: this.getWebglVendorAndRenderer()
        });
    }
    return keys;
}
