;
;
export function hasSessionStorage() {
    try {
        return !!window.sessionStorage;
    } catch (n) {
        return !0;
    }
}