export function hasSessionStorage() {
    try {
        return !!window.sessionStorage;
    } catch (e) {
        return true;
    }
}
