
export function timezoneOffsetKey(keys) {
    if (!this.options.excludeTimezoneOffset) {
        keys.addPreprocessedComponent({
            key: 'timezone_offset',
            value: new Date().getTimezoneOffset()
        });
    }
    return keys;
}
