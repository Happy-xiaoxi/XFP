export function hardwareConcurrencyKey(e) {
    return (
      this.options.excludeHardwareConcurrency ||
        e.push({
          key: "hardware_concurrency",
          value: this.getHardwareConcurrency(),
        }),
      e
    );
  }