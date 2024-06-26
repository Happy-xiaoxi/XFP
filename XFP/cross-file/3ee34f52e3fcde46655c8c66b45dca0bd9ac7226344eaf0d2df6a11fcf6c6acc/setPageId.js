export function setPageId(t) {
    this.pageId = t;
    for (var e = 0; e < this.pageIdListeners.length; e++)
        this.pageIdListeners[e](this.pageId);
}
