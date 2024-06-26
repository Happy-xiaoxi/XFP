export function u(e, t) {
  let o,
    n = !1;
  return (...s) => {
    n
      ? (clearTimeout(o),
        (o = setTimeout(() => {
          e.apply(null, s);
        }, t)))
      : (clearTimeout(o),
        e.apply(null, s),
        (n = !0),
        setTimeout(() => {
          n = !1;
        }, t));
  };
}