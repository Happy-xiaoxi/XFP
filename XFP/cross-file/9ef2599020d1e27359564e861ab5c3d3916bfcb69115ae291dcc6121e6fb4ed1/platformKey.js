  import { getNavigatorPlatform } from './getNavigatorPlatform.js'

  var platformKey = function (done, options) {
    done(getNavigatorPlatform(options))
  }
  export { platformKey }