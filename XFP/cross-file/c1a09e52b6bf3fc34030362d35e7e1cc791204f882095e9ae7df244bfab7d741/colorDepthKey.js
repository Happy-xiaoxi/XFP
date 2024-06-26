var colorDepthKey = function (done, options) {
  done(window.screen.colorDepth || options.NOT_AVAILABLE)
}

export {
  colorDepthKey
}
