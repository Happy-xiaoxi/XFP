var webdriver = function (done, options) {
  done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
}

export {
  webdriver
}
