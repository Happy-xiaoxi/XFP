export function touchSupportKey(e) {
    return (
      this.options.excludeTouchSupport ||
        e.push({ key: "touch_support", value: this.getTouchSupport() }),
      e
    );
  }