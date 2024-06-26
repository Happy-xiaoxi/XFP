



export function canvasKey(done, options) {
    if (isCanvasSupported()) {
        done(getCanvasFp(options));
        return;
    }
    done(options.NOT_AVAILABLE);
}
