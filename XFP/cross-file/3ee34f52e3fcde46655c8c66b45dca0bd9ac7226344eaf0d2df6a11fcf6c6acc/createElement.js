
export function createElement(t) {
    var e = document.createDocumentFragment(), i = document.createElement('div');
    i.innerHTML = t;
    for (; i.firstChild;)
        e.appendChild(i.firstChild);
    return e;
}
