

export function localStorageKey(keys) {
    if (!this.options.excludeSessionStorage && this.hasLocalStorage()) {
        keys.addPreprocessedComponent({
            key: 'local_storage',
            value: 1
        });
    }
    return keys;
}
