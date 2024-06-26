export function isMeta(t) {
  if (t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) return !0;
  var e = t.which,
    r = t.button;
  return e || r === undefined ? 2 === e || 2 === r : 1 & !r && 2 & !r && 4 & r;
}