  export function localStorageKey(e) {
    return (
      !this.options.excludeSessionStorage &&
        this.hasLocalStorage() &&
        e.push({ key: "local_storage", value: 1 }),
      e
    );
  }