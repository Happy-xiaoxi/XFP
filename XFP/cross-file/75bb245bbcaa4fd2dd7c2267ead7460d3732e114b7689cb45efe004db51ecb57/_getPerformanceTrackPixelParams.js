export function getPerformanceTrackPixelParams(a, b) {
    var c = this.getLoadIframeDuration(a),
      d = "banner " + b.width + "x" + b.height,
      e = b.spot,
      f = window.location.hostname;
    return "number" == typeof c
      ? "?f=" + d + "&sc=" + e + "&hn=" + f + "&et=" + c.toFixed()
      : null;
  }