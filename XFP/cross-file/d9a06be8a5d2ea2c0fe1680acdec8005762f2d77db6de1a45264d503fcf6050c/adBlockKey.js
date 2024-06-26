
export function adBlockKey(keys) {
    if (!this.options.excludeAdBlock) {
        keys.addPreprocessedComponent({
            key: 'adblock',
            value: this.getAdBlock()
        });
    }
    return keys;
}
