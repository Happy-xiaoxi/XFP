export function adBlockKey(e) {
    return (
      this.options.excludeAdBlock ||
        e.push({ key: "adblock", value: this.getAdBlock() }),
      e
    );
  }