import { getHardwareConcurrency } from './getHardwareConcurrency.js'

var hardwareConcurrencyKey = function (done, options) {
  done(getHardwareConcurrency(options))
}

export {
  hardwareConcurrencyKey
}
