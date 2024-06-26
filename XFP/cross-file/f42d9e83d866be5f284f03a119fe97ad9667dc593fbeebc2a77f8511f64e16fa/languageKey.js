;
;
export function languageKey(keys) {
    if (!this.options.excludeLanguage) {
        keys.push({
            key: 'language',
            value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ''
        });
    }
    return keys;
}