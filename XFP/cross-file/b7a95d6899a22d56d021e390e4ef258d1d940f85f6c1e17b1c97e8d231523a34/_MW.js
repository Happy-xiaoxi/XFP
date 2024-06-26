export function W(e, t) {
  var n;
  return (
    null === (n = null == e ? void 0 : e.configuration) || void 0 === n
      ? void 0
      : n.localStorage
  )
    ? window.localStorage.getItem(t)
    : null;
}