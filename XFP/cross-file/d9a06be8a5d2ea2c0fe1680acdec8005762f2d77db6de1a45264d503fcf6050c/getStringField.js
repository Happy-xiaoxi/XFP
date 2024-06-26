
export function getStringField(str, deli, pos) {
    arr = str.split(deli);
    if (arr.length >= pos) {
        return arr[pos - 1];
    } else {
        return '';
    }
}
