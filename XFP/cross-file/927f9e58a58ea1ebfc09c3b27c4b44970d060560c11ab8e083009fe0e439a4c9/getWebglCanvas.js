var getWebglCanvas = function () {
  var canvas = document.createElement('canvas')
  var gl = null
  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  } catch (e) { /* squelch */ }
  if (!gl) { gl = null }
  return gl
}

export {
  getWebglCanvas
}
