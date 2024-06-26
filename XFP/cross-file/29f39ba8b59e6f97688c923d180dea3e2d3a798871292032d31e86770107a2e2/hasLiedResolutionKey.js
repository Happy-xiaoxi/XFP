;
;
export function hasLiedResolutionKey(keys) {
    if (!this.options.excludeHasLiedResolution) {
        keys.push({
            key: 'has_lied_resolution',
            value: this.getHasLiedResolution()
        });
    }
    return keys;
}