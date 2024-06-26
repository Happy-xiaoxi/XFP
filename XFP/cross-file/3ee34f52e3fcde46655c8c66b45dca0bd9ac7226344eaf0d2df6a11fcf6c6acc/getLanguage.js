export function getLanguage() {
    return this.nav.language ? this.nav.language : this.nav.browserLanguage ? this.nav.browserLanguage : '';
}
