
export function resetDomain() {
    this.domain = hstc.utils.hashString(this.rawDomain);
}
