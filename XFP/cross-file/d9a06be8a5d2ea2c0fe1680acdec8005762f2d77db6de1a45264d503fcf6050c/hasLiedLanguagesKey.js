
export function hasLiedLanguagesKey(keys) {
    if (!this.options.excludeHasLiedLanguages) {
        keys.addPreprocessedComponent({
            key: 'has_lied_languages',
            value: this.getHasLiedLanguages()
        });
    }
    return keys;
}
