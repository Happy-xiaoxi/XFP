export function z(e) {
  return void 0 === e.pageYOffset
    ? (
        e.document.documentElement ||
        e.document.body.parentNode ||
        e.document.body
      ).scrollTop
    : e.pageYOffset;
}