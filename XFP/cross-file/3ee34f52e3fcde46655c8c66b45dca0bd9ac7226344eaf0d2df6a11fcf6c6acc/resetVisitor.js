


export function resetVisitor() {
    this.resetVisitorIdentity();
    this.crossDomainLinkingEnabled && this.enableAutomaticLinker();
    this.handleSearchLinks();
}
