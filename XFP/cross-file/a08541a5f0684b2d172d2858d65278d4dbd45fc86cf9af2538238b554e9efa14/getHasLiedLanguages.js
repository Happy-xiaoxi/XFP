;
;
export function getHasLiedLanguages() {
    if (typeof navigator.languages !== 'undefined') {
        try {
            var firstLanguages = navigator.languages[0].substr(0, 2);
            if (firstLanguages !== navigator.language.substr(0, 2)) {
                return true;
            }
        } catch (err) {
            return true;
        }
    }
    return false;
}