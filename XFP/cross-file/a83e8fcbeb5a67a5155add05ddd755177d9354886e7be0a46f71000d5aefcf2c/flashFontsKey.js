export function flashFontsKey(e, t) {
    return this.options.excludeFlashFonts
      ? t(e)
      : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled()
      ? void 0 === this.options.swfPath
        ? t(e)
        : void this.loadSwfAndDetectFonts(function (n) {
            e.push({ key: "swf_fonts", value: n.join(";") }), t(e);
          })
      : t(e);
  }