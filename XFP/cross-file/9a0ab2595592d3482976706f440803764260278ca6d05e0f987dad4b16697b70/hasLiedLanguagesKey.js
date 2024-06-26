;
;
export function hasLiedLanguagesKey(keys) {
    if (!this.options.excludeHasLiedLanguages) {
        keys.push({
            key: 'has_lied_languages',
            value: this.getHasLiedLanguages()
        });
    }
    return keys;
}