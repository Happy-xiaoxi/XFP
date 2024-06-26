export function cleanString(string) {
    if (string === undefined || string === null) {
        return '';
    }
    string = string.replace(/['"]/g, '');
    return string.replace(/&quot;/g, '');
}
