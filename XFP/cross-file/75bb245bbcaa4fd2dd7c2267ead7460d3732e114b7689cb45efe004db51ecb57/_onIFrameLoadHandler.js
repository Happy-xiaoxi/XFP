export function onIFrameLoadHandler(a, b) {
    var c = b.target;
    (a.loadEvent = !0),
      this.setPerformanceTrackPixel(c, a),
      this.iFrameTrackingImpression();
  }