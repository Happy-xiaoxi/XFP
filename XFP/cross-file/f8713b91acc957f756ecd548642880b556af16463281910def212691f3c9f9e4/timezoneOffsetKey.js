export function timezoneOffsetKey(e) {
    return this.options.excludeTimezoneOffset || e.addPreprocessedComponent({
        key: 'timezone_offset',
        value: new Date().getTimezoneOffset()
    }), e;
}
