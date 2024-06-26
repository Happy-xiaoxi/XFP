export function cpuClassKey(e) {
    return this.options.excludeCpuClass || e.addPreprocessedComponent({
        key: 'cpu_class',
        value: getNavigatorCpuClass()
    }), e;
}

export function getNavigatorCpuClass() {
    return navigator.cpuClass ? navigator.cpuClass : 'unknown';
}
