export function postSetBanner(a, b) {
    (a.loaded = !0),
      (a.elementIFrame = b),
      b.addEventListener("load", this.onIFrameLoadHandler.bind(this, a), !0),
      a.element.parentNode.removeChild(a.element);
  }