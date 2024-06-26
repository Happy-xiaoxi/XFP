var extendSoft = function (target, source) {
  if (source == null) { return target }
  var value
  var key
  for (key in source) {
    value = source[key]
    if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
      target[key] = value
    }
  }
  return target
}

export {
  extendSoft
}
