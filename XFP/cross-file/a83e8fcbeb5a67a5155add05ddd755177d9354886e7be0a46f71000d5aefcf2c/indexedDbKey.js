  export function indexedDbKey(e) {
    return (
      !this.options.excludeIndexedDB &&
        this.hasIndexedDB() &&
        e.push({ key: "indexed_db", value: 1 }),
      e
    );
  }