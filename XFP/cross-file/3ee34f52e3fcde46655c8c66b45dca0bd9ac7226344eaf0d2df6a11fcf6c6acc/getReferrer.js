export function getReferrer() {
    var t = '';
    try {
        t = this.top.document.referrer;
    } catch (e) {
        if (parent)
            try {
                t = this.parent.document.referrer;
            } catch (e) {
                t = '';
            }
    }
    '' === t && (t = this.doc.referrer);
    return t;
}
