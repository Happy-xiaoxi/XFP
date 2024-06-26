export function getPerformanceTrackPixelElement(a) {
    var b = document.createElement("img");
    return (
      (b.src = "//pxl.tsyndicate.com/api/v1/elapsedtime" + a),
      (b.width = 1),
      (b.height = 1),
      (b.style.position = "absolute"),
      (b.style.top = 0),
      (b.onload = this.onLoadPerformanceTrackPixelHandler),
      (b.onerror = this.onLoadPerformanceTrackPixelHandler),
      b
    );
  }