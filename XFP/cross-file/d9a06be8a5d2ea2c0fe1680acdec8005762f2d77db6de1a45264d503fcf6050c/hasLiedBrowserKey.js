
export function hasLiedBrowserKey(keys) {
    if (!this.options.excludeHasLiedBrowser) {
        keys.addPreprocessedComponent({
            key: 'has_lied_browser',
            value: this.getHasLiedBrowser()
        });
    }
    return keys;
}
