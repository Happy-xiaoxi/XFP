export function x() {
  try {
    var e = F(),
      t = e.getExtension("WEBGL_debug_renderer_info"),
      n =
        e.getParameter(t.UNMASKED_VENDOR_WEBGL) +
        "~" +
        e.getParameter(t.UNMASKED_RENDERER_WEBGL);
    return G(e), n;
  } catch (a) {
    return null;
  }
}