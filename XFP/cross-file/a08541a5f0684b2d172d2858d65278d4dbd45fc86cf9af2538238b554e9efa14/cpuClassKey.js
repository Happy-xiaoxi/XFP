;
;
export function cpuClassKey(keys) {
    if (!this.options.excludeCpuClass) {
        keys.push({
            key: 'cpu_class',
            value: this.getNavigatorCpuClass()
        });
    }
    return keys;
}