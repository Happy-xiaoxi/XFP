export function canvasKey(e) {
    return !this.options.excludeCanvas && this.isCanvasSupported() && e.addPreprocessedComponent({
        key: 'canvas',
        value: this.getCanvasFp()
    }), e;
}
