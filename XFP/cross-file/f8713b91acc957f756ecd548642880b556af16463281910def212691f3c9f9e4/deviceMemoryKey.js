export function deviceMemoryKey(e) {
    return this.options.excludeDeviceMemory || e.addPreprocessedComponent({
        key: 'device_memory',
        value: getDeviceMemory()
    }), e;
}

export function getDeviceMemory() {
    return navigator.deviceMemory || -1;
}
