
export function jsonDecode(a) {
    if ('function' != typeof Array.prototype.toJSON)
        return JSON.stringify(a);
    var b = Array.prototype.toJSON;
    delete Array.prototype.toJSON;
    a = JSON.stringify(a);
    Array.prototype.toJSON = b;
    return a;
}
