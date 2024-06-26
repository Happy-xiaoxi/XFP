

export function canvasKey(keys) {
    if (!this.options.excludeCanvas && this.isCanvasSupported()) {
        keys.addPreprocessedComponent({
            key: 'canvas',
            value: this.getCanvasFp()
        });
    }
    return keys;
}
