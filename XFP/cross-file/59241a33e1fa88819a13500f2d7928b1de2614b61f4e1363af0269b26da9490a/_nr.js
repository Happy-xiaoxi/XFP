export function r(...e) {
  s &&
    (e.unshift("[upscope debug]"),
    ("*" === s ||
      e
        .map((e) => String(e).toLowerCase())
        .join("")
        .includes(s.toLowerCase())) &&
      (console.__original__debug || console.debug).apply(console, e));
}