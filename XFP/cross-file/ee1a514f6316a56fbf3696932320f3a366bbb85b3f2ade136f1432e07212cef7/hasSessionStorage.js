var hasSessionStorage = function (options) {
  try {
    return !!window.sessionStorage
  } catch (e) {
    return options.ERROR // SecurityError when referencing it means it exists
  }
}

export {
  hasSessionStorage
}
