  export function openDatabaseKey(e) {
    return (
      !this.options.excludeOpenDatabase &&
        window.openDatabase &&
        e.push({ key: "open_database", value: 1 }),
      e
    );
  }