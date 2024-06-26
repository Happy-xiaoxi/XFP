export function pixelRatioKey(e) {
    console.log("pixelRatioKey")
    return this.options.excludePixelRatio || e.addPreprocessedComponent({
        key: 'pixel_ratio',
        value: this.getPixelRatio()
    }), e;
}
