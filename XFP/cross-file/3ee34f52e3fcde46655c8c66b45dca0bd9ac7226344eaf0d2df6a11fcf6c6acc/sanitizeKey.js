export function sanitizeKey(t) {
    return t && [
        '__proto__',
        'constructor',
        'prototype'
    ].indexOf(t.toLowerCase()) > -1 ? t.toUpperCase() : t;
}
