

export function cvs(keys) {
    if (this.isCanvasSupported()) {
        keys.data.push({
            key: 'canvas',
            value: this.getCanvasFp()
        });
    }
    return keys;
}
