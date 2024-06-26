export function setPerformanceTrackPixel(a, b) {
    var c = a.src,
      d = c && this.getPerformanceTrackPixelParams(c, b),
      e = d && this.getPerformanceTrackPixelElement(d);
    e && document.body.appendChild(e);
  }