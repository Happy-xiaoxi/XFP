export function dt(e) {
  var t;
  return (
    window.__UTILS__
      ? ((t = window.__UTILS__),
        "iframeLoadEnd" in e && (t.timing.iframeLoadEnd = e.iframeLoadEnd),
        delete window.__UTILS__)
      : "utils" in e && (t = e.utils),
    t
  );
}