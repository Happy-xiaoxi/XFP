export function colorDepthKey(e) {
    return this.options.excludeColorDepth || e.addPreprocessedComponent({
        key: 'color_depth',
        value: window.screen.colorDepth || -1
    }), e;
}
