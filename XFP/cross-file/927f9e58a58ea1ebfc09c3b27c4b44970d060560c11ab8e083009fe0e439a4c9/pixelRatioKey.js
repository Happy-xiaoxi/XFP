var pixelRatioKey = function (done, options) {
  done(window.devicePixelRatio || options.NOT_AVAILABLE)
}

export {
  pixelRatioKey
}
