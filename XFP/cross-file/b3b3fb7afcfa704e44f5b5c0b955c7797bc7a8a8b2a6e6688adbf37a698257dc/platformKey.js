export function platformKey(e) {
    return this.options.excludePlatform || e.addPreprocessedComponent({
        key: 'navigator_platform',
        value: getNavigatorPlatform()
    }), e;
}

export function getNavigatorPlatform() {
    return navigator.platform ? navigator.platform : 'unknown';
}
