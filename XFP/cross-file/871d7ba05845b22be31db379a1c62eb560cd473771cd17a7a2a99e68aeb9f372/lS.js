

export function lS(keys) {
    var hasLS = function () {
        try {
            return !!window.localStorage;
        } catch (e) {
            return true;
        }
    };
    if (hasLS()) {
        keys.data.push({
            key: 'local_storage',
            value: 1
        });
    }
    return keys;
}
