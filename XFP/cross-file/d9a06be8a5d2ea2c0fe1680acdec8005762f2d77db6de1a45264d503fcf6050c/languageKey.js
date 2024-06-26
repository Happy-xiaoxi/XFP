
export function languageKey(keys) {
    if (!this.options.excludeLanguage) {
        keys.addPreprocessedComponent({
            key: 'language',
            value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ''
        });
    }
    return keys;
}
