export function hasSessionStorage() {
    try {
        return !!window.sessionStorage;
    } catch (e) {
        return !0;
    }
}
