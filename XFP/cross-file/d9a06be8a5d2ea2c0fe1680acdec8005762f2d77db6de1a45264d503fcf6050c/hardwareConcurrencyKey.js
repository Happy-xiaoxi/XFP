
export function hardwareConcurrencyKey(keys) {
    if (!this.options.excludeHardwareConcurrency) {
        keys.addPreprocessedComponent({
            key: 'hardware_concurrency',
            value: this.getHardwareConcurrency()
        });
    }
    return keys;
}
