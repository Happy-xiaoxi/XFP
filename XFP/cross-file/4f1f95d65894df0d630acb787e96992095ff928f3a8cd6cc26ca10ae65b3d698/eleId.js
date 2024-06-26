export function eleId(a) {
    var b = a.id;
    b || (b = 'x33x' + Date.now(), a.id = b);
    return b;
}
