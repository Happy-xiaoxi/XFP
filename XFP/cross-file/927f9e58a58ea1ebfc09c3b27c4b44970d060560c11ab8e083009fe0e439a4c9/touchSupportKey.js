import { getTouchSupport } from './getTouchSupport.js'

var touchSupportKey = function (done) {
  done(getTouchSupport())
}

export {
  touchSupportKey
}
