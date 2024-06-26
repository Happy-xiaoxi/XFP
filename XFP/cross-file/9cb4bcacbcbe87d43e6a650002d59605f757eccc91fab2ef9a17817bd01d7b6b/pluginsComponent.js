





export function pluginsComponent(done, options) {
    if (isIE()) {
        if (!options.plugins.excludeIE) {
            done(getIEPlugins(options));
        } else {
            done(options.EXCLUDED);
        }
    } else {
        done(getRegularPlugins(options));
    }
}
