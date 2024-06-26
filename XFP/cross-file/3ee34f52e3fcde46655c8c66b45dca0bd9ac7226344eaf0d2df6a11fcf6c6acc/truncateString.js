export function truncateString(t, e) {
    return t ? t.length > e ? t.substr(0, e) : t : '';
}
