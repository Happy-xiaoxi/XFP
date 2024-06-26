

export function sessionStorageKey(keys) {
    if (!this.options.excludeSessionStorage && this.hasSessionStorage()) {
        keys.addPreprocessedComponent({
            key: 'session_storage',
            value: 1
        });
    }
    return keys;
}
