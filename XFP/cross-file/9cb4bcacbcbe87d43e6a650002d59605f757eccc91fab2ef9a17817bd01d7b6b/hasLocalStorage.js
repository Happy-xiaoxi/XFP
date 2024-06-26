export function hasLocalStorage(options) {
    try {
        return !!window.localStorage;
    } catch (e) {
        return options.ERROR;
    }
}
