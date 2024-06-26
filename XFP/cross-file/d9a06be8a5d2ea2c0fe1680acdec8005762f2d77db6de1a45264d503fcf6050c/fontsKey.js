export function fontsKey(keys, done) {
    if (this.options.excludeJsFonts) {
        return this.flashFontsKey(keys, done);
    }
    return this.jsFontsKey(keys, done);
}
