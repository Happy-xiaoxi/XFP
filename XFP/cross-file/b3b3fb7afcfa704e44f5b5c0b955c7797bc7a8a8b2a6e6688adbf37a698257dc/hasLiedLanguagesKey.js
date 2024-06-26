export function hasLiedLanguagesKey(e) {
    return this.options.excludeHasLiedLanguages || e.addPreprocessedComponent({
        key: 'has_lied_languages',
        value: getHasLiedLanguages()
    }), e;
}

export function getHasLiedLanguages() {
    if (void 0 !== navigator.languages)
        try {
            if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                return !0;
        } catch (e) {
            return !0;
        }
    return !1;
}
