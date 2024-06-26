

export function wVaR(keys) {
    if (this.isWebGlSupported()) {
        keys.data.push({
            key: 'webgl_vendor',
            value: this.getWebglVendorAndRenderer()
        });
    }
    return keys;
}
