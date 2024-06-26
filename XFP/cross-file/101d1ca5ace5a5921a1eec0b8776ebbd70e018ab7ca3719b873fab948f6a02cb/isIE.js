var isIE = function () {
  if (navigator.appName === 'Microsoft Internet Explorer') {
    return true
  } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
    return true
  }
  return false
}

export {
  isIE
}
