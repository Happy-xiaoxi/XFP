
import { getScreenResolution } from './getScreenResolution.js'

var screenResolutionKey = function (done, options) {
  done(getScreenResolution(options))
}

export {
  screenResolutionKey
}
