export function cpuClassKey(e) {
    return this.options.excludeCpuClass || e.addPreprocessedComponent({
        key: 'cpu_class',
        value: this.getNavigatorCpuClass()
    }), e;
}
