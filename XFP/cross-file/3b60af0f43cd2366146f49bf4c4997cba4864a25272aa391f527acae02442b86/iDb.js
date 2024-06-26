

export function iDb(keys) {
    var hasIDB = function () {
        try {
            return !!window.indexedDB;
        } catch (e) {
            return true;
        }
    };
    if (hasIDB()) {
        keys.data.push({
            key: 'indexed_db',
            value: 1
        });
    }
    return keys;
}
