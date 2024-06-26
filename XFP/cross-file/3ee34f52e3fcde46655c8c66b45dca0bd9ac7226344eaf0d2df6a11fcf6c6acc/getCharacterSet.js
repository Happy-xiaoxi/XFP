export function getCharacterSet() {
    return this.doc.characterSet ? this.doc.characterSet : this.doc.charset ? this.doc.charset : '';
}
