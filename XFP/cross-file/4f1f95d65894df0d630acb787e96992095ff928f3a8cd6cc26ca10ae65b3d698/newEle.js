


export function newEle(a, b, c, d) {
    d = d || window;
    a = d.document.createElement(a);
    b && this.extend(a, b);
    c && this.extend(a.style, c);
    return a;
}
