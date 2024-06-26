export function addBehaviorKey(e) {
    return !this.options.excludeAddBehavior && document.body && document.body.addBehavior && e.addPreprocessedComponent({
        key: 'add_behavior',
        value: 1
    }), e;
}
