export function toArray(a, b) {
    return Array.prototype.slice.call(a, b || 0);
}
