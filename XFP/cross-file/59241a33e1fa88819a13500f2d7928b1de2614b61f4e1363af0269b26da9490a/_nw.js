export function w(e, t = "") {
  return Object.values(e).some((e) => "object" == typeof e)
    ? Object.entries(e)
        .map(([e, o]) => `${t}${e} {\n${w(o)}\n}`)
        .join("\n")
    : Object.entries(e)
        .map(([e, t]) => `${e}: ${t};\n`)
        .join("");
}