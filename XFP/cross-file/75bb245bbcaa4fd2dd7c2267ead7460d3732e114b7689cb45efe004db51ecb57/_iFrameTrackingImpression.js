export function iFrameTrackingImpression() {
    for (var a = this.banners, b = 0; b < a.length; b++) {
      var c = a[b],
        d = c.elementIFrame,
        e = this.getIFramePosition(d);
      c.loadEvent &&
        !c.tracked &&
        e <= 0 &&
        ((c.tracked = !0),
        this.sendPostMessageIFrame(d.contentWindow, c.spot));
    }
  }