export function touchSupportKey(e) {
    return this.options.excludeTouchSupport || e.addPreprocessedComponent({
        key: 'touch_support',
        value: this.getTouchSupport()
    }), e;
}
