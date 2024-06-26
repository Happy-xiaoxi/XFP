
export function deviceMemoryKey(keys) {
    if (!this.options.excludeDeviceMemory) {
        keys.addPreprocessedComponent({
            key: 'device_memory',
            value: this.getDeviceMemory()
        });
    }
    return keys;
}
