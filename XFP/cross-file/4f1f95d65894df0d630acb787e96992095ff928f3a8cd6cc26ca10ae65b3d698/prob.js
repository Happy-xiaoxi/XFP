
export function prob(a) {
    a = parseFloat(a) || 0;
    return Math.random() < a;
}
