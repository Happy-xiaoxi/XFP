export function stripNumericBrackets(t) {
    return (t || '').replace(/(^.+?)\[(.+?)\]/, '$1_$2');
}
