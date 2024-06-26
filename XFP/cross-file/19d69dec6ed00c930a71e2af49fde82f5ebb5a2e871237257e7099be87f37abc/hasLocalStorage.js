export function hasLocalStorage() {
    try {
        return !!window.localStorage;
    } catch (e) {
        return !0;
    }
}
