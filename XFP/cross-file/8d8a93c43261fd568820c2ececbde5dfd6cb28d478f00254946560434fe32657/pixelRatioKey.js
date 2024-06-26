  export function pixelRatioKey(e) {
    return (
      this.options.excludePixelRatio ||
        e.push({ key: "pixel_ratio", value: this.getPixelRatio() }),
      e
    );
  }