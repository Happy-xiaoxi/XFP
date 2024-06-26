export function $(e, t) {
  const o = G(e);
  for (const e of o)
    if (e.shadowRoot)
      try {
        t(e.shadowRoot), $(e.shadowRoot, t);
      } catch (t) {
        r("Error accessing shadow root %o (%o)", e.shadowRoot, t);
      }
}