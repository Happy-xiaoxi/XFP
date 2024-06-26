  export function languageKey(e) {
    return (
      this.options.excludeLanguage ||
        e.push({
          key: "language",
          value:
            navigator.language ||
            navigator.userLanguage ||
            navigator.browserLanguage ||
            navigator.systemLanguage ||
            "",
        }),
      e
    );
  }