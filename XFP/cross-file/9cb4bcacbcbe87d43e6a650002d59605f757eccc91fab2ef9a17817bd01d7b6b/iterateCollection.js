export function iterateCollection(collection) {
    return function (f) {
        for (var i = 0; collection[i]; i++) {
            f(collection[i], i);
        }
    };
}
