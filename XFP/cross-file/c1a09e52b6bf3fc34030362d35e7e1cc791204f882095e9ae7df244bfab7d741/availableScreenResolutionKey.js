import { getAvailableScreenResolution } from './getAvailableScreenResolution.js'

var availableScreenResolutionKey = function (done, options) {
  done(getAvailableScreenResolution(options))
}

export {
  availableScreenResolutionKey
}
