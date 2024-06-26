// flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
import { hasSwfObjectLoaded } from './hasSwfObjectLoaded.js'
import { hasMinFlashInstalled } from './hasMinFlashInstalled.js'
import { addFlashDivNode } from './addFlashDivNode.js'
import { loadSwfAndDetectFonts } from './loadSwfAndDetectFonts.js'

var flashFontsKey = function (done, options) {
  // we do flash if swfobject is loaded
  if (!hasSwfObjectLoaded()) {
    return done('swf object not loaded')
  }
  if (!hasMinFlashInstalled()) {
    return done('flash not installed')
  }
  if (!options.fonts.swfPath) {
    return done('missing options.fonts.swfPath')
  }
  loadSwfAndDetectFonts(function (fonts) {
    done(fonts)
  }, options)
}

export {
  flashFontsKey
}
