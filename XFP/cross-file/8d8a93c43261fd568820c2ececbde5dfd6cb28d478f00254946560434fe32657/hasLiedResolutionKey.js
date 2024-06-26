export function hasLiedResolutionKey(e) {
    return (
      this.options.excludeHasLiedResolution ||
        e.push({
          key: "has_lied_resolution",
          value: this.getHasLiedResolution(),
        }),
      e
    );
  }