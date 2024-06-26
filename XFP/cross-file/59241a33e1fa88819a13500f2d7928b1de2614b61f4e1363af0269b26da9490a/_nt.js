export function t(e) {
  if (
    !(function (e) {
      return (
        null == e ||
        ("string" == typeof e && 0 === e.trim().length) ||
        (Array.isArray(e) && 0 === e.length)
      );
    })(e)
  )
    return e;
}