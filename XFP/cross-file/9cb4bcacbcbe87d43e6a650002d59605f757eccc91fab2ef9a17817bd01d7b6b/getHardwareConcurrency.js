export function getHardwareConcurrency(options) {
    if (navigator.hardwareConcurrency) {
        return navigator.hardwareConcurrency;
    }
    return options.NOT_AVAILABLE;
}
