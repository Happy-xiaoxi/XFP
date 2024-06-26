export function flashFontsKey(e, t) {
    return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function (r) {
        e.addPreprocessedComponent({
            key: 'swf_fonts',
            value: r.join(';')
        }), t(e);
    }) : t(e);
}
