export function canvasKey(e) {
    return (
      !this.options.excludeCanvas &&
        this.isCanvasSupported() &&
        e.push({ key: "canvas", value: this.getCanvasFp() }),
      e
    );
  }