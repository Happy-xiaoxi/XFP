;
;
export function map(obj, iterator, context) {
    var results = [];
    if (obj == null) {
        return results;
    }
    if (this.nativeMap && obj.map === this.nativeMap) {
        return obj.map(iterator, context);
    }
    this.each(obj, function (value, index, list) {
        results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
}