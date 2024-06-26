export function extend(source, target) {
    if (source === null) {
        return target;
    }
    for (var k in source) {
        if (source[k] !== null && target[k] !== source[k]) {
            target[k] = source[k];
        }
    }
    return target;
}
