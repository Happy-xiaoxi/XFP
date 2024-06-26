export function hasLiedResolutionKey(e) {
    return this.options.excludeHasLiedResolution || e.addPreprocessedComponent({
        key: 'has_lied_resolution',
        value: getHasLiedResolution()
    }), e;
}

export function getHasLiedResolution() {
    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
}
