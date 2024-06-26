export function XMLGetNodesLength(nodeList) {
    try {
        return null == nodeList ? 0 : nodeList.length;
    } catch (e) {
        return 0;
    }
}
