;
;
export function hasLiedOsKey(keys) {
    if (!this.options.excludeHasLiedOs) {
        keys.push({
            key: 'has_lied_os',
            value: this.getHasLiedOs()
        });
    }
    return keys;
}