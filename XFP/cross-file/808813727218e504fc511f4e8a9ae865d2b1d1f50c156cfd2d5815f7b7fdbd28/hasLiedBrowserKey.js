export function hasLiedBrowserKey(e) {
    return this.options.excludeHasLiedBrowser || e.addPreprocessedComponent({
        key: 'has_lied_browser',
        value: this.getHasLiedBrowser()
    }), e;
}
