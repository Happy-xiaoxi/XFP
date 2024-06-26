export function hasIndexedDB() {
    try {
        return !!window.indexedDB;
    } catch (e) {
        return true;
    }
}
