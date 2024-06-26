
export function hC(keys) {
    var hardwareConcurrency = function () {
        if (navigator.hardwareConcurrency) {
            return navigator.hardwareConcurrency;
        }
        return 'unknown';
    };
    keys.data.push({
        key: 'hardware_concurrency',
        value: hardwareConcurrency()
    });
    return keys;
}
