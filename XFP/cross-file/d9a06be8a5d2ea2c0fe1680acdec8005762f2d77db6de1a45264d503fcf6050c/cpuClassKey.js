
export function cpuClassKey(keys) {
    if (!this.options.excludeCpuClass) {
        keys.addPreprocessedComponent({
            key: 'cpu_class',
            value: this.getNavigatorCpuClass()
        });
    }
    return keys;
}
