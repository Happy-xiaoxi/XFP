export function XMLGetNode(nodeList, i) {
    try {
        return null == nodeList ? null : nodeList.item(i);
    } catch (e) {
        return null;
    }
}
