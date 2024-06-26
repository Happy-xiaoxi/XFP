export function setContentType(t) {
    this.contentType = t;
    for (var e = 0; e < this.contentTypeListeners.length; e++)
        this.contentTypeListeners[e](this.contentType);
}
