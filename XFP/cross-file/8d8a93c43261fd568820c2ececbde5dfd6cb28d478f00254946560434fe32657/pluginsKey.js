export function pluginsKey(e) {
    return (
      this.options.excludePlugins ||
        (this.isIE()
          ? this.options.excludeIEPlugins ||
            e.push({ key: "ie_plugins", value: this.getIEPlugins() })
          : e.push({
              key: "regular_plugins",
              value: this.getRegularPlugins(),
            })),
      e
    );
  }