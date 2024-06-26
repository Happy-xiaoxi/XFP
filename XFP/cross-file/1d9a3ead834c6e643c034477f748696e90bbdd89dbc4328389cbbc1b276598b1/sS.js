

export function sS(keys) {
    var hasSS = function () {
        try {
            return !!window.sessionStorage;
        } catch (e) {
            return true;
        }
    };
    if (hasSS()) {
        keys.data.push({
            key: 'session_storage',
            value: 1
        });
    }
    return keys;
}
