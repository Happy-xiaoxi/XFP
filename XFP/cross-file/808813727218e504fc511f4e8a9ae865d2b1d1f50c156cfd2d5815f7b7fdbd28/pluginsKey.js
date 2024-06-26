export function pluginsKey(e) {
    return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.addPreprocessedComponent({
        key: 'ie_plugins',
        value: this.getIEPlugins()
    }) : e.addPreprocessedComponent({
        key: 'regular_plugins',
        value: this.getRegularPlugins()
    })), e;
}
