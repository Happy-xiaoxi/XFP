  
import { isIEOrOldEdge } from "./isIEOrOldEdge.js"

var hasIndexedDB = function (options) {
  // IE and Edge don't allow accessing indexedDB in private mode, therefore IE and Edge will have different
  // fingerprints in normal and private modes.
  if (isIEOrOldEdge()) {
    return options.EXCLUDED
  }
  try {
    return !!window.indexedDB
  } catch (e) {
    return options.ERROR // SecurityError when referencing it means it exists
  }
}

export {
  hasIndexedDB
}
