export function hasLocalStorage() {
    try {
        return !!window.localStorage;
    } catch (t) {
        return !0;
    }
}
