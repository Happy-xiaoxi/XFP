export function onScrollWindowHandler() {
    this.scrollWindowDebounceId = a(
      this.iFrameTrackingImpression.bind(this),
      this.scrollWindowDebounceId
    );
  }