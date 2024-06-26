var getHasLiedOs = function () {
  var userAgent = navigator.userAgent.toLowerCase()
  var oscpu = navigator.oscpu
  var platform = navigator.platform.toLowerCase()
  var os
  // We extract the OS from the user agent (respect the order of the if else if statement)
  if (userAgent.indexOf('windows phone') >= 0) {
    os = 'Windows Phone'
  } else if (userAgent.indexOf('windows') >= 0 || userAgent.indexOf('win16') >= 0 || userAgent.indexOf('win32') >= 0 || userAgent.indexOf('win64') >= 0 || userAgent.indexOf('win95') >= 0 || userAgent.indexOf('win98') >= 0 || userAgent.indexOf('winnt') >= 0 || userAgent.indexOf('wow64') >= 0) {
    os = 'Windows'
  } else if (userAgent.indexOf('android') >= 0) {
    os = 'Android'
  } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0 || userAgent.indexOf('x11') >= 0) {
    os = 'Linux'
  } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0 || userAgent.indexOf('ipod') >= 0 || userAgent.indexOf('crios') >= 0 || userAgent.indexOf('fxios') >= 0) {
    os = 'iOS'
  } else if (userAgent.indexOf('macintosh') >= 0 || userAgent.indexOf('mac_powerpc)') >= 0) {
    os = 'Mac'
  } else {
    os = 'Other'
  }
  // We detect if the person uses a touch device
  var mobileDevice = (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0))

  if (mobileDevice && os !== 'Windows' && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other' && userAgent.indexOf('cros') === -1) {
    return true
  }

  // We compare oscpu with the OS extracted from the UA
  if (typeof oscpu !== 'undefined') {
    oscpu = oscpu.toLowerCase()
    if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
      return true
    } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
      return true
    } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
      return true
    } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
      return true
    }
  }

  // We compare platform with the OS extracted from the UA
  if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
    return true
  } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
    return true
  } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
    return true
  } else if (platform.indexOf('arm') >= 0 && os === 'Windows Phone') {
    return false
  } else if (platform.indexOf('pike') >= 0 && userAgent.indexOf('opera mini') >= 0) {
    return false
  } else {
    var platformIsOther = platform.indexOf('win') < 0 &&
      platform.indexOf('linux') < 0 &&
      platform.indexOf('mac') < 0 &&
      platform.indexOf('iphone') < 0 &&
      platform.indexOf('ipad') < 0 &&
      platform.indexOf('ipod') < 0
    if (platformIsOther !== (os === 'Other')) {
      return true
    }
  }

  return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
}



var hasLiedOsKey = function (done) {
  done(getHasLiedOs())
}


export {
  hasLiedOsKey
}
