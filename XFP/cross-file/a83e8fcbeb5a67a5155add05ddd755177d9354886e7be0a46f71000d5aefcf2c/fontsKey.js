export function fontsKey(e, t) {
    return this.options.excludeJsFonts
      ? this.flashFontsKey(e, t)
      : this.jsFontsKey(e, t);
  }