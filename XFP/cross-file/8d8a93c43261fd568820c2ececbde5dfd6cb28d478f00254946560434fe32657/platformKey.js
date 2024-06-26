  export function platformKey(e) {
    return (
      this.options.excludePlatform ||
        e.push({
          key: "navigator_platform",
          value: this.getNavigatorPlatform(),
        }),
      e
    );
  }