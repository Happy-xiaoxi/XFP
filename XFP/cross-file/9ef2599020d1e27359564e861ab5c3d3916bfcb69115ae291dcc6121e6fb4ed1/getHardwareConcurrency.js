var getHardwareConcurrency = function (options) {
  if (navigator.hardwareConcurrency) {
    return navigator.hardwareConcurrency
  }
  return options.NOT_AVAILABLE
}

export {
  getHardwareConcurrency
}
