const each = function (obj, iterator) {
  if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
    obj.forEach(iterator)
  } else if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i++) {
      iterator(obj[i], i, obj)
    }
  } else {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        iterator(obj[key], key, obj)
      }
    }
  }
}

const map = function (obj, iterator) {
  var results = []
  // Not using strict equality so that this acts as a
  // shortcut to checking for `null` and `undefined`.
  if (obj == null) {
    return results
  }
  if (Array.prototype.map && obj.map === Array.prototype.map) { return obj.map(iterator) }
  each(obj, function (value, index, list) {
    results.push(iterator(value, index, list))
  })
  return results
}

export {
  each,
  map
}
