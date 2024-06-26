export function _(e, t = 50) {
  return e.length <= t ? e : e.slice(0, t) + "...";
}