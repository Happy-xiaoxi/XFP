
export function deviceMemoryKey(done, options) {
    done(navigator.deviceMemory || options.NOT_AVAILABLE);
}
