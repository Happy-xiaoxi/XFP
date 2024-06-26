;
;
export function openDatabaseKey(keys) {
    if (!this.options.excludeOpenDatabase && window.openDatabase) {
        keys.push({
            key: 'open_database',
            value: 1
        });
    }
    return keys;
}