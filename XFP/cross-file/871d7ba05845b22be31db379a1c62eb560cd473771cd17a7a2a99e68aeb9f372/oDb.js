
export function oDb(keys) {
    if (window.openDatabase) {
        keys.data.push({
            key: 'open_database',
            value: 1
        });
    }
    return keys;
}
