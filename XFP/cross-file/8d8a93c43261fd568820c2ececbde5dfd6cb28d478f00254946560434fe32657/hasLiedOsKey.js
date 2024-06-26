export function hasLiedOsKey(e) {
    return (
      this.options.excludeHasLiedOs ||
        e.push({ key: "has_lied_os", value: this.getHasLiedOs() }),
      e
    );
  }