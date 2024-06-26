export function ve(e) {
  let t = "";
  const o = e.cssRules || e.rules;
  for (const e of o) e.cssText && (t += e.cssText);
  return t;
}