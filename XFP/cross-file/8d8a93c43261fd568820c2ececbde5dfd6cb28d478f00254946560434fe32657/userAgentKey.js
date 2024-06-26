  export function userAgentKey(e) {
    return (
      this.options.excludeUserAgent ||
        e.push({ key: "user_agent", value: this.getUserAgent() }),
      e
    );
  }
