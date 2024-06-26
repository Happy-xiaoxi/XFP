import {each} from './each.js';
export function map(obj, iterator) {
    var results = [];
    if (obj == null) {
        return results;
    }
    if (Array.prototype.map && obj.map === Array.prototype.map) {
        return obj.map(iterator);
    }
    each(obj, function (value, index, list) {
        results.push(iterator(value, index, list));
    });
    return results;
}