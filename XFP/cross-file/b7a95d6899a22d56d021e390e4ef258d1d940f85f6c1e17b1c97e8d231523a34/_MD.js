export function D(e) {
  for (var t = 0, n = 0; n < e.length; n++) {
    t += e.charCodeAt(n);
  }
  return (t &= t), t;
}