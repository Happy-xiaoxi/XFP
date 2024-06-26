
export function aB(keys) {
    if (document.body && document.body.addBehavior) {
        keys.data.push({
            key: 'add_behavior',
            value: 1
        });
    }
    return keys;
}
