;
;
export function getNavigatorCpuClass() {
    if (navigator.cpuClass) {
        return navigator.cpuClass;
    } else {
        return 'unknown';
    }
}