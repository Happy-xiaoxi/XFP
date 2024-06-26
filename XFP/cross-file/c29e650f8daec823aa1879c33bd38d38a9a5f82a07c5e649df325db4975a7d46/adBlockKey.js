export function adBlockKey(e) {
    return this.options.excludeAdBlock || e.addPreprocessedComponent({
        key: 'adblock',
        value: this.getAdBlock()
    }), e;
}
