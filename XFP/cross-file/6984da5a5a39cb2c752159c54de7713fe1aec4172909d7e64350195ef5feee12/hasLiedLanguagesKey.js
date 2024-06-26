export function hasLiedLanguagesKey(e) {
    return this.options.excludeHasLiedLanguages || e.addPreprocessedComponent({
        key: 'has_lied_languages',
        value: this.getHasLiedLanguages()
    }), e;
}
