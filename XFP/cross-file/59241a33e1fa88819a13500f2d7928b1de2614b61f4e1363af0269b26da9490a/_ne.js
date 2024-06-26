export function e(e, t) {
  if (!window.Upscope._config) throw new Error("Upscope is not initialized");
  if (
    (2 === arguments.length && (window.Upscope._config[e] = t),
    1 === arguments.length)
  ) {
    var o = window.Upscope._config[e];
    return "function" == typeof o ? o.bind(window.Upscope._config) : o;
  }
  return window.Upscope._config;
}