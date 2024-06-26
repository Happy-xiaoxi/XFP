;
;
export function platformKey(keys) {
    if (!this.options.excludePlatform) {
        keys.push({
            key: 'navigator_platform',
            value: this.getNavigatorPlatform()
        });
    }
    return keys;
}