export function hardwareConcurrencyKey(e) {
    return this.options.excludeHardwareConcurrency || e.addPreprocessedComponent({
        key: 'hardware_concurrency',
        value: this.getHardwareConcurrency()
    }), e;
}
