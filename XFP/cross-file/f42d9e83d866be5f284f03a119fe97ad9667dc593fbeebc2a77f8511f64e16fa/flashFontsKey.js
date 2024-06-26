;
;
export function flashFontsKey(keys, done) {
    if (this.options.excludeFlashFonts) {
        return done(keys);
    }
    if (!this.hasSwfObjectLoaded()) {
        return done(keys);
    }
    if (!this.hasMinFlashInstalled()) {
        return done(keys);
    }
    if (typeof this.options.swfPath === 'undefined') {
        return done(keys);
    }
    this.loadSwfAndDetectFonts(function (fonts) {
        keys.push({
            key: 'swf_fonts',
            value: fonts.join(';')
        });
        done(keys);
    });
}