
export function colorDepthKey(keys) {
    if (!this.options.excludeColorDepth) {
        keys.addPreprocessedComponent({
            key: 'color_depth',
            value: window.screen.colorDepth || -1
        });
    }
    return keys;
}
