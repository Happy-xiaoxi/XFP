export function ready() {
    this.eachScript() &&
      (this.setBanner(this.banners),
      window.addEventListener(
        "scroll",
        this.onScrollWindowHandler.bind(this),
        { passive: !0 }
      ));
  }