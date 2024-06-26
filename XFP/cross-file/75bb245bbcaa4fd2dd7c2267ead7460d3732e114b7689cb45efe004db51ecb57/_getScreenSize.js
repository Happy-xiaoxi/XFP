export function getScreenSize() {
    var a = "",
      b = window.devicePixelRatio || 1,
      c = window.screen || {},
      d = c.width,
      e = c.height;
    return (
      d &&
        e &&
        (a = "&w=" + parseInt(d * b, 10) + "&h=" + parseInt(e * b, 10)),
      a
    );
  }