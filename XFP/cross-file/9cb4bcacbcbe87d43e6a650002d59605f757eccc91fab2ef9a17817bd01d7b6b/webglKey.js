



export function webglKey(done, options) {
    if (isWebGlSupported()) {
        done(getWebglFp());
        return;
    }
    done(options.NOT_AVAILABLE);
}
