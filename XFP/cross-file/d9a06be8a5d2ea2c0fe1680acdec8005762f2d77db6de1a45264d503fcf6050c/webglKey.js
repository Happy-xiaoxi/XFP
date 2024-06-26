

export function webglKey(keys) {
    if (!this.options.excludeWebGL && this.isWebGlSupported()) {
        keys.addPreprocessedComponent({
            key: 'webgl',
            value: this.getWebglFp()
        });
    }
    return keys;
}
