
export function addFlashDivNode() {
    var node = document.createElement('div');
    node.setAttribute('id', this.options.swfContainerId);
    document.body.appendChild(node);
}
