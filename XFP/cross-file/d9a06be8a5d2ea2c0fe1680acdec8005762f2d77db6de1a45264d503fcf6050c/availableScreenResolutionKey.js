export function availableScreenResolutionKey(keys) {
    if (!this.options.excludeAvailableScreenResolution) {
        return this.getAvailableScreenResolution(keys);
    }
    return keys;
}
