var deviceMemoryKey = function (done, options) {
  done(navigator.deviceMemory || options.NOT_AVAILABLE)
}

export {
  deviceMemoryKey
}
