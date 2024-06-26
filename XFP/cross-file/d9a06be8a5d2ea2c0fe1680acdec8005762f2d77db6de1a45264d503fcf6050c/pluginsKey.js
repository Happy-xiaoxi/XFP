


export function pluginsKey(keys) {
    if (!this.options.excludePlugins) {
        if (this.isIE()) {
            if (!this.options.excludeIEPlugins) {
                keys.addPreprocessedComponent({
                    key: 'ie_plugins',
                    value: this.getIEPlugins()
                });
            }
        } else {
            keys.addPreprocessedComponent({
                key: 'regular_plugins',
                value: this.getRegularPlugins()
            });
        }
    }
    return keys;
}
