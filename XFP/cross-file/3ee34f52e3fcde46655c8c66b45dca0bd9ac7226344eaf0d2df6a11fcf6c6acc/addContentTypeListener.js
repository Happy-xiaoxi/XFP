export function addContentTypeListener(t) {
    this.contentType && t(this.contentType);
    this.contentTypeListeners.push(t);
}
