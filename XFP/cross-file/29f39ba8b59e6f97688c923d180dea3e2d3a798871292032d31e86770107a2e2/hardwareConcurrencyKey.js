;
;
export function hardwareConcurrencyKey(keys) {
    if (!this.options.excludeHardwareConcurrency) {
        keys.push({
            key: 'hardware_concurrency',
            value: this.getHardwareConcurrency()
        });
    }
    return keys;
}