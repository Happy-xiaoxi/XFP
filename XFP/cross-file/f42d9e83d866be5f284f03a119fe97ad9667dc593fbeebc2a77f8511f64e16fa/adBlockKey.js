;
;
export function adBlockKey(keys) {
    if (!this.options.excludeAdBlock) {
        keys.push({
            key: 'adblock',
            value: this.getAdBlock()
        });
    }
    return keys;
}