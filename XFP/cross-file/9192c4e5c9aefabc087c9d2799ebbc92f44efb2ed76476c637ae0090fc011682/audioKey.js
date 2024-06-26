export function audioKey(e, t) {
    return this.options.excludeAudio ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
      ? t(e)
      : this.getAudioKey(e, t);
  }