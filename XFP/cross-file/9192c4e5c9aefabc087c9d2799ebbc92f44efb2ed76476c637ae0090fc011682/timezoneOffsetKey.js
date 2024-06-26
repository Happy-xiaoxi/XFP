  export function timezoneOffsetKey(e) {
    return (
      this.options.excludeTimezoneOffset ||
        e.push({
          key: "timezone_offset",
          value: new Date().getTimezoneOffset(),
        }),
      e
    );
  }