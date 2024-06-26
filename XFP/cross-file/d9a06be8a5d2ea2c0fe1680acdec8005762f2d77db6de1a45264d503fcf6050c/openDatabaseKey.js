
export function openDatabaseKey(keys) {
    if (!this.options.excludeOpenDatabase && window.openDatabase) {
        keys.addPreprocessedComponent({
            key: 'open_database',
            value: 1
        });
    }
    return keys;
}
