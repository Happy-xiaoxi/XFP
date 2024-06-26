var isIEOrOldEdge = function () {
  // The properties are checked to be in IE 10, IE 11 and Edge 18 and not to be in other browsers
  return ('msWriteProfilerMark' in window) + ('msLaunchUri' in navigator) + ('msSaveBlob' in navigator) >= 2
}

export {
  isIEOrOldEdge
}
