export function hasSessionStorage() {
    try {
        return !!window.sessionStorage;
    } catch (t) {
        return !0;
    }
}
