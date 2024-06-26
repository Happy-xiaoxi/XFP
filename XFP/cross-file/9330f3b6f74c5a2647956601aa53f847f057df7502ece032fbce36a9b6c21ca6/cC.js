
export function cC(keys) {
    var cpuClass = function () {
        if (navigator.cpuClass) {
            return navigator.cpuClass;
        } else {
            return 'unknown';
        }
    };
    keys.data.push({
        key: 'cpu_class',
        value: cpuClass()
    });
    return keys;
}
