

export function wGl(keys) {
    if (this.isWebGlSupported()) {
        keys.data.push({
            key: 'webgl',
            value: this.getWebglFp()
        });
    }
    return keys;
}
