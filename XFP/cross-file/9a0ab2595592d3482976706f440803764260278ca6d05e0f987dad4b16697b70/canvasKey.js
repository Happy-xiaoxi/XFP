;
;
export function canvasKey(keys) {
    if (!this.options.excludeCanvas && this.isCanvasSupported()) {
        keys.push({
            key: 'canvas',
            value: this.getCanvasFp()
        });
    }
    return keys;
}