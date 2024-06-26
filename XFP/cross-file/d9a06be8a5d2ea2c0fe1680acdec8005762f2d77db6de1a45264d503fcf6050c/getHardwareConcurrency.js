export function getHardwareConcurrency() {
    if (navigator.hardwareConcurrency) {
        return navigator.hardwareConcurrency;
    }
    return 'unknown';
}
