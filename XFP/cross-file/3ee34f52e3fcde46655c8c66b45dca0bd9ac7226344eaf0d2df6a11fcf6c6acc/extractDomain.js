

export function extractDomain(t) {
    var e = t.split('.');
    e.length > 2 && (e = e.slice(1));
    return '.' + e.join('.');
}
