;
;
export function addBehaviorKey(keys) {
    if (document.body && !this.options.excludeAddBehavior && document.body.addBehavior) {
        keys.push({
            key: 'add_behavior',
            value: 1
        });
    }
    return keys;
}