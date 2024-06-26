export function hasSessionStorage(options) {
    try {
        return !!window.sessionStorage;
    } catch (e) {
        return options.ERROR;
    }
}
