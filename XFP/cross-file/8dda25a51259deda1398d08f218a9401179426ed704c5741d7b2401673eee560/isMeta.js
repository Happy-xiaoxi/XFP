export function isMeta(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return !0;
    var t = e.which,
      r = e.button;
    return t || r === undefined ? 2 === t || 2 === r : 1 & !r && 2 & !r && 4 & r;
  }