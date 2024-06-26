;
;
export function pixelRatioKey(keys) {
    if (!this.options.excludePixelRatio) {
        keys.push({
            key: 'pixel_ratio',
            value: this.getPixelRatio()
        });
    }
    return keys;
}