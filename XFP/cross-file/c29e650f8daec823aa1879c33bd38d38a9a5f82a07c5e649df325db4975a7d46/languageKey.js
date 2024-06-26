export function languageKey(e) {
    return this.options.excludeLanguage || e.addPreprocessedComponent({
        key: 'language',
        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ''
    }), e;
}
