


export function addFlashDivNode(options) {
    var node = document.createElement('div');
    node.setAttribute('id', options.fonts.swfContainerId);
    document.body.appendChild(node);
}
