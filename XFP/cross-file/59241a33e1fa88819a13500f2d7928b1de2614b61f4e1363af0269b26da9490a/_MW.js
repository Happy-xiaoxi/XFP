export function W(e) {
  return void 0 === e.pageXOffset
    ? (
        e.document.documentElement ||
        e.document.body.parentNode ||
        e.document.body
      ).scrollLeft
    : e.pageXOffset;
}