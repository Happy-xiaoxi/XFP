export function F(e) {
  const t = {};
  for (const o of e.attributes) t[o.name] = o.value;
  return t;
}