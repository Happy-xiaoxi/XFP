;
;
export function sessionStorageKey(keys) {
    if (!this.options.excludeSessionStorage && this.hasSessionStorage()) {
        keys.push({
            key: 'session_storage',
            value: 1
        });
    }
    return keys;
}