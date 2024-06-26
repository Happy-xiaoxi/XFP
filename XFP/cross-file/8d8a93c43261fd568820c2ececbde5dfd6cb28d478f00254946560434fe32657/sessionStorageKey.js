  export function sessionStorageKey(e) {
    return (
      !this.options.excludeSessionStorage &&
        this.hasSessionStorage() &&
        e.push({ key: "session_storage", value: 1 }),
      e
    );
  }