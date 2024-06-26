export function XMLGetNodes(xmlDoc, tagName) {
    try {
        return null == xmlDoc ? null : xmlDoc.getElementsByTagName(tagName);
    } catch (e) {
        return null;
    }
}
