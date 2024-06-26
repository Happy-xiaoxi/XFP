var timezone = function (done, options) {
  if (window.Intl && window.Intl.DateTimeFormat) {
    done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone || options.NOT_AVAILABLE)
    return
  }
  done(options.NOT_AVAILABLE)
}

export {
  timezone
}
