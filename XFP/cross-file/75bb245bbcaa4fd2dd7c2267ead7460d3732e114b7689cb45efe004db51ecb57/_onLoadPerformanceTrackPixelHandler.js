export function onLoadPerformanceTrackPixelHandler(a) {
    var b = a.target,
      c = b && b.parentNode;
    c && c.removeChild(b);
  }