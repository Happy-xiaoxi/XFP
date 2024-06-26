
  export function cpuClassKey(e) {
    return (
      this.options.excludeCpuClass ||
        e.push({ key: "cpu_class", value: this.getNavigatorCpuClass() }),
      e
    );
  }