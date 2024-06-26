export function a(e, ...t) {
  window.Upscope._config?.consoleAllowed
    ? (t.unshift("[Upscope]"),
      (console["__original__" + e] || console[e]).apply(console, t))
    : r("console", ...t);
}