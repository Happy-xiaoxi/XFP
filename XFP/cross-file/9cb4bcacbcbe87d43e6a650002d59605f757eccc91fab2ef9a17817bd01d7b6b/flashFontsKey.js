


export function flashFontsKey(done, options) {
    if (!hasSwfObjectLoaded()) {
        return done('swf object not loaded');
    }
    if (!hasMinFlashInstalled()) {
        return done('flash not installed');
    }
    if (!options.fonts.swfPath) {
        return done('missing options.fonts.swfPath');
    }
    loadSwfAndDetectFonts(function (fonts) {
        done(fonts);
    }, options);
}
