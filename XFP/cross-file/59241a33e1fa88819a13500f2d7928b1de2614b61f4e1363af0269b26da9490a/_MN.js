export function N(e, t) {
  if (T(e) || D(e)) return M(e);
  let o = e;
  const n = t || o.parentNode;
  for (; o; ) {
    if (T(o)) return N(o) ? `${N(o)}+` : null;
    o = o.previousSibling;
  }
  return null === M(n) ? null : M(n) + "^";
}