;
;
export function indexedDbKey(keys) {
    if (!this.options.excludeIndexedDB && this.hasIndexedDB()) {
        keys.push({
            key: 'indexed_db',
            value: 1
        });
    }
    return keys;
}