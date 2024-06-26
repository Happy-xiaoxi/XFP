export function webglKey(e) {
    return !this.options.excludeWebGL && this.isWebGlSupported() && e.addPreprocessedComponent({
        key: 'webgl',
        value: this.getWebglFp()
    }), e;
}
