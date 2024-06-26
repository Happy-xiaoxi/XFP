export function _documentCurrentScriptSource() {
  if (document.currentScript) {
    return document.currentScript.src;
  } else {
    return null;
  }
}