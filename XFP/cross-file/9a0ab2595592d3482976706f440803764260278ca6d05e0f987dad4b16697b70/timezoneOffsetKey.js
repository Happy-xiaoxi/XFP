;
;
export function timezoneOffsetKey(keys) {
    if (!this.options.excludeTimezoneOffset) {
        keys.push({
            key: 'timezone_offset',
            value: new Date().getTimezoneOffset()
        });
    }
    return keys;
}