import { getRegularPlugins } from './getRegularPlugins.js'
import { getIEPlugins } from './getIEPlugins.js'
import { isIE } from './isIE.js'
import { isIEOrOldEdge } from './isIEOrOldEdge.js'

var pluginsComponent = function (done, options) {
  if (isIE()) {
    if (!options.plugins.excludeIE) {
      done(getIEPlugins(options))
    } else {
      done(options.EXCLUDED)
    }
  } else {
    done(getRegularPlugins(options))
  }
}

export {
  pluginsComponent
}
