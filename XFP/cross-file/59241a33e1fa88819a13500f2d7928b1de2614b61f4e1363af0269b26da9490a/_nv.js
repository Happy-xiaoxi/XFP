export function v(e, t, { id: o, className: n } = {}) {
  const s = e.createElement("div");
  if (
    (o && (s.id = o),
    n && (s.className = n),
    (s.style.all = "initial"),
    (s.style.display = "block"),
    s.attachShadow && s.attachShadow.toString().includes("[native code]"))
  ) {
    s.attachShadow({ mode: "open" }), e.body.append(s);
    const o = e.createElement("style");
    return (
      (o.textContent = w(t)),
      s.shadowRoot.append(o),
      (s.shadowRoot.remove = s.remove.bind(s)),
      s.shadowRoot
    );
  }
  s.id = s.id || "upscope--" + Math.random().toString(36).slice(2, 10);
  const i = e.createElement("style"),
    r = [],
    a = e.defaultView.getComputedStyle(e.body);
  for (let e = 0; e < a.length; e++) r.push(a[e]);
  return (
    (i.textContent = `\n  #${s.id}, #${s.id} * {\n    ${r
      .filter((e) => !["d", "stroke"].includes(e))
      .map((e) => `${e}: initial`)
      .join(";\n")}\n  }\n\n  ${w(t, `#${s.id} `)}\n  `),
    e.head.append(i),
    e.body.append(s),
    s
  );
}