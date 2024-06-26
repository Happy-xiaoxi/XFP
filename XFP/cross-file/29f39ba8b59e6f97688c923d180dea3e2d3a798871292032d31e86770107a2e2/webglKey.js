;
;
export function webglKey(keys) {
    if (this.options.excludeWebGL) {
        return keys;
    }
    if (!this.isWebGlSupported()) {
        return keys;
    }
    keys.push({
        key: 'webgl',
        value: this.getWebglFp()
    });
    return keys;
}