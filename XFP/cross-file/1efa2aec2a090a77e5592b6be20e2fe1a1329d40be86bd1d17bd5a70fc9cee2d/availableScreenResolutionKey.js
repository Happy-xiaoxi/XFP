export function availableScreenResolutionKey(e) {
    return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e);
}
