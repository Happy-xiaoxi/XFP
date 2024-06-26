;
;
export function screenResolutionKey(keys) {
    if (!this.options.excludeScreenResolution) {
        return this.getScreenResolution(keys);
    }
    return keys;
}