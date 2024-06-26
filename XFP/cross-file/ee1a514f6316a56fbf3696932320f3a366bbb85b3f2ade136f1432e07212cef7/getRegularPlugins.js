import { pluginsShouldBeSorted } from './pluginsShouldBeSorted.js'
import { map } from './utils.js'

var getRegularPlugins = function (options) {
  if (navigator.plugins == null) {
    return options.NOT_AVAILABLE
  }

  var plugins = []
  // plugins isn't defined in Node envs.
  for (var i = 0, l = navigator.plugins.length; i < l; i++) {
    if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) }
  }

  // sorting plugins only for those user agents, that we know randomize the plugins
  // every time we try to enumerate them
  if (pluginsShouldBeSorted(options)) {
    plugins = plugins.sort(function (a, b) {
      if (a.name > b.name) { return 1 }
      if (a.name < b.name) { return -1 }
      return 0
    })
  }
  return map(plugins, function (p) {
    var mimeTypes = map(p, function (mt) {
      return [mt.type, mt.suffixes]
    })
    return [p.name, p.description, mimeTypes]
  })
}

export {
  getRegularPlugins
}
