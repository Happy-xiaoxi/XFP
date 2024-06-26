export function platformKey(e) {
    return this.options.excludePlatform || e.addPreprocessedComponent({
        key: 'navigator_platform',
        value: this.getNavigatorPlatform()
    }), e;
}
