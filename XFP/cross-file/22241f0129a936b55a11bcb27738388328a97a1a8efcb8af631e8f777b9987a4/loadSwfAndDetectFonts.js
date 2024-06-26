var loadSwfAndDetectFonts = function (done, options) {
  var hiddenCallback = '___fp_swf_loaded'
  window[hiddenCallback] = function (fonts) {
    done(fonts)
  }
  var id = options.fonts.swfContainerId
  addFlashDivNode()
  var flashvars = { onReady: hiddenCallback }
  var flashparams = { allowScriptAccess: 'always', menu: 'false' }
  window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
}

export {
  loadSwfAndDetectFonts
}
