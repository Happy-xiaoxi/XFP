  import { getNavigatorCpuClass } from './getNavigatorCpuClass.js'

  var cpuClassKey = function (done, options) {
    done(getNavigatorCpuClass(options))
  }

export {cpuClassKey }