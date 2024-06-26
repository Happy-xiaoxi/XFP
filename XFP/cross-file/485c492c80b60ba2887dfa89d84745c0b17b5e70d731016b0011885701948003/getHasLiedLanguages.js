var getHasLiedLanguages = function () {
  // We check if navigator.language is equal to the first language of navigator.languages
  // navigator.languages is undefined on IE11 (and potentially older IEs)
  if (typeof navigator.languages !== 'undefined') {
    try {
      var firstLanguages = navigator.languages[0].substr(0, 2)
      if (firstLanguages !== navigator.language.substr(0, 2)) {
        return true
      }
    } catch (err) {
      return true
    }
  }
  return false
}

var hasLiedLanguagesKey = function (done) {
  done(getHasLiedLanguages())
}

export {
  hasLiedLanguagesKey
}
