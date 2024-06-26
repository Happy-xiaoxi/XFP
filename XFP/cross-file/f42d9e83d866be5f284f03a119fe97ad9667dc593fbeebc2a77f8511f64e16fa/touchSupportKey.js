;
;
export function touchSupportKey(keys) {
    if (!this.options.excludeTouchSupport) {
        keys.push({
            key: 'touch_support',
            value: this.getTouchSupport()
        });
    }
    return keys;
}