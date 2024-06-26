



export function webglVendorAndRendererKey(done) {
    if (isWebGlSupported()) {
        done(getWebglVendorAndRenderer());
        return;
    }
    done();
}
