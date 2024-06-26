export function getDate(g) {
  const e = g;
  const s = e.substring(0, 4);
  const a = parseInt(e.substring(4, 6)) - 1 + "";
  const q = e.substring(6, 8);
  const f = e.substring(8, 10);
  const b = e.substring(10, 12);
  const n = e.substring(12, 14);
  return new Date(s, a, q, f, b, n);
}