export function getHostName() {
    try {
        return this.loc.hostname;
    } catch (t) {
        return this.doc.domain;
    }
}
