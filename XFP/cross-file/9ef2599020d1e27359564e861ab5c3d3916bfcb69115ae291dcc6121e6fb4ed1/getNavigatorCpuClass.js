var getNavigatorCpuClass = function (options) {
  return navigator.cpuClass || options.NOT_AVAILABLE
}

export {
  getNavigatorCpuClass
}
