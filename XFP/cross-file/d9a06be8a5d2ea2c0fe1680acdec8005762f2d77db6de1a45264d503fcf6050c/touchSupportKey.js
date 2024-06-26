
export function touchSupportKey(keys) {
    if (!this.options.excludeTouchSupport) {
        keys.addPreprocessedComponent({
            key: 'touch_support',
            value: this.getTouchSupport()
        });
    }
    return keys;
}
