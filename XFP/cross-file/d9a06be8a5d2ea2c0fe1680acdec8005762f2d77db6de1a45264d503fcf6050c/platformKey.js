
export function platformKey(keys) {
    if (!this.options.excludePlatform) {
        keys.addPreprocessedComponent({
            key: 'navigator_platform',
            value: this.getNavigatorPlatform()
        });
    }
    return keys;
}
