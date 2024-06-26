export function hasIndexedDB(options) {
    try {
        return !!window.indexedDB;
    } catch (e) {
        return options.ERROR;
    }
}
