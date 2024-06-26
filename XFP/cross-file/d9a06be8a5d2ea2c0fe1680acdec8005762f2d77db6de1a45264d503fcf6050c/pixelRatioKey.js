
export function pixelRatioKey(keys) {
    if (!this.options.excludePixelRatio) {
        keys.addPreprocessedComponent({
            key: 'pixel_ratio',
            value: this.getPixelRatio()
        });
    }
    return keys;
}
