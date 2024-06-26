export function XMLGetNamedAttr(node, attrName) {
    try {
        return null == node ? '' : node.attributes.getNamedItem(attrName).value;
    } catch (e) {
        return '';
    }
}
