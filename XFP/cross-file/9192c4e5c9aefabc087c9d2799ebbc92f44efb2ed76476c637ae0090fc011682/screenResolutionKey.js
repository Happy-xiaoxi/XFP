  export function screenResolutionKey(e) {
    return this.options.excludeScreenResolution
      ? e
      : this.getScreenResolution(e);
  }