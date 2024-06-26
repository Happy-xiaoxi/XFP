export function K(e) {
  const t = [];
  let [o, n] = Q(e);
  for (; void 0 !== o && void 0 !== n; ) {
    const s = e.indexOf(o) + o.length,
      i = e.slice(s).indexOf(n),
      r = i + s;
    if (-1 === s || -1 === i) break;
    const a = e.slice(s, s + i),
      c = e.slice(r + n.length);
    t.includes(a) || t.push(a), (e = c), ([o, n] = Q(e));
  }
  return t;
}