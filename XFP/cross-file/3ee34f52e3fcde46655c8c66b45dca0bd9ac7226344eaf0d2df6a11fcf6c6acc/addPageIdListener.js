
export function addPageIdListener(t) {
    this.pageId && t(this.pageId);
    this.pageIdListeners.push(t);
}
