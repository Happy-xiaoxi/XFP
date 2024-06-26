
export function addDomain(t) {
    hstc.utils.endsWith('.' + this.context.getHostName(), t) && (!this.currentDomain || t.length < this.currentDomain.length) && (this.currentDomain = t);
    this.domains.push(t);
}
