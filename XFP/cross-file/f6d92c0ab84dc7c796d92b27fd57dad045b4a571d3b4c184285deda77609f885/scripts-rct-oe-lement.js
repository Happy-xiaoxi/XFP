
export function scriptSrcToElement(w, d, t, u) {
    var a = d.createElement(t);
    a.async = true;
    a.crossorigin = 'anonymous';
    a.src = u;
    var s = d.getElementsByTagName(t)[0];
    s.parentNode.insertBefore(a, s);
}
