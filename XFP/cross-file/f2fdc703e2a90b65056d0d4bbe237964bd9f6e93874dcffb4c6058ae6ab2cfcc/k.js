;
;
export function k(a) {
    try {
        'js-errors' in t || (t['js-errors'] = []), t['js-errors'].push(a.toString());
    } catch (b) {
    }
}