



export function insertEle(a, b) {
    b ? 'script' == b.tagName.toLowerCase() ? b.parentNode.insertBefore(a, b) : b.appendChild(a) : document.body.appendChild(a);
}
