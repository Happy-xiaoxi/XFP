export function _setRelCanonicalUrl() {
    for (var t = document.getElementsByTagName('link'), e = 0; e < t.length; e++)
        if ('canonical' === t[e].rel) {
            this.relCanonicalUrl = t[e].href;
            return;
        }
}
