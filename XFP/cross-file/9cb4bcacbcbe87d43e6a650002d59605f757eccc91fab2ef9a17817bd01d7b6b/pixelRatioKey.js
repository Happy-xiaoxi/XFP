
export function pixelRatioKey(done, options) {
    done(window.devicePixelRatio || options.NOT_AVAILABLE);
}
