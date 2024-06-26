export function B(e) {
  let t = e,
    o = "TEXT_NODE" === A[e.nodeType] ? e.textContent : "";
  for (; null !== (t = t.previousSibling); ) {
    if ("TEXT_NODE" !== A[t.nodeType]) {
      if ("COMMENT_NODE" === A[t.nodeType]) continue;
      break;
    }
    o = t.textContent + o;
  }
  for (t = e; null !== (t = t.nextSibling); ) {
    if ("TEXT_NODE" !== A[t.nodeType]) {
      if ("COMMENT_NODE" === A[t.nodeType]) continue;
      break;
    }
    o += t.textContent;
  }
  return o;
}