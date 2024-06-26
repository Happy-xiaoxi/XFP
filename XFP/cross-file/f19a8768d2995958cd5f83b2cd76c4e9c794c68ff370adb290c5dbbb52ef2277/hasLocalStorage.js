// https://bugzilla.mozilla.org/show_bug.cgi?id=781447
var hasLocalStorage = function (options) {
  try {
    return !!window.localStorage
  } catch (e) {
    return options.ERROR // SecurityError when referencing it means it exists
  }
}

export {
  hasLocalStorage
}
