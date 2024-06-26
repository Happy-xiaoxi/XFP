var getAvailableScreenResolution = function (options) {
  if (window.screen.availWidth && window.screen.availHeight) {
    var available = [window.screen.availHeight, window.screen.availWidth]
    if (options.screen.detectScreenOrientation) {
      available.sort().reverse()
    }
    return available
  }
  // headless browsers
  return options.NOT_AVAILABLE
}

export {
  getAvailableScreenResolution
}
