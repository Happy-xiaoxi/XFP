
export function addBehaviorKey(keys) {
    if (!this.options.excludeAddBehavior && document.body && document.body.addBehavior) {
        keys.addPreprocessedComponent({
            key: 'add_behavior',
            value: 1
        });
    }
    return keys;
}
