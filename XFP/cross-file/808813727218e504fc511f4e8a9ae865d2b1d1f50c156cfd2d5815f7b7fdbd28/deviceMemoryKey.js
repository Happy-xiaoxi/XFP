export function deviceMemoryKey(e) {
    return this.options.excludeDeviceMemory || e.addPreprocessedComponent({
        key: 'device_memory',
        value: this.getDeviceMemory()
    }), e;
}
