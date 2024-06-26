export function getXPath(B) {
  if (B === document.body) {
    return "/html/" + B.tagName.toLowerCase();
  }
  if (!B.parentNode) {
    return "";
  }
  let ix = 1,
    siblings = B.parentNode.childNodes;
  for (let i = 0, l = siblings.length; i < l; i++) {
    let sibling = siblings[i];
    if (sibling === B) {
      return (
        helper.getXPath(B.parentNode) +
        "/" +
        B.tagName.toLowerCase() +
        "[" +
        ix +
        "]"
      );
    } else {
      if (sibling.nodeType === 1 && sibling.tagName === B.tagName) {
        ix++;
      }
    }
  }
}