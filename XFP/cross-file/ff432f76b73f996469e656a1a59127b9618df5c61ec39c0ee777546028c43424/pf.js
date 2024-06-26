
export function pf(keys) {
    var platform = function () {
        if (navigator.platform) {
            return navigator.platform;
        } else {
            return 'unknown';
        }
    };
    keys.data.push({
        key: 'navigator_platform',
        value: platform()
    });
    return keys;
}
