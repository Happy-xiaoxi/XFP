export function removeDomain(t) {
    return '/' + t.split('//')[1].split('/').slice(1).join('/');
}
