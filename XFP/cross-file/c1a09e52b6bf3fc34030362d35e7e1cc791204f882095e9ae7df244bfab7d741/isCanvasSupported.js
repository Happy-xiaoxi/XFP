var isCanvasSupported = function () {
  var elem = document.createElement('canvas')
  return !!(elem.getContext && elem.getContext('2d'))
}

export {
  isCanvasSupported
}
