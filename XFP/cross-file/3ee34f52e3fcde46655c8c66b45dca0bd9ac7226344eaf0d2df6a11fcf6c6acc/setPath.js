
export function setPath(t) {
    '' == t && (t = '/');
    this.referrerPath = this.path;
    this.path = t;
    this.refreshPageHandlers();
}
