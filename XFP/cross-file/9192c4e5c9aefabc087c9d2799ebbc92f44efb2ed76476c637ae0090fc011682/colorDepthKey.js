  export function colorDepthKey(e) {
    return (
      this.options.excludeColorDepth ||
        e.push({ key: "color_depth", value: screen.colorDepth || -1 }),
      e
    );
  }