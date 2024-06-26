;
;
export function colorDepthKey(keys) {
    if (!this.options.excludeColorDepth) {
        keys.push({
            key: 'color_depth',
            value: screen.colorDepth || -1
        });
    }
    return keys;
}