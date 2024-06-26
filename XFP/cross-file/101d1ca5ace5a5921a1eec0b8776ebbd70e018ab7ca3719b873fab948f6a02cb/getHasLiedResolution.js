var getHasLiedResolution = function () {
  return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
}


var hasLiedResolutionKey = function (done) {
  done(getHasLiedResolution())
}


export {
  hasLiedResolutionKey
}
