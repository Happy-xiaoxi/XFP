export function pixelRatioKey(e) {
    console.log("pixelRatioKey")
    return this.options.excludePixelRatio || e.addPreprocessedComponent({
        key: 'pixel_ratio',
        value: getPixelRatio()
    }), e;
}


export function getPixelRatio() {
    return window.devicePixelRatio || '';
}
